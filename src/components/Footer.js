import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <section className='footer-section'>
      <div className='footer-container'>
        <div className='border'></div>
        <div className='footer-contents'>
          <div className='left-footer'>
            <ul className='social-icons'>
              <li className='social-icon'>
                <a href='www.facebook.com'>
                  <FaFacebook />
                </a>
              </li>
              <li className='social-icon'>
                <a href='www.instagram.com'>
                  <FaInstagram className='instagram' />
                </a>
              </li>
              <li className='social-icon'>
                <a href='www.twitter.com'>
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className='right-footer'>
            <Row>
              <Col>
                <h4>Company</h4>
                <a href='#'>Personal</a>
                <a href='#'>Business</a>
                <a href='#'>Pricing</a>
              </Col>
              <Col>
                <h4>About Us</h4>
                <a href='#'>Our Values</a>
                <a href='#'>Careers</a>
                <a href='#'>Mission and Vision</a>
                <a href='#'>Our Team</a>
              </Col>
              <Col>
                <h4>Resources</h4>
                <a href='#'>Uk Terms and Condition</a>
                <a href='#'>Cookie Policy</a>
                <a href='#'>Privacy Policy</a>
              </Col>
              <Col>
                <h4>Social Media</h4>
                <a href='www.facebook.com'>Facebook</a>
                <a href='www,twitter.com'>Twitter</a>
                <a href='www.instagram.com'>Linkedin</a>
                <a href='www.linkedin.com'>Linkedin</a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
