import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Link to="home" className="logo">
          <img src={require(`../../images/pr_logo.png`)} alt="logo"></img>
        </Link>
      </div>
      <div className="text-email">
        <p>
          Email:{" "}
          <a href="mailto:contact@prengineerrs.com">contact@prengineerrs.com</a>
        </p>
      </div>
      <div className="copyright">
        <p>© PREngineers, Inc. 2023. We love what we build</p>
      </div>
    </div>
  );
};

export default Footer;
