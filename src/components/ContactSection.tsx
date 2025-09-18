import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-6 animate-expand-width"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interested in working together? Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 bg-gray-50 p-8 rounded-xl animate-fade-in-left hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.2s'}}>
                <div className="bg-green-100 p-3 rounded-lg mr-4 hover:bg-green-200 transition-colors duration-300">
                  <MailIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:alex.johnson@example.com" className="text-green-600 hover:underline">
                    alex.johnson@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.4s'}}>
                <div className="bg-green-100 p-3 rounded-lg mr-4 hover:bg-green-200 transition-colors duration-300">
                  <PhoneIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-green-600 hover:underline">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '0.6s'}}>
                <div className="bg-green-100 p-3 rounded-lg mr-4 hover:bg-green-200 transition-colors duration-300">
                  <MapPinIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>
            </div>
            <div className="mt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                  <LinkedinIcon className="h-5 w-5 text-blue-600" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110" aria-label="GitHub">
                  <GithubIcon className="h-5 w-5 text-gray-800" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110" aria-label="Twitter">
                  <TwitterIcon className="h-5 w-5 text-blue-400" />
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-gray-100 animate-fade-in-right hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Your email" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Subject" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 text-white font-medium py-3 rounded-md hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}