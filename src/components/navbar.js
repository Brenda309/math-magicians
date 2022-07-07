import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <section className="navbar">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <div className="links">
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="calcu">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </div>
  </section>
);
export default Navbar;
