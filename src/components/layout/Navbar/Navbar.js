// src/components/layout/Navbar/Navbar.js
'use client';

import styles from './Navbar.module.css';
import { useLenis } from '@/components/layout/Scroll/LenisProvider';
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const lenis = useLenis();

  const navLinks = [
    { name: 'Home', href: '#' }, // 'Home' often scrolls to the top
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    if (lenis) {
      const target = href === '#' ? 0 : href;

      lenis.scrollTo(target, {
        offset: 10, 
        duration: 1.2, 
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      });
    } else {
      console.log("no instance of lenis");
    }
  };

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between p-4 bg-transparent rounded-lg m-4 shadow-lg backdrop-blur-md z-20 ml-20">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <img
            src="favicon.ico"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover mr-2 border-2"
          />
          <span className="font-semibold text-xl">Software Developer</span>
        </div>
      </div>

      {/* Middle section: Navigation Links */}
      <div className="flex-grow flex justify-center -ml-40">
        <ul className="flex space-x-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={styles.navLink}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right section */}
      <div>
        <button className="bg-button-blue hover:bg-button-blue-hover text-off-white font-bold py-2 px-6 rounded-md transition-colors duration-200 text-lg mr-20">
          button
        </button>
      </div>
    </nav>
  );
};

export default Navbar;