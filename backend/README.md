# Image Search Backend API

Backend server for handling Clarifai image recognition API calls. This solves CORS issues by acting as a proxy between the frontend and Clarifai API.

## Features

- ✅ Image upload and analysis using Clarifai API
- ✅ CORS enabled for frontend communication
- ✅ File validation (type and size)
- ✅ Error handling and logging
- ✅ Category matching for product search

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update with your values:

```bash
cp .env.example .env
```

Edit `.env`:
```
CLARIFAI_API_KEY=your_api_key_here
CLARIFAI_USER_ID=clarifai
CLARIFAI_MODEL_ID=general-image-recognition
PORT=5000
NODE_ENV=development
```

### 3. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
```
GET /health
```

Returns server status.

### Analyze Image
```
POST /api/analyze-image
Content-Type: multipart/form-data

Body:
  image: <image file>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "concepts": [
      {
        "name": "laptop",
        "confidence": "95.2%"
      }
    ],
    "relevantConcepts": ["laptop", "computer"],
    "category": "Laptops",
    "allConcepts": [...]
  }
}
```

## Environment Variables

- `CLARIFAI_API_KEY` - Your Clarifai API key (required)
- `CLARIFAI_USER_ID` - Clarifai user ID (default: 'clarifai')
- `CLARIFAI_MODEL_ID` - Model ID to use (default: 'general-image-recognition')
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS (default: http://localhost:3000)

## Error Handling

The API returns appropriate HTTP status codes:
- `200` - Success
- `400` - Bad request (invalid file, missing file, etc.)
- `500` - Server error

## File Limits

- Maximum file size: 10MB
- Allowed types: JPEG, PNG, WebP

## Development

The server uses ES modules. Make sure your Node.js version supports ES modules (Node 14+).

## Production Deployment

1. Set `NODE_ENV=production`
2. Update `FRONTEND_URL` to your production frontend URL
3. Use a process manager like PM2:
   ```bash
   pm2 start server.js --name image-search-backend
   ```
