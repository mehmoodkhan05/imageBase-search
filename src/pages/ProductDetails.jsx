import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, Table } from 'react-bootstrap';
import { products } from '../data/productsData.js';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="product-details-page">
        <Container>
          <div className="not-found">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Button variant="primary" onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </Container>
      </div>
    );
  }

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
    <div className="product-details-page">
      <Container>
        <div className="breadcrumb-nav mb-4">
          <Link to="/">Home</Link>
          <span className="separator"> / </span>
          <Link to="/products">Products</Link>
          <span className="separator"> / </span>
          <span className="current">{product.name}</span>
        </div>

        <Row className="product-details-content">
          <Col md={6} className="product-images-section">
            <Card className="product-image-card">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="main-product-image"
                  onError={(e) => {
                    // Use SVG data URI as fallback (no external service needed)
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                  }}
              />
              {product.originalPrice && (
                <Badge bg="danger" className="discount-badge-large">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </Card>
          </Col>

          <Col md={6} className="product-info-section">
            <Badge bg="info" className="category-badge-large mb-3">
              {product.category}
            </Badge>
            
            <h1 className="product-detail-title">{product.name}</h1>
            
            <div className="product-rating-section mb-3">
              {renderStars(product.rating)}
              <span className="reviews-count-large">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="product-detail-description">{product.description}</p>

            <div className="price-section mb-4">
              {product.originalPrice && (
                <div className="original-price-large">
                  {formatPrice(product.originalPrice)}
                </div>
              )}
              <div className="current-price-large">
                {formatPrice(product.price)}
              </div>
            </div>

            <div className="stock-status mb-4">
              {product.inStock ? (
                <Badge bg="success" className="stock-badge-large">
                  <i className="fas fa-check-circle me-2"></i>
                  In Stock
                </Badge>
              ) : (
                <Badge bg="secondary" className="stock-badge-large">
                  <i className="fas fa-times-circle me-2"></i>
                  Out of Stock
                </Badge>
              )}
            </div>

            <div className="action-buttons-section">
              <Button
                variant="success"
                size="lg"
                className="add-to-cart-btn"
                disabled={!product.inStock}
              >
                <i className="fas fa-shopping-cart me-2"></i>
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                className="wishlist-btn"
              >
                <i className="far fa-heart me-2"></i>
                Add to Wishlist
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="product-specs-section mt-5">
          <Col>
            <Card className="specs-card">
              <Card.Header>
                <h3 className="specs-title">
                  <i className="fas fa-info-circle me-2"></i>
                  Product Specifications
                </h3>
              </Card.Header>
              <Card.Body>
                <Table responsive className="specs-table">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-label">
                          {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        </td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="related-products-section mt-5">
          <Col>
            <h3 className="section-title">Related Products</h3>
            <Row>
              {products
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Col key={relatedProduct.id} xs={6} md={3} className="mb-4">
                    <Card className="related-product-card">
                      <Link to={`/products/${relatedProduct.id}`}>
                        <Card.Img
                          variant="top"
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="related-product-image"
                        />
                        <Card.Body>
                          <Card.Title className="related-product-name">
                            {relatedProduct.name}
                          </Card.Title>
                          <Card.Text className="related-product-price">
                            {formatPrice(relatedProduct.price)}
                          </Card.Text>
                        </Card.Body>
                      </Link>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
