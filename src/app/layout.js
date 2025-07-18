// src/app/layout.js
import './globals.css'; // This imports your Tailwind CSS

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio website showcasing my work.',
};


import localFont from 'next/font/local';

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Fonts/WEB/fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/satoshi/Fonts/WEB/fonts/Satoshi-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Fonts/WEB/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={satoshi.className}>
      {/* Apply the font to the body or html tag */}
      <body className={satoshi.className}>
        <div className="overlay" />
        {children}
      </body>
    </html>
  );
}