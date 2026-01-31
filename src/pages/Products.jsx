import React, { useState, useMemo, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/productsData.js';
import './Products.css';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, sortBy, searchQuery]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="rating-stars">
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
        {hasHalfStar && <i className="fas fa-star-half-alt"></i>}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={i + fullStars} className="far fa-star"></i>
        ))}
        <span className="rating-value">{rating}</span>
      </div>
    );
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <Container>
          <h1 className="page-title">
            <i className="fas fa-laptop me-3"></i>
            Products
          </h1>
          <p className="page-subtitle">Discover the latest technology and accessories</p>
        </Container>
      </div>

      <Container className="products-container">
        {/* Filters and Search */}
        <h1 className="search-heading">Search your Products</h1>
        <div className="filters-section">
          <Row className="g-3">
            <Col md={6} lg={4}>
              <Form.Control
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </Col>
            <Col md={6} lg={4}>
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="category-select"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={12} lg={4}>
              <Form.Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </Form.Select>
            </Col>
          </Row>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing <strong>{filteredProducts.length}</strong> product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <Row className="products-grid">
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} lg={4} xl={4} className="mb-4">
                <Card className="product-card h-100">
                  <Link to={`/products/${product.id}`} className="product-image-link">
                    <div className="product-image-wrapper">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                            onError={(e) => {
                              // Use SVG data URI as fallback (no external service needed)
                              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                            }}
                      />
                    {product.originalPrice && (
                      <Badge bg="danger" className="discount-badge">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                    {!product.inStock && (
                      <Badge bg="secondary" className="stock-badge">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                  </Link>
                  <Card.Body className="product-body">
                    <Badge bg="info" className="category-badge mb-2">
                      {product.category}
                    </Badge>
                    <Link to={`/products/${product.id}`} className="product-name-link">
                      <Card.Title className="product-name">{product.name}</Card.Title>
                    </Link>
                    <Card.Text className="product-description">
                      {product.description}
                    </Card.Text>
                    
                    <div className="product-rating mb-2">
                      {renderStars(product.rating)}
                      <span className="reviews-count">({product.reviews} reviews)</span>
                    </div>

                    <div className="product-price-section">
                      {product.originalPrice && (
                        <span className="original-price">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                      <span className="current-price">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <div className="product-actions mt-3">
                      <Button
                        variant="primary"
                        className="w-100"
                        disabled={!product.inStock}
                      >
                        <i className="fas fa-shopping-cart me-2"></i>
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </Button>
                      <Link to={`/products/${product.id}`}>
                        <Button
                          variant="outline-secondary"
                          className="w-100 mt-2"
                        >
                          <i className="fas fa-info-circle me-2"></i>
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="no-products">
            <i className="fas fa-search fa-3x mb-3"></i>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
