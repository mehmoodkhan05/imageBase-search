# Setup Guide - Image Search Application

This guide will help you set up both the frontend and backend for the Image Search application.

## Project Structure

```
image-search/
├── backend/          # Node.js/Express backend server
├── src/              # React frontend application
├── package.json      # Frontend dependencies
└── README.md         # Project documentation
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Clarifai API key

## Step 1: Backend Setup

### 1.1 Install Backend Dependencies

```bash
cd backend
npm install
```

### 1.2 Configure Environment Variables

The `.env` file is already created with your API key. If you need to update it:

```bash
# Edit backend/.env
CLARIFAI_API_KEY=a1969a5cf3884acea3dc6e9fea6fe106
CLARIFAI_USER_ID=clarifai
CLARIFAI_MODEL_ID=general-image-recognition
PORT=5000
NODE_ENV=development
```

### 1.3 Start the Backend Server

**Development mode (with auto-reload):**
```bash
cd backend
npm run dev
```

**Production mode:**
```bash
cd backend
npm start
```

The backend will run on `http://localhost:5000`

You should see:
```
🚀 Server running on http://localhost:5000
📡 Environment: development
🔑 Clarifai Model: general-image-recognition
✅ Health check: http://localhost:5000/health
```

## Step 2: Frontend Setup

### 2.1 Install Frontend Dependencies

```bash
# From the root directory
npm install
```

### 2.2 Configure Backend URL (Optional)

If your backend runs on a different URL, create a `.env` file in the root:

```bash
# .env (in root directory)
REACT_APP_BACKEND_URL=http://localhost:5000
```

### 2.3 Start the Frontend

```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## Step 3: Test the Application

1. **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend (in a new terminal):**
   ```bash
   npm run dev
   ```

3. **Open Browser:**
   - Frontend: http://localhost:3000
   - Backend Health Check: http://localhost:5000/health

4. **Test Image Upload:**
   - Go to the home page
   - Upload a laptop image
   - Check the browser console for logs
   - Verify that only laptop products are shown

## Troubleshooting

### Backend Issues

**Port already in use:**
```bash
# Change PORT in backend/.env to a different port (e.g., 5001)
PORT=5001
```

**Clarifai API errors:**
- Verify your API key is correct in `backend/.env`
- Check that the model ID is correct
- Check backend console for detailed error messages

### Frontend Issues

**Backend connection errors:**
- Make sure the backend is running
- Check that `BACKEND_API_URL` in `src/services/imageSearchService.js` matches your backend URL
- Check browser console for CORS errors

**CORS errors:**
- Make sure backend CORS is configured correctly
- Update `FRONTEND_URL` in `backend/.env` if your frontend runs on a different port

## Development Workflow

1. Start backend first: `cd backend && npm run dev`
2. Start frontend: `npm run dev`
3. Make changes and see them reflected automatically
4. Check console logs for debugging

## Production Deployment

### Backend:
1. Set `NODE_ENV=production` in `backend/.env`
2. Update `FRONTEND_URL` to your production frontend URL
3. Use PM2 or similar process manager:
   ```bash
   pm2 start backend/server.js --name image-search-backend
   ```

### Frontend:
1. Build the app: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update `REACT_APP_BACKEND_URL` to your production backend URL

## API Endpoints

### Backend API

- `GET /health` - Health check
- `POST /api/analyze-image` - Analyze uploaded image

See `backend/README.md` for detailed API documentation.

## Support

If you encounter any issues:
1. Check the console logs (both browser and backend)
2. Verify all environment variables are set correctly
3. Ensure both servers are running
4. Check network connectivity
