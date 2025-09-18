import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const projects = [{
    title: 'FitTrack Pro',
    description: 'A fitness tracking application with workout plans, nutrition tracking, and progress analytics.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    tags: ['Fitness', 'Health'],
    technologies: ['Kotlin', 'MVVM', 'Room', 'Retrofit', 'Jetpack Compose'],
    links: {
      demo: '#',
      github: '#',
      playstore: 'https://play.google.com'
    },
    featured: true
  }, {
    title: 'TaskMaster',
    description: 'A productivity app with task management, reminders, and collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    tags: ['Productivity', 'Business'],
    technologies: ['Kotlin', 'Clean Architecture', 'Coroutines', 'Room', 'Material Design'],
    links: {
      demo: '#',
      github: '#',
      playstore: 'https://play.google.com'
    },
    featured: true
  }, {
    title: 'WeatherNow',
    description: 'Real-time weather forecasting with location tracking and custom alerts.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    tags: ['Weather', 'Utility'],
    technologies: ['Kotlin', 'MVVM', 'Location Services', 'Retrofit', 'LiveData'],
    links: {
      demo: '#',
      github: '#',
      playstore: 'https://play.google.com'
    },
    featured: false
  }, {
    title: 'CineTrail',
    description: 'Movie discovery app with personalized recommendations and social features.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    tags: ['Entertainment', 'Social'],
    technologies: ['Kotlin', 'MVVM', 'ExoPlayer', 'Firebase', 'Paging3'],
    links: {
      demo: '#',
      github: '#',
      playstore: 'https://play.google.com'
    },
    featured: true
  }, {
    title: 'EcoScan',
    description: 'Sustainability app that helps users identify eco-friendly products through barcode scanning.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    tags: ['Sustainability', 'Utility'],
    technologies: ['Kotlin', 'CameraX', 'ML Kit', 'Room', 'MVVM'],
    links: {
      demo: '#',
      github: '#',
      playstore: 'https://play.google.com'
    },
    featured: false
  }, {
    title: 'MedConnect',
    description: 'Telemedicine app connecting patients with healthcare providers for virtual consultations.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    tags: ['Health', 'Business'],
    technologies: ['Kotlin', 'WebRTC', 'HIPAA Compliance', 'Jetpack Compose', 'Hilt'],
    links: {
      demo: '#',
      github: '#',
      playstore: 'https://play.google.com'
    },
    featured: false
  }];
  const filters = ['All', 'Featured', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  const filteredProjects = activeFilter === 'All' ? projects : activeFilter === 'Featured' ? projects.filter(project => project.featured) : projects.filter(project => project.tags.includes(activeFilter));
  return <section id="projects" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-6 animate-expand-width"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my Android development work, from concept to Play
            Store.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter, index) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in-up hover:scale-110 ${activeFilter === filter ? 'bg-green-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'}`} style={{animationDelay: `${index * 0.1}s`}}>
              {filter}
            </button>)}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500 animate-fade-in-up hover:transform hover:scale-105" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                      {tech}
                    </span>)}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <a href={project.links.github} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110" title="View on GitHub">
                      <GithubIcon className="h-5 w-5 text-gray-700" />
                    </a>
                    <a href={project.links.demo} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110" title="View Demo">
                      <ExternalLinkIcon className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                  <a href={project.links.playstore} className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center transition-all duration-300 hover:scale-105">
                    View on Google Play
                    <svg className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15C4.34 1.91 4.91 2 5.33 2.33L20.4 12L5.33 21.67C4.91 22 4.34 22.09 3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        {filteredProjects.length === 0 && <div className="text-center py-12">
            <p className="text-gray-500">No projects found for this filter.</p>
          </div>}
      </div>
    </section>;
}