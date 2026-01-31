/**
 * Hugging Face Service
 * Handles all interactions with Hugging Face Inference API
 */

// Read environment variables dynamically
const getHuggingFaceConfig = () => ({
  apiKey: process.env.HUGGINGFACE_API_KEY,
  modelId: process.env.HUGGINGFACE_MODEL_ID || 'google/vit-base-patch16-224',
  // Router API endpoint (new format - required)
  routerUrl: 'https://router.huggingface.co'
});

/**
 * Analyze image using Hugging Face Inference API
 * @param {string} base64Image - Base64 encoded image string
 * @param {string} mimeType - Image MIME type (e.g., 'image/jpeg')
 * @returns {Promise<Object>} Analysis result with concepts and matched category
 */
export const analyzeImageWithHuggingFace = async (base64Image, mimeType) => {
  // Hugging Face Router API is currently disabled due to 404 errors
  // The system will use local detection fallback instead
  console.log('⚠️ Hugging Face API is disabled. Using local detection fallback.');
  return null; // Return null to trigger fallback immediately
  
  /* DISABLED: Hugging Face Router API attempts
  try {
    const config = getHuggingFaceConfig();
    
    // Validate API key
    if (!config.apiKey) {
      console.error('❌ HUGGINGFACE_API_KEY is not set in environment variables');
      console.error('   Make sure .env file exists in backend/ folder with HUGGINGFACE_API_KEY');
      throw new Error('Hugging Face API key is not configured');
    }

    console.log('🔍 Calling Hugging Face Router API...');
    console.log(`   Model: ${config.modelId}`);

    // Try the router API with correct format
    // The router API might need the model in a different path structure
    let apiUrl = `https://router.huggingface.co/${config.modelId}`;
    const imageDataUri = `data:${mimeType};base64,${base64Image}`;

    // Make the API request
    let response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: imageDataUri
      })
    });

    // If 404, try with /models/ prefix
    if (!response.ok && response.status === 404) {
      console.log('⚠️ Trying with /models/ prefix...');
      apiUrl = `https://router.huggingface.co/models/${config.modelId}`;
      
      response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: imageDataUri
        })
      });
    }

    // If still 404, try router API with base64 directly (no data URI)
    if (!response.ok && response.status === 404) {
      console.log('⚠️ Trying router API with raw base64...');
      apiUrl = `https://router.huggingface.co/${config.modelId}`;
      
      response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: base64Image
        })
      });
    }

    // If still 404, try router API with /v1/ prefix
    if (!response.ok && response.status === 404) {
      console.log('⚠️ Trying router API with /v1/ prefix...');
      apiUrl = `https://router.huggingface.co/v1/models/${config.modelId}`;
      
      response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: imageDataUri
        })
      });
    }

    // Handle response
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      // Log detailed error for debugging
      console.error('❌ Hugging Face API Error Details:', {
        status: response.status,
        statusText: response.statusText,
        endpoint: apiUrl,
        error: errorData
      });
      
      // If all router formats failed, log and return null to allow fallback
      if (response.status === 404 || response.status === 410) {
        console.log(`⚠️ Hugging Face Router API not accessible for model: ${config.modelId}`);
        console.log(`   All router formats failed. This is okay - falling back to local detection.`);
        return null; // Return null to trigger fallback instead of throwing error
      }
      
      throw new Error(`Hugging Face API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    return await processHuggingFaceResponse(response);

  } catch (error) {
    console.error('❌ Hugging Face API error:', error);
    // Return null instead of throwing to allow fallback
    console.log('⚠️ Returning null to allow local detection fallback...');
    return null;
  }
  */
};

/**
 * Process Hugging Face API response
 * @param {Response} response - Fetch response object
 * @returns {Promise<Object>} Processed result with concepts and category
 */
const processHuggingFaceResponse = async (response) => {
  const data = await response.json();

  // Hugging Face returns an array of predictions with labels and scores
  // Format: [{label: "laptop", score: 0.95}, {label: "computer", score: 0.03}, ...]
  const predictions = Array.isArray(data) ? data : [data];
  
  // Extract top predictions
  const topPredictions = predictions
    .flat()
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 10);

  if (topPredictions.length === 0) {
    console.log('⚠️ No predictions detected by Hugging Face');
    return {
      concepts: [],
      category: null,
      message: 'No objects detected in the image'
    };
  }

  // Log top predictions
  const topConcepts = topPredictions.map(p => ({
    name: p.label || p.class || String(p),
    confidence: ((p.score || 0) * 100).toFixed(1) + '%'
  }));

  console.log('✅ Hugging Face detected concepts:', topConcepts);

  // Get predictions with >30% confidence
  const relevantConcepts = topPredictions
    .filter(p => (p.score || 0) > 0.3)
    .map(p => (p.label || p.class || String(p)).toLowerCase());

  // Match concepts with product categories
  const matchedCategory = matchCategoryFromConcepts(relevantConcepts);

  return {
    concepts: topConcepts,
    relevantConcepts: relevantConcepts,
    category: matchedCategory,
    allConcepts: topPredictions.map(p => ({
      name: p.label || p.class || String(p),
      value: p.score || 0
    }))
  };
};

/**
 * Match Hugging Face predictions with product categories
 * @param {Array} concepts - Array of detected concept names (lowercase)
 * @returns {string|null} Matched category
 */
const matchCategoryFromConcepts = (concepts) => {
  if (concepts.length === 0) return null;

  const conceptString = concepts.join(' ');

  // Category matching rules (ordered by priority)
  const categoryRules = {
    'Laptops': ['laptop', 'notebook', 'macbook', 'computer', 'pc', 'desktop computer', 'portable computer', 'notebook computer'],
    'Monitors': ['monitor', 'screen', 'display', 'computer monitor', 'lcd', 'led screen', 'computer screen', 'flat screen'],
    'Keyboards': ['keyboard', 'computer keyboard', 'typing', 'qwerty', 'mechanical keyboard'],
    'Mice': ['mouse', 'computer mouse', 'pointing device', 'trackpad', 'wireless mouse'],
    'Headphones': ['headphone', 'headset', 'earphone', 'audio', 'earbud', 'earphones'],
    'Desktops': ['desktop', 'tower', 'computer tower', 'pc tower', 'desktop computer'],
    'Storage': ['hard drive', 'ssd', 'storage', 'external drive', 'usb drive', 'flash drive', 'hard disk'],
    'Webcams': ['webcam', 'camera', 'video camera', 'web camera', 'usb camera'],
    'Accessories': ['usb', 'hub', 'adapter', 'charger', 'cable', 'connector', 'dongle']
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
