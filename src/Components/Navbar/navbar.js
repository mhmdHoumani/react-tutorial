import "./navbar.css";
// import React from "react";

export default function NavBar() {
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

export function NavBar2() {
  return (
    <nav className="navBar">
      <h1 className="navTitle">React Tutorial 2</h1>
      <ul className="menu">
        <li className="menuItem pricing">Home</li>
        <li className="menuItem about">About</li>
        <li className="menuItem contact">Contact</li>
        <li className="menuItem contact">Settings</li>
        <li className="menuItem contact">Logout</li>
      </ul>
    </nav>
  );
}
