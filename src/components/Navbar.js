import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

const Navbar = () => (
  <div>
    <header className="m-b bg-white round-top">
      <div className="center max-width-90 flex-row">
        <h1 className="app-title logo">Bookstore CMS</h1>
        <div className="nav-links text-grey">
          <Link to="/BookList">Books</Link>
        </div>
        <div className="nav-links text-grey">
          <Link to="/Categories">Categories</Link>
        </div>
        <img
          className="react-logo"
          src="https://www.vippng.com/png/detail/355-3554387_create-digital-profile-icon-blue-profile-icon-png.png"
          alt="logo"
        />
      </div>
    </header>
  </div>
);

export default Navbar;
