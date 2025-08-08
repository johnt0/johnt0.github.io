// src/components/HeroSection/HeroSection.js
'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './HeroSection.module.css';

import Effect from './Effect';
import ScrambleEffect from './Effects/ScrambleEffect';

import Info from './Info';
import Projects from './Projects';

const ANIMATION_BASE_SPEED_MS = 20;

const pageContent = [
  {
    id: 'greeting',
    type: 'greeting',
    text: "",
    pauseAfterTyping: 1000
  },
  {
    id: 'info',
    type: 'info',
    staticLabel: "info.",
    text: "Hi, my name is Johning To. I am a software developer. ",
    pauseAfterTyping: 0
  },
  {
    id: 'projects',
    type: 'projects',
    staticLabel: "projects.",
    projectList: [
      "Project 1",
      "Project 2",
      "Project 3",
      "Project 4",
      "Project 5",
      "Project 6", 
    ],
    pauseAfterTyping: 0
  },
];

const HeroSection = ({ id }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [content, setContent] = useState(pageContent);

  const [sectionTypingStatus, setSectionTypingStatus] = useState(
    pageContent.reduce((acc, section) => {
      acc[section.id] = false;
      return acc;
    }, {})
  );

  useEffect(() => {
    const helloGreetings = [
      "Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "Hej", "Merhaba", "Konnichiwa", "Annyeong", "Howdy"
    ];
    const randomGreeting = helloGreetings[Math.floor(Math.random() * helloGreetings.length)];
    
    setContent(prevContent => {
      const newContent = [...prevContent];
      newContent[0].text = randomGreeting;
      return newContent;
    });
  }, []);

  const handleTypewriterInternalComplete = (sectionId, pauseDuration) => {
    setTimeout(() => {
      setSectionTypingStatus(prevStatus => ({
        ...prevStatus,
        [sectionId]: true
      }));
    }, pauseDuration);
  };

  useEffect(() => {
    const currentSection = content[activeSectionIndex];
    if (currentSection && sectionTypingStatus[currentSection.id]) {
      if (activeSectionIndex < content.length - 1) {
        setActiveSectionIndex(prevIndex => prevIndex + 1);
      }
    }
  }, [sectionTypingStatus, activeSectionIndex, content]);

  const calculateSpeed = (text) => {
    return text.length > 0 ? (text.length * ANIMATION_BASE_SPEED_MS) / text.length : 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {content.map((section, index) => {
          const isSectionActive = index === activeSectionIndex;
          const isSectionTypedAndPaused = sectionTypingStatus[section.id];
          
          if (index > activeSectionIndex && !isSectionActive) {
            return null;
          }

          return (
            <div key={section.id} className={styles.sectionWrapper}>
              <div className={styles.sectionStaticLabel}>
                {section.type !== 'greeting' && section.staticLabel && (
                  <h3>
                    {isSectionTypedAndPaused ? (
                        section.staticLabel
                    ) : (
                      <ScrambleEffect 
                        text={section.staticLabel}
                        speed={calculateSpeed(section.staticLabel)} 
                        onComplete={() => handleTypewriterInternalComplete(section.id + '-label', 0)}
                      />
                    )}
                  </h3>
                )}
              </div>

              <div className={styles.sectionContentArea}>
                {section.type === 'greeting' && (
                  <h1 className={styles.greeting}>
                    {isSectionTypedAndPaused ? (
                      section.text
                    ) : (
                      <Effect
                        text={section.text}
                        speed={150}
                        showCursor={isSectionActive}
                        onTypingComplete={() => handleTypewriterInternalComplete(section.id, section.pauseAfterTyping)}
                      />
                    )}
                  </h1>
                )}

                {section.type === 'info' && (
                  <Info
                    text={
                      isSectionTypedAndPaused ? (
                        section.text
                      ) : (
                        <ScrambleEffect
                          text={section.text}
                          speed={calculateSpeed(section.text) - 0.5}
                          onComplete={() => handleTypewriterInternalComplete(section.id, section.pauseAfterTyping)}
                        />
                      )
                    }
                  />
                )}
                {section.type === 'projects' && (
                  <Projects
                    projectList={pageContent[2].projectList}
                    isSectionActive={isSectionActive}
                    onTypingComplete={() => handleTypewriterInternalComplete(section.id, section.pauseAfterTyping)}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;