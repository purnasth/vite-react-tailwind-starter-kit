import React from "react";
import { navLinks } from "../constants/data";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Welcome to Vite + React and tailwindCSS starter Kit </h1>
      <h2>Example of mapping on navbar from data.js</h2>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
