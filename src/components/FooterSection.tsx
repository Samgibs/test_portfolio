import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function FooterSection() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-xl font-bold">Samuel Gichohi</span>
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#about" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white">
              Projects
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white">
              Experience
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Samuel Gichohi. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Android Developer Portfolio
          </p>
        </div>
      </div>
    </footer>;
}