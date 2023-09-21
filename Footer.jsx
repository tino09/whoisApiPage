import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Best page to get domain and hosting information.</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <address>
              Email: example@example.com<br />
              Phone: (123) 456-7890
            </address>
          </Col>
          <Col md={4}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
