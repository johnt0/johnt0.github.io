// src/app/layout.js

import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/layout/Navbar/Navbar';
import LenisProvider from '@/components/layout/Scroll/LenisProvider';

const metadata = {
  title: 'Johning To - Software Developer Portfolio',
  description: 'Personal portfolio of Johning To, a software developer showcasing projects and skills.',
}

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
      <body className={satoshi.className}>
        <LenisProvider>
          <Navbar />  
          <div className="overlay" />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}