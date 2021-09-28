import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>BOOKSTORE APP</h1>
    <nav>
      <ul>
        <li>
          <Link className="link" to="/Books">
            Books
          </Link>
        </li>
        <li>
          <Link className="link" to="/Categories">
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
