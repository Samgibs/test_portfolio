import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const plans = [{
    name: 'Startup',
    price: isAnnual ? 49 : 59,
    description: 'Perfect for new multi-vendor marketplaces',
    features: ['Up to 10 merchant stores', '2% transaction fee', 'Basic analytics', 'Standard support', 'Custom domains', 'Mobile responsive stores', 'Basic inventory management'],
    cta: 'Start free trial',
    highlight: false
  }, {
    name: 'Business',
    price: isAnnual ? 99 : 119,
    description: 'For growing eCommerce platforms',
    features: ['Up to 50 merchant stores', '1% transaction fee', 'Advanced analytics', 'Priority support', 'Custom domains', 'Mobile responsive stores', 'Advanced inventory management', 'API access', 'White-label solution', 'Multiple payment gateways'],
    cta: 'Start free trial',
    highlight: true
  }, {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale marketplaces',
    features: ['Unlimited merchant stores', 'Custom transaction fees', 'Enterprise analytics', '24/7 dedicated support', 'Custom domains', 'Mobile responsive stores', 'Advanced inventory management', 'Full API access', 'White-label solution', 'Multiple payment gateways', 'Custom development', 'Dedicated account manager', 'SLA guarantees'],
    cta: 'Contact sales',
    highlight: false
  }];
  return <section id="pricing" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pricing plans for businesses of all sizes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your multi-tenant eCommerce platform.
          </p>
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual
            </span>
            <button onClick={() => setIsAnnual(!isAnnual)} className="relative inline-flex h-6 w-12 items-center rounded-full">
              <span className={`absolute h-5 w-5 transform rounded-full transition ${isAnnual ? 'translate-x-1 bg-blue-600' : 'translate-x-6 bg-gray-400'}`} />
              <span className={`absolute inset-0 rounded-full ${isAnnual ? 'bg-blue-200' : 'bg-gray-200'}`} />
            </button>
            <span className={`ml-3 ${!isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
          </div>
          {isAnnual && <p className="text-sm text-green-600 font-medium">
              Save 20% with annual billing
            </p>}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className={`bg-white rounded-xl overflow-hidden border ${plan.highlight ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
              {plan.highlight && <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  MOST POPULAR
                </div>}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  {typeof plan.price === 'number' ? <div className="flex items-baseline">
                      <span className="text-4xl font-extrabold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="ml-1 text-xl text-gray-500">/month</span>
                    </div> : <div className="text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </div>}
                </div>
                <button className={`w-full py-3 rounded-lg font-medium ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                  {plan.cta}
                </button>
              </div>
              <div className="px-8 pb-8">
                <p className="font-medium text-gray-900 mb-4">
                  Features include:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => <li key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}