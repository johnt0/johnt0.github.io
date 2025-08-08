import { useState, useEffect, useRef } from 'react';
import ScrambleEffect from './Effects/ScrambleEffect';
import styles from "./Projects.module.css";

const ITEMS_PER_ROW = 3;
const STAGGER_PERCENTAGE = 0.4;
const ROW_OVERLAP_DELAY = 500;

const calculateSpeed = (text) => {
  const avgLength = text.length || 1;
  return Math.max(5, Math.floor(150 / avgLength));
};

const Projects = ({ projectList, isSectionActive, onTypingComplete }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const startedRows = useRef(new Set());

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
      // Corrected the text to use in ScrambleEffect
      const fullText = `${projectList[itemIndex].name} - ${projectList[itemIndex].info}`;
      const speed = calculateSpeed(fullText);
      const estimatedDuration = fullText.length * speed;
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

  return (
    <ul className={styles.projectList}>
      {projectList.map((project, index) => {
        const indexNumber = `00${index}.`;
        const projectTitle = project.name;
        
        return (
          <li key={index}>
            {visibleIndexes.includes(index) ? (
              <div className={styles.projectItem}>
                <span className={styles.index}>{indexNumber}</span>
                <span className={styles.title}>
                  <ScrambleEffect
                    text={`${project}`}
                    speed={calculateSpeed(project)}
                    onComplete={() => handleTypingComplete(index)}
                  />
                </span>
              </div>
            ) : (
              ''
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;