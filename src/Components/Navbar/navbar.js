import "./navbar.css";

function navBar() {
  return (
    <nav className="navBar">
      <h1 className="navTitle">React Tutorial</h1>
      <ul className="menu">
        <li className="menuItem pricing">Pricing</li>
        <li className="menuItem about">About</li>
        <li className="menuItem contact">Contact</li>
      </ul>
    </nav>
  );
}

export default navBar;
