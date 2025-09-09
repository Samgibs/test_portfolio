import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export function CTASection() {
  return <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Launch your multi-tenant eCommerce platform today
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join thousands of businesses that are scaling their operations with
          our powerful platform. Start your 14-day free trial now.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 flex items-center justify-center mx-auto sm:mx-0">
            Start your free trial
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
          <button className="px-8 py-3 bg-transparent text-white font-medium rounded-lg border border-white hover:bg-blue-500 flex items-center justify-center mx-auto sm:mx-0">
            Schedule a demo
          </button>
        </div>
        <p className="mt-6 text-blue-200 text-sm">
          No credit card required • Full access for 14 days • Cancel anytime
        </p>
      </div>
    </section>;
}