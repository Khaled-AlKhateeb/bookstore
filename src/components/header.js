import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-container">
    <h1 className="header-title">Bookstore CMS</h1>
    <div className="nav-container">
      <Link className="nav-btn" to="/">books</Link>
      <Link className="nav-btn" to="/categories">categories</Link>
    </div>
  </div>
);

export default Header;
