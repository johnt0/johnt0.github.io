import { useState, useEffect, useRef } from 'react';
import ScrambleEffect from './Effects/ScrambleEffect';
import styles from "./Projects.module.css";

// ... (keep all the constants and helper functions the same) ...
const ITEMS_PER_ROW = 3;
const STAGGER_PERCENTAGE = 0.4;
const ROW_OVERLAP_DELAY = 500;

const calculateSpeed = (text) => {
  const avgLength = text.length || 1;
  return Math.max(5, Math.floor(150 / avgLength));
};


const Projects = ({ projectList, isSectionActive, onTypingComplete }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [completedIndexes, setCompletedIndexes] = useState([]);
  const startedRows = useRef(new Set());

  // ... (The useEffect, startRow, and handleTypingComplete functions remain exactly the same as the previous version) ...
  useEffect(() => {
    if (isSectionActive && visibleIndexes.length === 0) {
      startRow(0);
    }
  }, [isSectionActive]);

  const startRow = (startIndex) => {
    if (startedRows.current.has(startIndex)) return;
    startedRows.current.add(startIndex);

    const rowIndexes = Array.from(
      { length: Math.min(ITEMS_PER_ROW, projectList.length - startIndex) },
      (_, i) => startIndex + i
    );

    rowIndexes.forEach((itemIndex, positionInRow) => {
      const textToAnimate = `00${itemIndex}. ${projectList[itemIndex].name}`;
      const speed = calculateSpeed(textToAnimate);
      const estimatedDuration = textToAnimate.length * speed;
      const delay = positionInRow === 0 ? 0 : estimatedDuration * STAGGER_PERCENTAGE * positionInRow;

      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, itemIndex]);
      }, delay);
    });

    const nextStartIndex = startIndex + ITEMS_PER_ROW;
    if (nextStartIndex < projectList.length) {
      setTimeout(() => {
        startRow(nextStartIndex);
      }, ROW_OVERLAP_DELAY);
    }
  };

  const handleTypingComplete = (finishedIndex) => {
    if (finishedIndex === projectList.length - 1 && onTypingComplete) {
      onTypingComplete();
    }
  };

  const handleScrambleComplete = (index) => {
    setCompletedIndexes(prev => [...prev, index]);
    handleTypingComplete(index);
  };

  return (
    <ul className={styles.projectList}>
      {projectList.map((project, index) => {
        const indexNumber = `00${index}.`;
        const projectTitle = project;
        const textToScramble = `${indexNumber} ${projectTitle}`;
        const isComplete = completedIndexes.includes(index);

        return (
          <li key={index}>
            {visibleIndexes.includes(index) ? (
              <div className={styles.projectItem}>
                <span className={styles.index}>{indexNumber} </span>
                <span className={styles.title}>{project}</span>
              
                <div 
                  className={`${styles.scrambleOverlay} ${isComplete ? styles.hidden : ''}`}
                >
                  <ScrambleEffect
                    text={textToScramble}
                    speed={calculateSpeed(textToScramble)}
                    onComplete={() => handleScrambleComplete(index)}
                  />
                </div>
              </div>
            ) : (
              // This placeholder still prevents layout shift
              <div className={styles.projectItem} style={{ visibility: 'hidden' }}>&nbsp;</div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;