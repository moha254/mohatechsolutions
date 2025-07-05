import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mission',
      description: 'Make affordable, simple digital tools for SMEs in Kenya that drive real business growth.'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Vision',
      description: 'To be the leading tech partner for small businesses across East Africa.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Values',
      description: 'Integrity, innovation, and customer-first approach in everything we do.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Delivering quality solutions that exceed expectations and drive success.'
    }
  ];

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
            About MohaTech Solutions
          </h2>
          <p className="text-xl text-gray-custom max-w-3xl mx-auto">
            Founded by Mohamed Abukar, we're passionate about helping Kenyan businesses 
            thrive through smart technology solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/img/moh2.jpg"
                alt="Mohamed Abukar - Founder"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-xl">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-navy font-poppins mb-6">
              Meet Our Founder
            </h3>
            <p className="text-lg text-gray-custom mb-6 leading-relaxed">
              Mohamed Abukar brings over 5 years of experience in technology and business 
              development. Based in Eastleigh, Nairobi, he understands the unique challenges 
              facing local businesses and is committed to providing practical, affordable solutions.
            </p>
            <p className="text-lg text-gray-custom mb-8 leading-relaxed">
              His vision is simple: make technology accessible to every business, regardless 
              of size or budget. Through MohaTech Solutions, he's helping transform how 
              Kenyan SMEs operate and grow.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                <span className="text-white font-bold">MA</span>
              </div>
              <div>
                <div className="font-semibold text-navy">Mohamed Abukar</div>
                <div className="text-gray-custom">Founder & CEO</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-navy mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-navy mb-3 font-poppins">
                {value.title}
              </h4>
              <p className="text-gray-custom leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}