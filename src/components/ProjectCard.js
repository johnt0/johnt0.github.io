'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCardTemplate() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl max-w-sm mx-auto">
      {/* Main clickable area linking to a sample project page */}
      <Link
        href="/project-details"
        aria-label="View details for a sample project"
        className="flex-grow"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src="https://via.placeholder.com/600x400/9ca3af/ffffff?text=Project+Image"
            alt="Sample Project Image"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Project Title
          </h3>
          <p className="text-md text-indigo-600 dark:text-indigo-400 mb-4">
            A Catchy & Informative Tagline
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            This is a brief description of the project, highlighting its key features and the problems it solves. It's concise but gives a good overview.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
              React
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
              Next.js
            </span>
            <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full">
              Tailwind CSS
            </span>
          </div>
        </div>
      </Link>

      {/* External links section, separate from the main link */}
      <div className="flex justify-between items-center p-6 pt-2">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View live demo for a sample project"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold transition-colors duration-200"
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
        >
          Live Demo &rarr;
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub repository for a sample project"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm"
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
        >
          GitHub &rarr;
        </a>
      </div>
    </div>
  );
}