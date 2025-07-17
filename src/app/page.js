// src/app/page.js

import HeroSection from '@/components/layout/sections/HeroSection';
import ProjectsSection from '@/components/layout/sections/ProjectsSection';
import Navbar from '@/components/layout/Navbar/Navbar';

// Metadata for the homepage
export const metadata = {
  title: 'Johning To - Software Developer Portfolio',
  description: 'Personal portfolio of Johning To, a software developer showcasing projects and skills.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* ... other sections */}
    </>
  );
}