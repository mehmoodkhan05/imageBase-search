# Image-Based Product Search System

A modern React.js web application that enables users to upload an image and search for visually similar products using image recognition technology.

## Features

- 🖼️ **Image Upload**: Drag-and-drop or browse to upload images
- 🔍 **Visual Search**: Find products similar to uploaded images
- 📱 **Responsive Design**: Works seamlessly on all devices
- ✅ **Image Validation**: Validates file type and size before upload
- 🎨 **Modern UI**: Beautiful, user-friendly interface built with React Bootstrap
- ⚡ **Fast Performance**: Optimized for quick response times
- 🛡️ **Error Handling**: Comprehensive error handling and user feedback

## Technology Stack

- **Vite** (v5.0.8) - Next-generation frontend build tool
- **React.js** (v18.2.0) - Component-based UI framework
- **React Bootstrap** (v2.9.1) - UI component library
- **Bootstrap** (v5.3.2) - CSS framework
- **CSS3** - Custom styling and animations

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd image-search
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

Vite provides lightning-fast Hot Module Replacement (HMR) for instant updates during development.

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The `dist` folder will contain the optimized production files.

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
image-search/
├── index.html          # Main HTML file (Vite entry point)
├── vite.config.js      # Vite configuration
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Navigation.css
│   │   ├── ImageUpload.js
│   │   ├── ImageUpload.css
│   │   ├── SearchResults.js
│   │   └── SearchResults.css
│   ├── services/
│   │   └── imageSearchService.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx        # Application entry point
│   └── index.css
├── package.json
└── README.md
```

## Usage

1. **Upload an Image**:
   - Click "Browse Files" or drag and drop an image into the upload area
   - Supported formats: JPEG, PNG, WebP
   - Maximum file size: 5MB

2. **Search for Products**:
   - After uploading, click "Search Products"
   - The system will analyze the image and find similar products

3. **View Results**:
   - Browse through the search results displayed in a responsive grid
   - Each product shows similarity percentage, name, and price

## Image Recognition Integration

Currently, the application uses mock data for demonstration purposes. To integrate with actual image recognition services, you can:

### Option 1: Google Vision API
```javascript
// Example integration in App.js
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ image: base64Image })
});
```

### Option 2: AWS Rekognition
```javascript
// Use AWS SDK to call Rekognition API
import AWS from 'aws-sdk';
const rekognition = new AWS.Rekognition();
```

### Option 3: Azure Computer Vision
```javascript
// Use Azure SDK for image analysis
import { ComputerVisionClient } from '@azure/cognitiveservices-computervision';
```

### Option 4: Hugging Face
```javascript
// Use Hugging Face Inference API for visual recognition
const response = await fetch('https://api-inference.huggingface.co/models/google/vit-base-patch16-224', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${YOUR_API_TOKEN}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ inputs: base64Image })
});
```

## Configuration

### Image Upload Settings
Modify the following constants in `src/components/ImageUpload.js`:
- `MAX_FILE_SIZE`: Maximum file size (default: 5MB)
- `ALLOWED_TYPES`: Allowed image formats

### Vite Configuration
Customize Vite settings in `vite.config.js`:
- Development server port
- Build output directory
- Source maps
- Additional plugins

## Error Handling

The application handles various error scenarios:
- Invalid file format
- File size exceeds limit
- Network errors
- No search results found

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- **Vite's Fast Build**: Lightning-fast development and optimized production builds
- Image compression before upload
- Lazy loading of result images
- Efficient React state management
- Optimized re-renders
- Code splitting and tree-shaking (automatic with Vite)

## Security Considerations

- File type validation
- File size limits
- Secure API communication (when integrated)
- Protection against malicious uploads

## Future Enhancements

- Integration with real image recognition APIs
- Backend API for product database
- User authentication
- Search history
- Advanced filtering options
- Product comparison feature

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please open an issue on the repository.

---

**Note**: This is a frontend demonstration application. For production use, integrate with actual image recognition services and backend APIs.
