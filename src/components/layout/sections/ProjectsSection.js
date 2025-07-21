// src/components/ProjectsSection/ProjectsSection.js
'use client';

import { motion } from 'framer-motion'; 
// No need to import styles from './ProjectsSection.module.css';

const projectsData = [
  { id: 1, title: 'Project Title One', description: 'A short, snappy description.', image: '/project1-thumbnail.jpg' },
  { id: 2, title: 'Project Title Two', description: 'Another concise description.', image: '/project2-thumbnail.jpg' },
  { id: 3, title: 'Project Title Three', description: 'Description for the third project.', image: '/project3-thumbnail.jpg' },
];

const ProjectsSection = ({id}) => {
  return (
    <motion.section
      id="projects"
      className="py-20 px-5 text-off-white font-satoshi text-center max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }} // Initial state (before entering view)
      whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
      viewport={{ once: true, amount: 0.3 }} // Animation triggers when 30% is visible, and only once
      transition={{ duration: 0.8, ease: 'easeOut' }} // Animation timing
    >
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-bold mb-16 tracking-tight text-[#F5F5DC]">My Projects</h2>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl">
        {projectsData.map(project => (
          <div 
            key={project.id} 
            // Tailwind CSS classes for each project card
            className="bg-[#2a2a2a] rounded-xl shadow-2xl overflow-hidden flex flex-col items-center text-center pb-6
                       transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-3xl"
          >
            {/* Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-56 object-cover border-b border-gray-700 mb-5" 
            />
            {/* Title */}
            <h3 className="text-3xl font-semibold mb-4 text-[#F5F5DC] px-4">{project.title}</h3>
            {/* Description */}
            <p className="text-lg leading-relaxed text-[#D3D3D3] px-4">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;