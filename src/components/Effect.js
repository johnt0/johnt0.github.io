// components/Effect.js
import { useState, useEffect, useRef } from 'react';
import styles from './Effect.module.css';

const Effect = ({
  text,
  speed = 150,
  showCursor = true, // This prop now directly controls cursor visibility
  charClassName = '',
  onTypingComplete // Called when all characters are displayed
}) => {
  const [displayedChars, setDisplayedChars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [internalTypingComplete, setInternalTypingComplete] = useState(false); // New: Tracks when *all chars* are typed

  const onTypingCompleteRef = useRef(onTypingComplete);
  useEffect(() => {
    onTypingCompleteRef.current = onTypingComplete;
  }, [onTypingComplete]);

  useEffect(() => {
    setDisplayedChars([]);
    setCurrentIndex(0);
    setInternalTypingComplete(false); // Reset this
  }, [text]);

  // Main typing logic
  useEffect(() => {
    if (!text || text.length === 0) {
      setInternalTypingComplete(true);
      if (onTypingCompleteRef.current) {
        onTypingCompleteRef.current();
      }
      return;
    }

    if (currentIndex >= text.length) {
      setInternalTypingComplete(true); // All characters are now displayed
      if (onTypingCompleteRef.current) {
        onTypingCompleteRef.current(); // Notify parent
      }
      return; 
    }

    const delay = speed * 0.65;
    const timer = setTimeout(() => {
      setDisplayedChars((prev) => [...prev, text[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer); // Clean up the timer
  }, [currentIndex, text, speed]);

  const cursorClass = showCursor ? styles.cursor : `${styles.cursor} ${styles.cursorHidden}`;

  return (
    <span>
      {displayedChars.map((char, index) => (
        <span key={index} className={charClassName}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <span className={cursorClass}></span> {}
    </span>
  );
};

export default Effect;