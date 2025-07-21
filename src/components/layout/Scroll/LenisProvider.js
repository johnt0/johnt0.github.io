// components/layout/Scroll/LenisProvider.js
'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

const LenisProvider = ({ children }) => {
  const [lenisInstance, setLenisInstance] = useState(null);
  const animationFrame = useRef();

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    setLenisInstance(lenis);

    const raf = (time) => {
      lenis.raf(time);
      animationFrame.current = requestAnimationFrame(raf);
    };

    animationFrame.current = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
};

export default LenisProvider;
