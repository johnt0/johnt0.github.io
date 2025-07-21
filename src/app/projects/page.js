// src/app/projects/page.js

import ProjectsSection from '@/components/layout/sections/ProjectsSection';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar/Navbar';
import ProjectCardTemplate from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
    
      <main className="min-h-screen">
        <ProjectsSection />
        <div className="text-center py-10 margin">
          <ProjectCardTemplate />
        </div>
      </main>
    
    </>
    );
}