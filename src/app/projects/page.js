// src/app/projects/page.js

import ProjectsSection from '@/components/layout/sections/ProjectsSection';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar/Navbar';

export default function ProjectsPage() {
  return (
    <>
    <Navbar />
    
    <main className="min-h-screen">
      <ProjectsSection />
      <div className="text-center py-10">
        <Link href="/" className="bg-portfolioBlue hover:bg-portfolioBlueHover font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Back to Home
        </Link>
      </div>
    </main>
    
    </>
    );
}