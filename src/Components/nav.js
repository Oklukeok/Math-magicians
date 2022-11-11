import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/styleNav.css';

const NavBar = () => (
  <div className="nav">
    <div className="nav-h1">
      <h1>Math Magicians</h1>
    </div>
    <div className="nav-ul">
      <ul>
        <li className="link-item">
          <NavLink to="/" className="route-link">
            Home
          </NavLink>
          <NavLink to="/Calculator" className="route-link">
            Calculator
          </NavLink>
          <NavLink to="/Quote" className="route-link">
            Quote
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);
export default NavBar;
