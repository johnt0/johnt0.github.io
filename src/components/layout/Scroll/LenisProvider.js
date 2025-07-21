// src/components/LenisProvider.js
'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // How long the scroll animation lasts (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function (optional)
      direction: 'vertical', // 'vertical' or 'horizontal'
      gestureDirection: 'vertical', // 'vertical' or 'horizontal'
      smooth: true, // Enable smooth scrolling
      mouseMultiplier: 1, // Adjust scroll speed for mouse wheel
      smoothTouch: false, // Disable smooth scroll for touch devices (often better for UX)
      touchMultiplier: 2, // Adjust scroll speed for touch
      infinite: false, // Set to true for infinite scrolling loops
    });

    function raf(time) {
      lenis.raf(time); 
      requestAnimationFrame(raf); 
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []); 

  return <>{children}</>;
};

export default LenisProvider;