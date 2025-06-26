import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        <h3>Blog Application</h3>
      </Link>
      <Link to="/">Fist Page</Link>
      <Link to="/blogs">All of the blogs</Link>

      <Link to="/about">About</Link>
    </nav>
  );
}
