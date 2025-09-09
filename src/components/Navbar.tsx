import React, { useState } from 'react';
import { MenuIcon, XIcon, ShoppingBagIcon } from 'lucide-react';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <ShoppingBagIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              ShopifyPlus
            </span>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600">
              FAQ
            </a>
            <button className="bg-gray-100 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200">
              Log in
            </button>
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700">
              Start free trial
            </button>
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
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Features
            </a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Pricing
            </a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Testimonials
            </a>
            <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              FAQ
            </a>
            <div className="pt-4 pb-2 border-t border-gray-200">
              <button className="w-full mb-2 px-4 py-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
                Log in
              </button>
              <button className="w-full px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Start free trial
              </button>
            </div>
          </div>
        </div>}
    </nav>;
}