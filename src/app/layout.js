// src/app/layout.js
import './globals.css'; // This imports your Tailwind CSS

// You can import Google Fonts here if you want to use them.
// For example, if you want to use 'Inter' font:
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio website showcasing my work.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply the font to the body or html tag */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}