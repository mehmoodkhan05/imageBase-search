/**
 * Clarifai Service
 * Handles all interactions with Clarifai API
 */

const CLARIFAI_API_KEY = process.env.CLARIFAI_API_KEY;
const CLARIFAI_USER_ID = process.env.CLARIFAI_USER_ID || 'clarifai';
const CLARIFAI_MODEL_ID = process.env.CLARIFAI_MODEL_ID || 'general-image-recognition';
const CLARIFAI_API_URL = 'https://api.clarifai.com/v2';

/**
 * Analyze image using Clarifai API
 * @param {string} base64Image - Base64 encoded image string
 * @param {string} mimeType - Image MIME type (e.g., 'image/jpeg')
 * @returns {Promise<Object>} Analysis result with concepts and matched category
 */
export const analyzeImageWithClarifai = async (base64Image, mimeType) => {
  try {
    // Validate API key
    if (!CLARIFAI_API_KEY) {
      throw new Error('Clarifai API key is not configured');
    }

    console.log('🔍 Calling Clarifai API...');

    // Construct the API endpoint
    // Try with user_id first (for public models)
    let apiUrl = `${CLARIFAI_API_URL}/models/${CLARIFAI_USER_ID}/${CLARIFAI_MODEL_ID}/outputs`;
    
    // Prepare the request body
    const requestBody = {
      inputs: [{
        data: {
          image: {
            base64: base64Image
          }
        }
      }]
    };

    // Make the API request
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${CLARIFAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Handle response
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      // If 404, try without user_id (some models don't need it)
      if (response.status === 404) {
        console.log('⚠️ Trying alternative endpoint format...');
        apiUrl = `${CLARIFAI_API_URL}/models/${CLARIFAI_MODEL_ID}/outputs`;
        
        const retryResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Key ${CLARIFAI_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });

        if (!retryResponse.ok) {
          const retryErrorData = await retryResponse.json().catch(() => ({}));
          throw new Error(`Clarifai API error: ${retryResponse.status} - ${JSON.stringify(retryErrorData)}`);
        }

        return await processClarifaiResponse(retryResponse);
      }

      throw new Error(`Clarifai API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    return await processClarifaiResponse(response);

  } catch (error) {
    console.error('❌ Clarifai API error:', error);
    throw error;
  }
};

/**
 * Process Clarifai API response
 * @param {Response} response - Fetch response object
 * @returns {Promise<Object>} Processed result with concepts and category
 */
const processClarifaiResponse = async (response) => {
  const data = await response.json();

  // Extract concepts from response
  const concepts = data.outputs?.[0]?.data?.concepts || [];

  if (concepts.length === 0) {
    console.log('⚠️ No concepts detected by Clarifai');
    return {
      concepts: [],
      category: null,
      message: 'No objects detected in the image'
    };
  }

  // Log top concepts
  const topConcepts = concepts
    .slice(0, 10)
    .map(c => ({
      name: c.name,
      confidence: (c.value * 100).toFixed(1) + '%'
    }));

  console.log('✅ Clarifai detected concepts:', topConcepts);

  // Get concepts with >30% confidence
  const relevantConcepts = concepts
    .filter(c => c.value > 0.3)
    .map(c => c.name.toLowerCase());

  // Match concepts with product categories
  const matchedCategory = matchCategoryFromConcepts(relevantConcepts);

  return {
    concepts: topConcepts,
    relevantConcepts: relevantConcepts,
    category: matchedCategory,
    allConcepts: concepts.map(c => ({
      name: c.name,
      value: c.value
    }))
  };
};

/**
 * Match Clarifai concepts with product categories
 * @param {Array} concepts - Array of detected concept names (lowercase)
 * @returns {string|null} Matched category
 */
const matchCategoryFromConcepts = (concepts) => {
  if (concepts.length === 0) return null;

  const conceptString = concepts.join(' ');

  // Category matching rules (ordered by priority)
  const categoryRules = {
    'Laptops': ['laptop', 'notebook', 'macbook', 'computer', 'pc', 'desktop computer', 'portable computer'],
    'Monitors': ['monitor', 'screen', 'display', 'computer monitor', 'lcd', 'led screen', 'computer screen'],
    'Keyboards': ['keyboard', 'computer keyboard', 'typing', 'qwerty'],
    'Mice': ['mouse', 'computer mouse', 'pointing device', 'trackpad'],
    'Headphones': ['headphone', 'headset', 'earphone', 'audio', 'earbud'],
    'Desktops': ['desktop', 'tower', 'computer tower', 'pc tower'],
    'Storage': ['hard drive', 'ssd', 'storage', 'external drive', 'usb drive', 'flash drive'],
    'Webcams': ['webcam', 'camera', 'video camera', 'web camera'],
    'Accessories': ['usb', 'hub', 'adapter', 'charger', 'cable', 'connector']
  };

  // Check each category (in priority order)
  for (const [category, keywords] of Object.entries(categoryRules)) {
    const matchedKeywords = keywords.filter(keyword =>
      conceptString.includes(keyword) ||
      concepts.some(concept => concept.includes(keyword) || keyword.includes(concept))
    );

    if (matchedKeywords.length > 0) {
      console.log(`✅ Matched category "${category}" from concepts: ${matchedKeywords.join(', ')}`);
      return category;
    }
  }

  console.log('❌ No category matched from concepts:', concepts);
  return null;
};
