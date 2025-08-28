import React from "react";
import "./footer.css"; // Import external CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
   "Your trusted platform to learn, grow, and achieve your goals anytime, anywhere."
          </p>
            <p>® {new Date().getFullYear()} E-Learners. All rights reserved.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#course">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:sanchaysingh62425@gmail.com">sanchaysingh62425@gmail.com</a></p>
          <p>Phone: +91-95559438XX</p>
        </div>
      </div>

     
    </footer>
  );
}

export default Footer;
