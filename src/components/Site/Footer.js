import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer">
          <p>All rights reserved &copy;{new Date().getFullYear()}</p>
        </div>
      </div>
    </div >
  );
}

export default Footer;