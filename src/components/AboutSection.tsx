import React from 'react';
import { CodeIcon, SmartphoneIcon, UserIcon, GraduationCapIcon } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-green-600 mx-auto"></div>
        </div>
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Alex Johnson" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-green-600 rounded-full p-5">
                <div className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Alex Johnson
            </h3>
            <h4 className="text-xl text-green-600 mb-6">
              Senior Android Developer
            </h4>
            <p className="text-gray-600 mb-6">
              I'm a passionate Android developer with 5+ years of experience
              creating innovative mobile applications. My journey in mobile
              development began during my computer science studies, and I've
              been crafting user-friendly, high-performance Android applications
              ever since.
            </p>
            <p className="text-gray-600 mb-8">
              I specialize in modern Android development using Kotlin and
              Jetpack Compose, with a strong focus on clean architecture,
              testability, and seamless user experiences. My goal is to build
              applications that not only look great but also perform
              exceptionally well across all Android devices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <CodeIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    Clean Code
                  </h5>
                  <p className="text-gray-600 text-sm">
                    I write maintainable, testable, and readable code following
                    best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <SmartphoneIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    Modern UI
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Creating beautiful, intuitive interfaces with Jetpack
                    Compose and Material Design.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <UserIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    User-Centered
                  </h5>
                  <p className="text-gray-600 text-sm">
                    I prioritize user experience in every development decision.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <GraduationCapIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-1">
                    Continuous Learning
                  </h5>
                  <p className="text-gray-600 text-sm">
                    Always staying updated with the latest Android development
                    trends and technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}