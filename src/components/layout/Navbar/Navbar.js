// src/components/layout/Navbar/Navbar.js

import Link from 'next/link';
import styles from './Navbar.module.css'; 
import Image from 'next/image';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="relative flex items-center justify-between p-4 bg-transparent rounded-lg m-4 shadow-lg backdrop-blur-md z-20 ml-20">
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
      {/* ADDED flex-grow and justify-center to this div */}
      <div className="flex-grow flex justify-center -ml-50">
        <ul className="flex space-x-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={styles.navLink}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right section */}
      <div>
        <button className="bg-portfolioBlue hover:bg-portfolioBlueHover text-off-white font-bold py-2 px-6 rounded-md transition-colors duration-200 text-lg mr-20">
          button
        </button>
      </div>
    </nav>
  );
};

export default Navbar;