import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: uuidv4(),
      path: '/',
      text: 'Home',
    },
    {
      id: uuidv4(),
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
