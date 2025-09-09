import React from 'react';
import { ArrowRightIcon, ShoppingCartIcon, StoreIcon, UsersIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Launch your multi-tenant eCommerce platform
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Everything you need to create, manage, and scale multiple online
              stores with a single platform. Powerful for developers, easy for
              merchants.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 flex items-center justify-center">
                Start your 14-day free trial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center justify-center">
                Schedule a demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              No credit card required • Cancel anytime
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Dashboard preview" className="w-full h-auto rounded-t-lg" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center">
              <ShoppingCartIcon className="h-12 w-12 text-blue-600 mr-4" />
              <div>
                <div className="text-sm font-semibold text-gray-800">
                  Sales this month
                </div>
                <div className="text-2xl font-bold text-gray-900">$24,389</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg flex items-center">
              <StoreIcon className="h-10 w-10 text-green-500 mr-3" />
              <div>
                <div className="text-sm font-semibold text-gray-800">
                  Active stores
                </div>
                <div className="text-2xl font-bold text-gray-900">12</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-gray-200 pt-10">
          <p className="text-center text-sm text-gray-500 mb-6">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Nike', 'Amazon', 'Google', 'Microsoft', 'Airbnb'].map(company => <div key={company} className="text-gray-400 font-semibold text-xl">
                  {company}
                </div>)}
          </div>
        </div>
      </div>
    </section>;
}