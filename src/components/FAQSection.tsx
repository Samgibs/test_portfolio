import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
export function FAQSection() {
  const faqs = [{
    question: 'What is a multi-tenant eCommerce platform?',
    answer: 'A multi-tenant eCommerce platform allows you to host multiple independent online stores on a single platform. Each store operates independently with its own branding, products, and customers, but they all share the same underlying infrastructure and management system.'
  }, {
    question: 'How does billing work for merchants on the platform?',
    answer: 'You can choose how to bill your merchants. Options include a flat monthly fee, revenue sharing model, transaction fees, or a combination. Our platform provides flexible billing tools that allow you to implement the business model that works best for your marketplace.'
  }, {
    question: 'Can merchants customize their storefronts?',
    answer: 'Yes, merchants can customize their storefronts with their own branding, colors, and layouts. They can choose from a variety of templates or create custom designs. You control how much customization to allow based on your business model.'
  }, {
    question: 'How do payments work across multiple stores?',
    answer: 'Our platform includes an integrated payment system that processes transactions for all stores. Revenue can be automatically split between you and your merchants based on your revenue sharing agreement. We support multiple payment gateways including Stripe, PayPal, and more.'
  }, {
    question: 'Is the platform scalable for high-traffic stores?',
    answer: 'Absolutely. Our platform is built on a cloud infrastructure that scales automatically based on traffic demands. Whether you have a few stores or thousands, the platform maintains fast loading times and reliable performance.'
  }, {
    question: 'What kind of support do you offer?',
    answer: 'We offer different support tiers based on your plan. All customers receive standard email support. Business and Enterprise plans include priority support with faster response times. Enterprise customers also receive dedicated account management and 24/7 phone support.'
  }];
  const [openIndex, setOpenIndex] = useState(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return <section id="faq" className="py-20 bg-gray-50 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our multi-tenant eCommerce
            platform.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button onClick={() => toggleFAQ(index)} className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none">
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-gray-500" /> : <ChevronDownIcon className="h-5 w-5 text-gray-500" />}
              </button>
              {openIndex === index && <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50">
            Contact our sales team
          </button>
        </div>
      </div>
    </section>;
}