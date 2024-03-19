import React from "react";
import { navLinks } from "../constants/data";

const Navbar = () => {
  return (
    <>
      <h1>Welcome to Vite + React and tailwindCSS starter Kit </h1>
      <h2>Example of mapping on navbar from data.js</h2>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            {link.title}
            {link.sublinks && (
              <ul>
                {link.sublinks.map((sublink) => (
                  <li key={sublink.id}>{sublink.title}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
