import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center animate-fade-in-left">
              <div className="h-8 w-8 text-green-600 animate-pulse" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Samuel Gichohi
              </span>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8 animate-fade-in-right">
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:scale-105">
                About
              </a>
              <a href="#skills" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:scale-105">
                Skills
              </a>
              <a href="#projects" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:scale-105">
                Projects
              </a>
              <a href="#experience" className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:scale-105">
                Experience
              </a>
              <a href="#contact" className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Contact Me
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">
                About
              </a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">
                Skills
              </a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">
                Projects
              </a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">
                Experience
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700 mt-2">
                Contact Me
              </a>
            </div>
          </div>}
      </nav>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-20 md:py-32 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Android Developer{' '}
                <span className="text-green-600 animate-pulse">Portfolio</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Creating intuitive, high-performance Android applications with
                modern architecture and user-centered design principles.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <a href="#projects" className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  View My Work
                </a>
                <a href="#contact" className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 inline-block transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative animate-fade-in-right">
              <div className="relative rounded-xl overflow-hidden shadow-xl max-w-md mx-auto transform hover:scale-105 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Android development illustration" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg hidden md:block animate-bounce-in" style={{animationDelay: '0.8s'}}>
                <div className="text-sm font-semibold text-gray-800">
                  Android SDK
                </div>
                <div className="text-2xl font-bold text-green-600">
                  2.5+ Years
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tech stack bubbles */}
        <div className="absolute bottom-4 left-0 right-0 overflow-hidden">
          <div className="flex justify-center gap-4 flex-wrap">
            {['Kotlin', 'Java', 'Jetpack Compose', 'MVVM', 'Room', 'Retrofit'].map((tech, index) => <div key={tech} className="bg-white/80 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm shadow-sm animate-float hover:scale-110 transition-all duration-300 cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                {tech}
              </div>)}
          </div>
        </div>
      </section>
    </>;
}