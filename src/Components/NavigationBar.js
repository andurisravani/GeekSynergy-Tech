// src/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dasboard"> Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About the company</Link>
        </li>
       
        {/* <li>
          <Link to="/contact">Contact</Link>
        </li> */}
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
