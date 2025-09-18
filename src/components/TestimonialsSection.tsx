import React from 'react';
import { StarIcon } from 'lucide-react';
export function TestimonialsSection() {
  const testimonials = [{
    content: "We launched our multi-vendor marketplace in just two weeks. The platform's flexibility allowed us to customize everything to our brand while maintaining a seamless experience for our merchants.",
    author: 'Sarah Johnson',
    role: 'CEO, FashionMart',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5
  }, {
    content: 'The multi-tenant architecture has been a game-changer for our business. We can onboard new merchants in minutes, and the unified dashboard makes management incredibly efficient.',
    author: 'Michael Chen',
    role: 'CTO, TechBazaar',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5
  }, {
    content: 'The analytics and reporting features have given us insights we never had before. We can now make data-driven decisions across all our storefronts, which has dramatically increased our revenue.',
    author: 'Jessica Williams',
    role: 'COO, HomeGoods Collective',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4
  }];
  return <section id="testimonials" className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by businesses worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about our multi-tenant eCommerce
            platform.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill={i < testimonial.rating ? 'currentColor' : 'none'} />)}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-blue-50 rounded-2xl p-10 md:p-16 animate-fade-in-up hover:transform hover:scale-105 transition-all duration-500">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to transform your eCommerce business?
              </h3>
              <p className="text-lg text-gray-600">
                Join thousands of businesses that are scaling their operations
                with our multi-tenant platform.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                Start your free trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}