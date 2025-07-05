import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  DollarSign, 
  MapPin, 
  Briefcase,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export default function WhyUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const reasons = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your business running smoothly.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Affordable Solutions',
      description: 'Custom solutions that fit your budget without compromising on quality.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Local Expertise',
      description: 'Deep understanding of the Kenyan market and business environment.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Business-First Approach',
      description: 'Technology solutions designed with your business goals in mind.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Wanjiku',
      role: 'Owner, Wanjiku Boutique',
      content: 'MohaTech transformed our inventory management. We now track stock in real-time and our sales have increased by 40%.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'James Mwangi',
      role: 'Director, Mwangi Logistics',
      content: 'The automation system they built saves us 6 hours daily. Customer service is exceptional and always available.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'Grace Akinyi',
      role: 'Manager, Akinyi Restaurant',
      content: 'Our new POS system and online ordering platform doubled our revenue during the pandemic. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy font-poppins mb-4">
            Why Choose MohaTech?
          </h2>
          <p className="text-xl text-gray-custom max-w-3xl mx-auto">
            We're not just another tech company. We're your local partners committed to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className={`inline-flex p-4 rounded-full ${reason.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 font-poppins">
                {reason.title}
              </h3>
              <p className="text-gray-custom leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-navy text-center mb-12 font-poppins">
            What Our Clients Say
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl text-gray-600 mb-6 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div>
                <div className="font-bold text-navy text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-custom">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-navy text-white p-2 rounded-full hover:bg-navy-light transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-navy text-white p-2 rounded-full hover:bg-navy-light transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-navy' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}