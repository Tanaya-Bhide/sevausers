import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-group">
          <ul>
            <li><a href="/ambulance">Ambulance</a></li>
            <li><a href="/convenience">Convenience & Facilities</a></li>
            <li><a href="/donate">Donate Blood</a></li>
          </ul>
        </div>
        <div className="footer-group">
          <ul>
            <li><a href="/directory">Floor Directory</a></li>
            <li><a href="/media">Media & Press Releases</a></li>
            <li><a href="/gallery">Photo Gallery</a></li>
          </ul>
        </div>
        <div className="footer-group">
          <ul>
            <li><a href="/pledge">Pledge Your Eyes</a></li>
            <li><a href="/social">Social Initiatives</a></li>
            <li><a href="/compliance">Statutory Compliance</a></li>
          </ul>
        </div>
        <div className="footer-group">
          <ul>
            <li><a href="/tender">E-Tender</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
