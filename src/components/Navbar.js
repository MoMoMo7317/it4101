import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#333' }}>
      <ul style={{ display: 'flex', listStyle: 'none', padding: '0', margin: '0' }}>
        <li style={{ margin: '10px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </li>
        <li style={{ margin: '10px' }}>
          <Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
