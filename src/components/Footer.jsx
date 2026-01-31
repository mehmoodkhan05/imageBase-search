import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer-wrapper">
        <Row className="footer-content">
          <Col md={4} className="footer-section">
            <h5 className="footer-title">
              <i className="fas fa-search me-2"></i>
              Image Search
            </h5>
            <p className="footer-description">
              Your one-stop destination for image-based product discovery and computer shop products. 
              Find visually similar products or browse our extensive catalog.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>

          <Col md={2} className="footer-section">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="footer-section">
            <h6 className="footer-heading">Categories</h6>
            <ul className="footer-links">
              <li>
                <Link to="/products?category=Laptops">Laptops</Link>
              </li>
              <li>
                <Link to="/products?category=Desktops">Desktops</Link>
              </li>
              <li>
                <Link to="/products?category=Monitors">Monitors</Link>
              </li>
              <li>
                <Link to="/products?category=Accessories">Accessories</Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="footer-section">
            <h6 className="footer-heading">Contact Info</h6>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt me-2"></i>
                <span>123 Tech Street, Silicon Valley, CA 94000</span>
              </li>
              <li>
                <i className="fas fa-phone me-2"></i>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <i className="fas fa-envelope me-2"></i>
                <a href="mailto:info@imagesearch.com">info@imagesearch.com</a>
              </li>
              <li>
                <i className="fas fa-clock me-2"></i>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="footer-bottom">
              <p className="copyright">
                &copy; {currentYear} Image Search. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <a href="#privacy">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#terms">Terms of Service</a>
                <span className="separator">|</span>
                <a href="#cookie">Cookie Policy</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
