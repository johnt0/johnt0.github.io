// src/components/layout/Layout.js
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen text-white font-sans relative bg-black" // Base is solid black
      style={{
        // Add a subtle noise overlay
        backgroundImage: 'url("/images/noise.png")', // Path to your noise image
        backgroundRepeat: 'repeat', // Make the noise repeat
        backgroundSize: 'auto', // Keep its natural size
        // Optionally, combine with a very subtle linear gradient
        background: 'linear-gradient(to bottom right, #0a0a0a, #000000), url("/images/noise.png")',
        backgroundRepeat: 'no-repeat, repeat',
        backgroundPosition: 'center center, top left',
        backgroundSize: 'cover, auto'
      }}
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