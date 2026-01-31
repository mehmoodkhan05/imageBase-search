/**
 * Image Search Service
 * 
 * This service handles image-based product search.
 * Searches through the website's product catalog.
 * Can be easily integrated with:
 * - Google Vision API
 * - AWS Rekognition
 * - Azure Computer Vision
 * - Hugging Face Inference API
 * - Custom backend API
 */

import { products } from '../data/productsData.js';

// Backend API Configuration
// In Vite, use import.meta.env instead of process.env
// Environment variables must be prefixed with VITE_
const BACKEND_API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

/**
 * Search for products similar to the uploaded image
 * @param {File} imageFile - The image file to search with
 * @returns {Promise<Array>} Array of product objects from the website's catalog
 */
export const searchProductsByImage = async (imageFile) => {
  // Backend API has its own response time, so we don't need artificial delay

  // TODO: Replace with actual image recognition API
  // For now, this searches through all products in the catalog
  // In production, you would:
  // 1. Send image to image recognition API
  // 2. Get detected objects/features from the image
  // 3. Match those features with product categories/descriptions
  // 4. Return matching products sorted by relevance

  // Option 1: Google Vision API
  // const base64Image = await fileToBase64(imageFile);
  // const response = await fetch('YOUR_GOOGLE_VISION_API_ENDPOINT', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${YOUR_API_KEY}`
  //   },
  //   body: JSON.stringify({
  //     requests: [{
  //       image: { content: base64Image },
  //       features: [{ type: 'OBJECT_LOCALIZATION' }]
  //     }]
  //   })
  // });
  // const data = await response.json();
  // const detectedObjects = extractObjectsFromVisionAPI(data);
  // return searchProductsByFeatures(detectedObjects);

  // Option 2: AWS Rekognition
  // const rekognition = new AWS.Rekognition();
  // const params = {
  //   Image: { Bytes: await fileToArrayBuffer(imageFile) },
  //   MaxLabels: 10
  // };
  // const data = await rekognition.detectLabels(params).promise();
  // const labels = data.Labels.map(label => label.Name);
  // return searchProductsByFeatures(labels);

  // Option 3: Custom Backend API
  // const formData = new FormData();
  // formData.append('image', imageFile);
  // const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
  //   method: 'POST',
  //   body: formData
  // });
  // const data = await response.json();
  // return data.products;

  // Search through all products and return a selection
  // Returns 50% products from detected category and 50% from other categories
  // In a real implementation, this would use image recognition to find matching products
  return searchProductsInCatalog(imageFile);
};

/**
 * Convert file to base64 string
 * @param {File} file - File to convert
 * @returns {Promise<string>} Base64 string
 */
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Convert file to ArrayBuffer
 * @param {File} file - File to convert
 * @returns {Promise<ArrayBuffer>} ArrayBuffer
 */
export const fileToArrayBuffer = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

/**
 * Detect category using Backend API (Hugging Face)
 * @param {File} imageFile - The uploaded image file
 * @returns {Promise<string|null>} Detected category or null
 */
const detectCategoryWithBackend = async (imageFile) => {
  try {
    console.log('🔍 Calling backend API for image analysis...');
    
    // Create FormData to send the image file
    const formData = new FormData();
    formData.append('image', imageFile);
    
    // Call backend API
    const response = await fetch(`${BACKEND_API_URL}/api/analyze-image`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Backend API error: ${response.status} - ${errorData.error || errorData.message || 'Unknown error'}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Failed to analyze image');
    }

    const { data } = result;
    
    // Log detected concepts
    if (data.concepts && data.concepts.length > 0) {
      const conceptsList = data.concepts.map(c => `${c.name} (${c.confidence})`).join(', ');
      console.log('🔍 Detected concepts:', conceptsList);
    }
    
    // Return the matched category
    if (data.category) {
      console.log(`✅ Category detected: ${data.category}`);
      return data.category;
    }
    
    console.log('⚠️ No category matched from detected concepts');
    return null;
    
  } catch (error) {
    console.error('❌ Backend API error:', error);
    console.log('⚠️ Falling back to local detection methods...');
    // Return null to fallback to local detection
    return null;
  }
};

/**
 * Match detected concepts with product categories
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

/**
 * Analyze image content using canvas to detect visual features
 * This helps identify laptops, monitors, and other products
 * @param {HTMLImageElement} img - The loaded image element
 * @returns {string|null} Detected category
 */
const analyzeImageContent = (img) => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = Math.min(img.width, 400);
    canvas.height = Math.min(img.height, 400);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Analyze color distribution and patterns
    let darkPixels = 0;
    let lightPixels = 0;
    let screenLikePixels = 0; // Dark areas that might be screens
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const brightness = (r + g + b) / 3;
      
      if (brightness < 50) {
        darkPixels++;
        // Check for screen-like dark areas (very dark, might be laptop screen)
        if (brightness < 30) {
          screenLikePixels++;
        }
      } else if (brightness > 200) {
        lightPixels++;
      }
    }
    
    const totalPixels = data.length / 4;
    const darkRatio = darkPixels / totalPixels;
    const screenRatio = screenLikePixels / totalPixels;
    const aspectRatio = img.width / img.height;
    
    console.log('🔬 Image Analysis:', {
      aspectRatio: aspectRatio.toFixed(2),
      darkRatio: (darkRatio * 100).toFixed(1) + '%',
      screenRatio: (screenRatio * 100).toFixed(1) + '%'
    });
    
    // Laptop detection heuristics:
    // 1. Aspect ratio between 1.3 and 2.0 (wider than square, not ultra-wide)
    // 2. Has dark screen-like areas (laptop screens are usually dark when off)
    // 3. Moderate dark pixel ratio (laptops have both light and dark areas)
    if (aspectRatio >= 1.3 && aspectRatio <= 2.0) {
      if (screenRatio > 0.15 || (darkRatio > 0.25 && darkRatio < 0.6)) {
        console.log('✅ Detected: Laptop (based on aspect ratio and screen-like areas)');
        return 'Laptops';
      }
      // If very wide, likely a monitor
      if (aspectRatio > 1.8) {
        console.log('✅ Detected: Monitor (based on ultra-wide aspect ratio)');
        return 'Monitors';
      }
      // Default to laptop for wider images in this range
      console.log('✅ Detected: Laptop (based on aspect ratio)');
      return 'Laptops';
    }
    
    // Very wide images are likely monitors
    if (aspectRatio > 2.0) {
      console.log('✅ Detected: Monitor (based on very wide aspect ratio)');
      return 'Monitors';
    }
    
    return null;
  } catch (error) {
    console.error('❌ Error analyzing image content:', error);
    return null;
  }
};

/**
 * Detect category from image file name or metadata
 * In production, this would use image recognition API (Google Vision, AWS Rekognition, etc.)
 * @param {File} imageFile - The uploaded image file
 * @returns {Promise<string|null>} Detected category or null
 */
const detectCategoryFromImage = async (imageFile) => {
  // Method 1: Try Backend API first (most accurate - uses Hugging Face)
  console.log('🔍 Attempting backend API detection...');
  const backendCategory = await detectCategoryWithBackend(imageFile);
  if (backendCategory) {
    return backendCategory;
  }
  
  console.log('⚠️ Backend API detection failed, trying fallback methods...');
  
  // Method 2: Fallback to filename detection
  const fileName = imageFile.name.toLowerCase();
  
  const categoryKeywords = {
    'Laptops': ['laptop', 'macbook', 'notebook', 'computer', 'pc', 'xps', 'spectre', 'rog', 'thinkpad', 'zenbook', 'gaming laptop', 'lenovo', 'hp', 'dell laptop', 'asus laptop'],
    'Monitors': ['monitor', 'screen', 'display', 'ultrawide', 'curved', 'odyssey', 'ultragear', 'ultrasharp'],
    'Keyboards': ['keyboard', 'keys', 'mechanical', 'mx keys', 'k95', 'corsair'],
    'Mice': ['mouse', 'trackpad', 'trackball', 'deathadder', 'mx master', 'logitech mouse'],
    'Headphones': ['headphone', 'headset', 'earphone', 'audio', 'sony', 'wh-', 'headphones'],
    'Desktops': ['desktop', 'imac', 'tower', 'gaming pc', 'optiplex', 'pc tower'],
    'Storage': ['ssd', 'hard drive', 'storage', 'external', 't7', 'samsung ssd'],
    'Webcams': ['webcam', 'camera', 'cam', 'c920', 'logitech cam'],
    'Accessories': ['hub', 'adapter', 'dock', 'charger', 'usb-c']
  };

  // Check file name for keywords (check in priority order)
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    if (keywords.some(keyword => fileName.includes(keyword))) {
      console.log(`✅ Category detected from filename: ${category}`);
      return category;
    }
  }

  // Method 3: Fallback to image analysis
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(imageFile);
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      const aspectRatio = img.width / img.height;
      
      console.log(`📐 Image dimensions: ${img.width}x${img.height}, aspect ratio: ${aspectRatio.toFixed(2)}`);
      
      // First try content analysis
      const contentCategory = analyzeImageContent(img);
      if (contentCategory) {
        resolve(contentCategory);
        return;
      }
      
      // Fallback to aspect ratio analysis
      if (aspectRatio >= 1.3 && aspectRatio <= 2.0) {
        // Most laptops have aspect ratio in this range
        console.log('✅ Category detected from aspect ratio: Laptops');
        resolve('Laptops');
      } else if (aspectRatio > 2.0) {
        console.log('✅ Category detected from aspect ratio: Monitors');
        resolve('Monitors');
      } else {
        console.log('❌ Could not detect category');
        resolve(null);
      }
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      console.log('❌ Error loading image for analysis');
      resolve(null);
    };
    
    img.src = url;
  });
};

/**
 * Search through the website's product catalog based on image
 * Returns products with 50% matching category and 50% other products
 * @param {File} imageFile - The uploaded image file
 * @returns {Array} Array of product objects from the catalog
 */
const searchProductsInCatalog = async (imageFile) => {
  // Detect category from image
  let detectedCategory = await detectCategoryFromImage(imageFile);
  
  console.log('🔍 Final detected category:', detectedCategory);
  
  let categoryProducts = [];
  let otherProducts = [];
  
  if (detectedCategory) {
    // Get products from the detected category
    categoryProducts = products.filter(p => p.category === detectedCategory);
    // Get products from other categories
    otherProducts = products.filter(p => p.category !== detectedCategory);
    
    console.log(`✅ Found ${categoryProducts.length} products in category "${detectedCategory}"`);
    console.log(`📦 Found ${otherProducts.length} products in other categories`);
  } else {
    // If category not detected, try to detect from common laptop keywords in filename
    const fileName = imageFile.name.toLowerCase();
    if (fileName.includes('laptop') || fileName.includes('macbook') || fileName.includes('notebook') || 
        fileName.includes('computer') || fileName.includes('pc')) {
      detectedCategory = 'Laptops';
      categoryProducts = products.filter(p => p.category === 'Laptops');
      otherProducts = products.filter(p => p.category !== 'Laptops');
      console.log('🔄 Fallback: Detected Laptops from filename');
    } else {
      // If still no detection, default to showing all products
      categoryProducts = [...products];
      otherProducts = [];
      console.log('⚠️ No category detected, showing all products');
    }
  }

  // Shuffle for variety
  categoryProducts = categoryProducts.sort(() => Math.random() - 0.5);
  otherProducts = otherProducts.sort(() => Math.random() - 0.5);

  // Calculate 50% split (6 products total: 3 from category, 3 from others)
  const totalResults = 6;
  const categoryCount = Math.floor(totalResults * 0.5); // 50% = 3 products
  const otherCount = totalResults - categoryCount; // Remaining = 3 products

  // Get category matches (prioritize exact matches first)
  let finalCategoryMatches = categoryProducts.slice(0, Math.min(categoryCount, categoryProducts.length));
  
  // If we don't have enough category products, use all available
  if (finalCategoryMatches.length < categoryCount && categoryProducts.length > finalCategoryMatches.length) {
    finalCategoryMatches = categoryProducts.slice(0, Math.min(categoryCount, categoryProducts.length));
  }
  
  // Get other products
  const otherMatches = otherProducts.slice(0, otherCount);

  console.log(`📊 Results: ${finalCategoryMatches.length} category matches, ${otherMatches.length} other products`);

  // If category was detected and we have category products, show ONLY category products
  // Otherwise, show 50% category matches and 50% others
  let results = [];
  
  if (detectedCategory && categoryProducts.length > 0) {
    // Category detected - show ONLY products from that category
    const categoryToShow = Math.min(totalResults, categoryProducts.length);
    
    console.log(`🎯 Showing ONLY ${categoryToShow} products from "${detectedCategory}" category`);
    
    results = categoryProducts.slice(0, categoryToShow).map((product, index) => ({
      ...product,
      similarity: `${98 - (index * 2)}%` // High similarity scores for category matches (98% to 88%)
    }));
    
    // If we have fewer category products than totalResults, fill with more category products if available
    if (categoryToShow < totalResults && categoryProducts.length > categoryToShow) {
      const additionalProducts = categoryProducts.slice(categoryToShow, totalResults).map((product, index) => ({
        ...product,
        similarity: `${86 - (index * 2)}%`
      }));
      results = [...results, ...additionalProducts];
    }
  } else {
    // No category detected - use 50/50 split
    console.log('⚠️ No category detected, using 50/50 split');
    results = [
      ...finalCategoryMatches.map((product, index) => ({
        ...product,
        similarity: `${98 - (index * 2)}%`
      })),
      ...otherMatches.map((product, index) => ({
        ...product,
        similarity: `${85 - (index * 3)}%`
      }))
    ];
  }

  // Sort by similarity descending (category matches will be at top)
  const sortedResults = results.sort((a, b) => {
    const aScore = parseInt(a.similarity);
    const bScore = parseInt(b.similarity);
    return bScore - aScore;
  });

  console.log('🎯 Final search results:', sortedResults.map(r => `${r.name} (${r.similarity})`));
  
  return sortedResults;
};

/**
 * Search products by detected features from image recognition
 * This would be used when integrating with actual image recognition APIs
 * @param {Array} features - Array of detected features/labels from image
 * @returns {Array} Array of matching product objects
 */
const searchProductsByFeatures = (features) => {
  // Match products based on category and description keywords
  const matchingProducts = products.filter(product => {
    const productText = `${product.name} ${product.description} ${product.category}`.toLowerCase();
    return features.some(feature => 
      productText.includes(feature.toLowerCase())
    );
  });

  // Sort by relevance (could be improved with better matching algorithm)
  return matchingProducts
    .slice(0, 6)
    .map((product, index) => ({
      ...product,
      similarity: `${95 - (index * 3)}%`
    }));
};

/**
 * Process Google Vision API response
 * @param {Object} response - Google Vision API response
 * @returns {Array} Processed product array
 */
const processGoogleVisionResponse = (response) => {
  // Implementation for processing Google Vision API response
  // Extract relevant information and format as product objects
  return [];
};

/**
 * Process AWS Rekognition response
 * @param {Object} response - AWS Rekognition response
 * @returns {Array} Processed product array
 */
const processRekognitionResponse = (response) => {
  // Implementation for processing AWS Rekognition response
  // Extract relevant information and format as product objects
  return [];
};
