// src/components/ScrambleEffect.js
'use client';

import { useState, useEffect, useRef } from 'react';

const ScrambleEffect = ({ text, speed, onComplete }) => {
  const elRef = useRef(null);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const [frame, setFrame] = useState(0);
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const oldText = elRef.current ? elRef.current.innerText : '';
    const length = Math.max(oldText.length, text.length);
    const newQueue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = text[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      newQueue.push({ from, to, start, end, char: '' });
    }

    setQueue(newQueue);
    setFrame(0);

  }, [text]);

  useEffect(() => {
    if (queue.length === 0) return;

    let timer;
    const update = () => {
      let output = '';
      let complete = 0;
      const updatedQueue = [...queue];

      for (let i = 0, n = updatedQueue.length; i < n; i++) {
        let { from, to, start, end, char } = updatedQueue[i];
        
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            updatedQueue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }

      if (elRef.current) {
        elRef.current.innerHTML = output;
      }
      
      if (complete === updatedQueue.length) {
        if (onComplete) onComplete();
      } else {
        setQueue(updatedQueue);
        setFrame(prevFrame => prevFrame + 1);
      }
    };
    
    timer = setTimeout(update, speed);

    return () => clearTimeout(timer);

  }, [frame, queue, text, speed, onComplete]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{text}</span>
      <span
        ref={elRef}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </span>
  );
};

export default ScrambleEffect;