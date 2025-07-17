// src/app/page.js
import Layout from '@/components/layout/Layout'; // Using @ alias for src
import styles from './globals.css';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      {/* <AboutSection />
      <ProjectsSection /> */}
    </Layout>
  );
}