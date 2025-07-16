// src/app/page.js
import Layout from '@/components/layout/Layout'; // Using @ alias for src

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)]"> {/* Adjust height as needed */}
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio!</h1>
        <p className="text-xl text-gray-300">Your professional journey starts here.</p>
        {/* We will add HeroSection here later */}
      </div>
    </Layout>
  );
}