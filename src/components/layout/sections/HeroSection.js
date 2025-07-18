// src/components/sections/HeroSection.js
import Link from 'next/link'; // Import Link for client-side navigation

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
      </div>

      <div className="container mx-auto px-2 text-center z-10 -translate-y-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I&apos;m Johning To <br />
          A <span className="text-accent-purple">Software</span> Developer.
        </h1>
        <p className="text-xl md:text-2xl text-text-muted mb-8 max-w-2xl mx-auto">
          Building robust and scalable web applications with a focus on user experience.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Primary CTA: View Projects */}
          <Link href="/projects" className="bg-portfolioBlue hover:portfolioBlueHover font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            View My Work
          </Link>
        
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;