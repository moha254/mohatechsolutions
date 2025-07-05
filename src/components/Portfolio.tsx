import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Custom e-commerce solution with advanced features and seamless payment integration.'
  },
  {
    title: 'Cloud Infrastructure',
    category: 'IT Solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Enterprise-level cloud infrastructure setup with robust security measures.'
  },
  {
    title: 'Brand Identity',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Complete brand identity design including logo, guidelines, and marketing materials.'
  },
  {
    title: 'Social Media Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Successful social media campaign that increased engagement by 300%.'
  },
  {
    title: 'SaaS Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Modern SaaS platform with advanced analytics and user management.'
  },
  {
    title: 'Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Cross-platform mobile app with real-time synchronization.'
  }
];

export default function Portfolio() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Showcasing our best work across different industries and technologies.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}