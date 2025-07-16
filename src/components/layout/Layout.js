// src/components/layout/Layout.js
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css'; // Import CSS Module

const Layout = ({ children }) => {
  return (
    <div
      className={`${styles.layoutContainer} min-h-screen text-off-white font-sans relative bg-background-black`}
    >
      <Navbar />
      <main className="container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>
      {/* Potentially a Footer component here later */}
    </div>
  );
};

export default Layout;