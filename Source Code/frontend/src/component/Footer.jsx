import React from "react";
import "../style/footer.css";
// import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footerMainContainer">
      <div className="footerColsContainer">
        <div className="footerColumn">
          <div className="footerSiteName">
            <h3><img className="nav-logo" src="logo.png" alt="logo"/></h3>
          </div>
          <div className="footerSiteDesc">
          Cinema House provides everyone with <br/>the best and latest movies of the highest quality
          </div>
        </div>
        <div className="footerColumn">
          <div className="footerSiteName">
            <h3>Links</h3>
          </div>
          <div className="footerColPagesLinks">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Movies</a>
              </li>
              <li>
                <a href="/about">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerColumn">
          <div className="footerColTitle">
            <h3>Follow Us</h3>
          </div>
          <div className="footerColLinks">
            <a href="https://web.facebook.com/" target="_blank">
              <i className="fab fa-facebook-square fa-3x"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram-square fa-3x"></i>
            </a>
            <a
              href="#"
              target="_blank"
            >
              <i className="fab fa-github-square fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyRightArea">ALL RIGHT RESERVED 2022 &copy;</div>
    </div>
  );
}

export default Footer;
