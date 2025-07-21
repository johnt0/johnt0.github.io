// src/components/HeroSection/HeroSection.js
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({id}) => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => pos === 1 ? 'relative' : 'fixed');

  const handleScroll = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); 
  };

  return (
    <section id={id} ref={targetRef} className={styles.heroContainer}>
      <motion.div 
        className={styles.heroContent}
        style={{ opacity, scale, position }}
      >
        <h1>Johning To</h1>
        <p>A Software Developer</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;