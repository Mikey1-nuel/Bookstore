import React from 'react';
import { Link } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';

const Nav = () => (
  <nav className="nav">
    <div className="container">
      <h1>BookStore CMS</h1>
      <ul className="menu">
        <Link to="/">
          <li className="navlink" title="home">
            BOOKS
          </li>
        </Link>
        <Link to="/calculator">
          <li className="navlink" title="calculator">
            CATEGORIES
          </li>
        </Link>
      </ul>
    </div>
    <div className="container2">
      <div className="mdperson">
        <MdPerson className="profile" />
      </div>
    </div>
  </nav>
);

export default Nav;
