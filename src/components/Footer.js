import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>About</h4>
          <p>Explore our extensive listings of cricket grounds.</p>
          <div className="contact">
            <span><i className="fas fa-map-marker-alt"></i> 11 Adamstown Boulevard, Adamstown Castle, Lucan, K78 V446</span>
            <span><i className="fas fa-envelope"></i> stephenangeloirl@gmail.com</span>
          </div>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Grounds</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 GroundBooking | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
