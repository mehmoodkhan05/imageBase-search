import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { analyzeImageWithClarifai } from './services/clarifaiService.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads (memory storage)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Root endpoint - API information
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Image Search Backend API',
    version: '1.0.0',
    endpoints: {
      health: 'GET /health',
      analyzeImage: 'POST /api/analyze-image'
    },
    documentation: 'See README.md for API documentation',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Image Search Backend API is running',
    timestamp: new Date().toISOString()
  });
});

// Image analysis endpoint
app.post('/api/analyze-image', upload.single('image'), async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ 
        error: 'No image file provided',
        message: 'Please upload an image file'
      });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json({ 
        error: 'Invalid file type',
        message: 'Only JPEG, PNG, and WebP images are supported'
      });
    }

    // Validate file size (already handled by multer, but double-check)
    if (req.file.size > 10 * 1024 * 1024) {
      return res.status(400).json({ 
        error: 'File too large',
        message: 'Image size must be less than 10MB'
      });
    }

    console.log(`📸 Analyzing image: ${req.file.originalname} (${req.file.size} bytes)`);

    // Convert buffer to base64
    const base64Image = req.file.buffer.toString('base64');

    // Call Clarifai API
    const result = await analyzeImageWithClarifai(base64Image, req.file.mimetype);

    // Return the analysis result
    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('❌ Error analyzing image:', error);
    
    // Return appropriate error response
    res.status(error.status || 500).json({
      success: false,
      error: error.message || 'Failed to analyze image',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        error: 'File too large',
        message: 'Image size must be less than 10MB'
      });
    }
  }

  console.error('❌ Server error:', error);
  res.status(500).json({
    success: false,
    error: error.message || 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    message: `Cannot ${req.method} ${req.path}`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔑 Clarifai Model: ${process.env.CLARIFAI_MODEL_ID}`);
  console.log(`✅ Health check: http://localhost:${PORT}/health`);
});
