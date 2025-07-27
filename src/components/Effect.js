// components/Typewriter/TypewriterEffect.js
import { useState, useEffect, useRef } from 'react';
import styles from './TypewriterEffect.module.css';

const TypewriterEffect = ({ text, speed = 150, showCursor = true, charClassName = '' }) => {
  const [displayedChars, setDisplayedChars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);
  const [hasInitialDelayPassed, setHasInitialDelayPassed] = useState(false); // NEW STATE for delay

  // Debugging refs (can remove after verifying behavior)
  const isFirstMount = useRef(true);
  
  useEffect(() => {
    if (!isFirstMount.current) {}
    isFirstMount.current = false;
    return () => {};
  }, []);

  useEffect(() => {
    setDisplayedChars([]);
    setCurrentIndex(0);
    setIsTypingCompleted(false);
    setHasInitialDelayPassed(false); 

    if (!text) {
      setIsTypingCompleted(true);
      return; 
    }

    const initialDelayTimer = setTimeout(() => {
      setHasInitialDelayPassed(true);
    }, 750);

    return () => {
      clearTimeout(initialDelayTimer);
    };
  }, [text]);

  useEffect(() => {
    if (!hasInitialDelayPassed) {
      return;
    }

    if (!text || text.length === 0) {
      return;
    }

    if (currentIndex >= text.length) {
      setIsTypingCompleted(true);
      return; // Stop the typing process
    }
    const timer = setTimeout(() => {
      setDisplayedChars((prev) => [...prev, text[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, text, speed, hasInitialDelayPassed]);

  const shouldShowCursor = showCursor && (!isTypingCompleted || !hasInitialDelayPassed);

  return (
    <span>
      {displayedChars.map((char, index) => (
        <span key={index} className={charClassName}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      {/* Conditionally render the cursor */}
      {shouldShowCursor && (
        <span className={styles.cursor}>_</span>
      )}
    </span>
  );
};

export default TypewriterEffect;