import React, { useState } from "react";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import ButtonQuote from "../ButtonQuote/ButtonQuote";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };

  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link to="#home" className="logo">
          <img src={require(`../../images/pr_logo.png`)} alt="logo"></img>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" activeStyle="active">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="product">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="contact">Contact</Link>
          </li>
          <li className="nav-item">
            <button className="btn-login" onClick={handleSubmit}>
              Login
            </button>
          </li>
        </ul>
        <ButtonQuote />
      </nav>
    </div>
  );
}
