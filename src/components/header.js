/*eslint-disable*/
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="nav-container">
        <p className="head-title"><strong>Bookstore CMS</strong></p>
        <nav className="links-container">
          <Link className="link selected" to="/">BOOKS</Link>
          <Link className="link" to="/categories">CATEGORIES</Link>
        </nav>
      </header>
      <div className="books-container">
        <Outlet />
      </div>
    </div>
  )
};

export default Header;