import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import logo from '../assets/images/logo.svg';

const Navbar = () => (
  <div>
    <header className="m-b bg-white round-top">
      <div className="center max-width-90 flex-row">
        <h1 className="app-title">BOOKSTORE CMS APP</h1>
        <div className="cat-title">
          <Link className="text-grey" to="/BookList">
            Book
          </Link>
        </div>
        <div className="cat-title">
          <Link className="text-grey" to="/Categories">
            Categories
          </Link>
        </div>
        <img className="react-logo" src={logo} alt="logo" />
      </div>
    </header>
  </div>
);

export default Navbar;
