import './navbar.css';

const Navbar = () => (
  <section className="navbar">
    <div>
      <h1>Math Magicians</h1>
    </div>
    <div className="links">
      <ul className="list">
        <li>
          <a href="/">Home</a>
        </li>
        <li className="calcu">
          <a href="/calculator">Calculator</a>
        </li>
        <li>
          <a href="/quote">Quote</a>
        </li>
      </ul>
    </div>
  </section>
);
export default Navbar;
