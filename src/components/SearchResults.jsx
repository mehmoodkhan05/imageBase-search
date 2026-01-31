import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="search-results-section">
      <h2 className="results-title">
        <i className="fas fa-th me-2"></i>
        Similar Products Found
      </h2>
      <p className="results-subtitle">
        {results.length} product{results.length !== 1 ? 's' : ''} found
      </p>

      <Row className="results-grid">
        {results.map((product) => (
          <Col
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className="mb-4"
          >
            <Card className="product-card h-100">
              <div className="product-image-container">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    // Use SVG data URI as fallback (no external service needed)
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <Badge bg="success" className="similarity-badge">
                  {product.similarity} Match
                </Badge>
              </div>
              <Card.Body className="product-body">
                <Card.Title className="product-name">{product.name}</Card.Title>
                <Card.Text className="product-price">
                  {typeof product.price === 'number' 
                    ? new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                      }).format(product.price)
                    : product.price}
                </Card.Text>
                <div className="product-actions">
                  <Link to={`/products/${product.id}`}>
                    <button className="btn-view-details">
                      View Details
                    </button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchResults;
