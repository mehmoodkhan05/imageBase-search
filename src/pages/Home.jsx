import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ImageUpload from '../components/ImageUpload.jsx';
import SearchResults from '../components/SearchResults.jsx';
import { searchProductsByImage } from '../services/imageSearchService.js';
import '../App.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSearch = async (imageFile) => {
    setIsSearching(true);
    setError(null);
    setSearchResults([]);

    try {
      const results = await searchProductsByImage(imageFile);
      setSearchResults(results);
    } catch (err) {
      setError('Failed to search for products. Please try again.');
      console.error('Search error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleImageUpload = async (imageFile, previewUrl) => {
    setUploadedImage(previewUrl);
    setSearchResults([]);
    setError(null);
    
    // Automatically search when image is uploaded
    if (imageFile) {
      setIsSearching(true);
      try {
        const results = await searchProductsByImage(imageFile);
        setSearchResults(results);
      } catch (err) {
        setError('Failed to search for products. Please try again.');
        console.error('Search error:', err);
      } finally {
        setIsSearching(false);
      }
    }
  };

  const handleImageRemove = () => {
    setUploadedImage(null);
    setSearchResults([]);
    setError(null);
  };

  return (
    <div className="App">
      <Container className="main-container">
        <div className="hero-section">
          <h1 className="hero-title">Image-Based Product Search</h1>
          <p className="hero-subtitle">
            Upload an image to find visually similar products
          </p>
        </div>

        <ImageUpload
          onSearch={handleSearch}
          onImageUpload={handleImageUpload}
          onImageRemove={handleImageRemove}
          isSearching={isSearching}
        />

        {error && (
          <div className="alert alert-danger mt-4" role="alert">
            {error}
          </div>
        )}

        {uploadedImage && searchResults.length > 0 && (
          <SearchResults results={searchResults} />
        )}

        {uploadedImage && !isSearching && searchResults.length === 0 && !error && (
          <div className="no-results mt-4">
            <p>No matching products found. Try uploading a different image.</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
