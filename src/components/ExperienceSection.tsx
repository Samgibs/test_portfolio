import React from 'react';
import { BriefcaseIcon, CalendarIcon, GraduationCapIcon } from 'lucide-react';
export function ExperienceSection() {
  const experiences = [{
    title: 'Senior Android Developer',
    company: 'TechNova Solutions',
    period: 'Jan 2021 - Present',
    description: 'Leading the Android development team for a suite of enterprise applications. Implemented CI/CD pipelines, migrated legacy code to Kotlin and Jetpack Compose, and reduced crash rates by 80%.',
    achievements: ['Architected and delivered 4 major app releases with 4.8+ star ratings', 'Reduced app startup time by 40% through performance optimizations', 'Mentored junior developers and established coding standards', 'Implemented modular architecture that improved development velocity by 30%'],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Dagger Hilt', 'Coroutines', 'CI/CD']
  }, {
    title: 'Android Developer',
    company: 'MobileFirst Inc.',
    period: 'Mar 2018 - Dec 2020',
    description: 'Developed and maintained multiple consumer-facing applications with millions of downloads. Focused on UI/UX improvements and implementing new features based on user feedback.',
    achievements: ['Collaborated with design team to implement Material Design guidelines', 'Integrated analytics and crash reporting tools reducing bug resolution time by 50%', 'Implemented offline-first architecture for improved user experience', 'Optimized battery usage in location-based applications'],
    technologies: ['Kotlin', 'Java', 'MVVM', 'Room', 'Retrofit', 'RxJava', 'Firebase']
  }, {
    title: 'Junior Android Developer',
    company: 'AppCraft Studios',
    period: 'Jun 2016 - Feb 2018',
    description: 'Worked on a variety of Android applications for clients across different industries. Responsible for implementing UI components and basic functionality.',
    achievements: ['Developed custom UI components for brand consistency', 'Implemented RESTful API integrations for data synchronization', 'Assisted in app release processes and Play Store management', 'Contributed to internal libraries for code reusability'],
    technologies: ['Java', 'XML', 'MVP', 'SQLite', 'Retrofit', 'Glide']
  }];
  const education = [{
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2014 - 2016',
    focus: 'Mobile Computing and Software Engineering'
  }, {
    degree: 'Bachelor of Science in Computer Engineering',
    institution: 'University of California, Berkeley',
    period: '2010 - 2014',
    focus: 'Software Systems and Programming'
  }];
  return <section id="experience" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in Android development.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-0.5"></div>
          {/* Experience items */}
          {experiences.map((exp, index) => <div key={index} className="mb-12 relative">
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-green-600 border-4 border-white transform md:-translate-x-2 mt-6"></div>
                {/* Content */}
                <div className="md:w-1/2 ml-12 md:ml-0 md:px-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <BriefcaseIcon className="h-5 w-5 text-green-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="text-green-600 font-medium mb-2">
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-600">
                      {exp.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                          {tech}
                        </span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        {/* Education Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <GraduationCapIcon className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                </div>
                <div className="text-green-600 font-medium mb-2">
                  {edu.institution}
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-600">Focus: {edu.focus}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}