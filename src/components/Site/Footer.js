import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer">
          <p>Terms Of Service</p>
          <p>Privacy</p>
          <p>All rights reserved &copy;{new Date().getFullYear()}</p>
        </div>
      </div>
    </div >
  );
}

export default Footer;