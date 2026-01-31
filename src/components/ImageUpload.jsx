import React, { useState, useRef } from 'react';
import { Card, Button, Alert, Spinner } from 'react-bootstrap';
import './ImageUpload.css';

const ImageUpload = ({ onSearch, onImageUpload, onImageRemove, isSearching }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  const validateFile = (file) => {
    // Check file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('Invalid file format. Please upload a JPEG, PNG, or WebP image.');
      return false;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      setError('File size exceeds 5MB limit. Please upload a smaller image.');
      return false;
    }

    return true;
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setError(null);

    if (!validateFile(file)) {
      setSelectedFile(null);
      setPreviewUrl(null);
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = async () => {
      setPreviewUrl(reader.result);
      // Automatically trigger search when image is uploaded
      await onImageUpload(file, reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];
    if (!file) return;

    if (!validateFile(file)) {
      return;
    }

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = async () => {
      setPreviewUrl(reader.result);
      // Automatically trigger search when image is dropped
      await onImageUpload(file, reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSearch = () => {
    if (!selectedFile) {
      setError('Please select an image first.');
      return;
    }
    onSearch(selectedFile);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    // Notify parent that image was removed
    if (onImageRemove) {
      onImageRemove();
    }
  };

  return (
    <Card className="upload-card">
      <Card.Body>
        <h3 className="upload-title">Upload Your Image</h3>
        <p className="upload-subtitle">
          Select an image from your device or drag and drop it here
        </p>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <div
          className="upload-area"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {previewUrl ? (
            <div className="preview-container">
              <img src={previewUrl} alt="Preview" className="preview-image" />
              <div className="preview-overlay">
                <Button
                  variant="dark"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className="me-2 change-image-btn"
                >
                  Change Image
                </Button>
                <Button
                  variant="dark"
                  size="sm"
                  onClick={handleReset}
                  className="remove-image-btn"
                >
                  Remove
                </Button>
              </div>
            </div>
          ) : (
            <div className="upload-placeholder">
              <div className="upload-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <p className="upload-text">
                Drag and drop your image here, or click to browse
              </p>
              <Button
                variant="primary"
                onClick={() => fileInputRef.current?.click()}
                className="browse-button"
              >
                Browse Files
              </Button>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            onChange={handleFileSelect}
            className="file-input"
          />
        </div>

        {selectedFile && (
          <div className="file-info mt-3">
            <p className="file-name">
              <strong>Selected:</strong> {selectedFile.name}
            </p>
            <p className="file-size">
              <strong>Size:</strong> {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        <div className="action-buttons mt-4">
          <Button
            variant="success"
            size="lg"
            onClick={handleSearch}
            disabled={!selectedFile || isSearching}
            className="search-button"
          >
            {isSearching ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Searching...
              </>
            ) : (
              <>
                <i className="fas fa-search me-2"></i>
                Search Again
              </>
            )}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ImageUpload;
