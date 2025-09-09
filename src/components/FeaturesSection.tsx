import React from 'react';
import { StoreIcon, UsersIcon, CreditCardIcon, BarChartIcon, GlobeIcon, ShieldIcon } from 'lucide-react';
export function FeaturesSection() {
  const features = [{
    icon: <StoreIcon className="h-8 w-8 text-blue-600" />,
    title: 'Multiple Storefronts',
    description: 'Create and manage unlimited storefronts from a single dashboard with custom domains and themes.'
  }, {
    icon: <UsersIcon className="h-8 w-8 text-blue-600" />,
    title: 'Multi-tenant Architecture',
    description: 'Securely separate merchant data while maintaining a unified platform for streamlined management.'
  }, {
    icon: <CreditCardIcon className="h-8 w-8 text-blue-600" />,
    title: 'Unified Payments',
    description: 'Process payments across all stores with integrated payment gateways and automated revenue sharing.'
  }, {
    icon: <BarChartIcon className="h-8 w-8 text-blue-600" />,
    title: 'Advanced Analytics',
    description: 'Get comprehensive insights across all stores or drill down into individual merchant performance.'
  }, {
    icon: <GlobeIcon className="h-8 w-8 text-blue-600" />,
    title: 'Global Commerce',
    description: 'Support for multiple languages, currencies, and international shipping from day one.'
  }, {
    icon: <ShieldIcon className="h-8 w-8 text-blue-600" />,
    title: 'Enterprise Security',
    description: 'Bank-level security with data encryption, fraud protection, and regular security audits.'
  }];
  return <section id="features" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to run multiple stores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform gives you the tools to create, manage, and scale
            multiple eCommerce stores with ease.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 md:p-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Powerful Admin Dashboard
                </h3>
                <p className="text-gray-600 mb-6">
                  Manage all your stores from a single, intuitive dashboard.
                  Control inventory, orders, customers, and more across your
                  entire ecosystem.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Unified inventory management', 'Cross-store customer profiles', 'Centralized order processing', 'Custom roles and permissions', 'Automated reports and insights'].map((item, i) => <li key={i} className="flex items-center">
                      <div className="rounded-full bg-blue-600 p-1 mr-3">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>)}
                </ul>
                <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                  Learn more
                </button>
              </div>
              <div className="md:w-1/2">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Admin dashboard" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}