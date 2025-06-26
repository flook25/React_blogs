import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar-container"> {/* Added a class for specific styling */}
      {/* Blog Application (left) */}
      <Link to="/" className="navbar-brand-link"> {/* Added class for specific styling */}
        <h3 className="logo">Blog Application</h3>
      </Link>

      {/* Navigation links (right) */}
      <div className="nav-links-group"> {/* New div to group right links */}
        <Link to="/" className="nav-link">Fist Page</Link>
        <Link to="/blogs" className="nav-link">All of the blogs</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
}
