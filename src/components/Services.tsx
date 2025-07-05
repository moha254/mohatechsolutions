import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cog, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Cloud,
  ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const learnMoreContent: { [key: string]: React.ReactNode } = {
  'Business Process Automation': (
    <div>
      <h4 className="text-lg font-bold mb-2">How We Automate Your Business</h4>
      <ul className="list-disc pl-5 text-gray-700 mb-2">
        <li>We analyze your current workflows and identify bottlenecks.</li>
        <li>We design and implement custom automation using modern tools (e.g., Zapier, custom scripts, APIs).</li>
        <li>We train your team and provide ongoing support.</li>
      </ul>
      <p className="text-gray-600">Result: Save hours weekly, reduce manual errors, and focus on growth.</p>
    </div>
  ),
  'E-commerce & POS Integration': (
    <div>
      <h4 className="text-lg font-bold mb-2">Seamless Online & Offline Sales</h4>
      <ul className="list-disc pl-5 text-gray-700 mb-2">
        <li>We set up your online store (Shopify, WooCommerce, or custom).</li>
        <li>Integrate with POS systems for unified inventory and sales tracking.</li>
        <li>Enable mobile payments and local payment gateways.</li>
      </ul>
      <p className="text-gray-600">Result: Sell everywhere, manage easily, and get real-time sales insights.</p>
    </div>
  ),
  'CRM & Customer Experience': (
    <div>
      <h4 className="text-lg font-bold mb-2">Build Lasting Customer Relationships</h4>
      <ul className="list-disc pl-5 text-gray-700 mb-2">
        <li>Centralize customer data for better service.</li>
        <li>Automate follow-ups and reminders.</li>
        <li>Integrate WhatsApp, SMS, and email for communication.</li>
      </ul>
      <p className="text-gray-600">Result: Happier customers, more repeat business, and better support.</p>
    </div>
  ),
  'Data & Analytics Dashboards': (
    <div>
      <h4 className="text-lg font-bold mb-2">Make Data-Driven Decisions</h4>
      <ul className="list-disc pl-5 text-gray-700 mb-2">
        <li>Custom dashboards for sales, inventory, and staff performance.</li>
        <li>Connect to your existing systems (POS, CRM, spreadsheets).</li>
        <li>Visualize trends and get actionable insights.</li>
      </ul>
      <p className="text-gray-600">Result: Know what's working and where to improve, instantly.</p>
    </div>
  ),
  'Website & Cloud Solutions': (
    <div>
      <h4 className="text-lg font-bold mb-2">Modern, Secure, and Reliable</h4>
      <ul className="list-disc pl-5 text-gray-700 mb-2">
        <li>Mobile-friendly websites tailored to your brand.</li>
        <li>Cloud hosting for speed and reliability.</li>
        <li>Domain, email, and SSL setup included.</li>
      </ul>
      <p className="text-gray-600">Result: Look professional online and never worry about downtime.</p>
    </div>
  ),
};

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: <Cog className="h-12 w-12" />,
      title: 'Business Process Automation',
      description: 'Streamline your operations with custom automation solutions that save time and reduce errors.',
      features: ['Workflow Automation', 'Document Management', 'Task Scheduling', 'Integration Services'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: 'E-commerce & POS Integration',
      description: 'Complete online store setup with seamless point-of-sale system integration.',
      features: ['Online Store Setup', 'Payment Gateway', 'Inventory Management', 'Sales Analytics'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'CRM & Customer Experience',
      description: 'Manage customer relationships effectively with our tailored CRM solutions.',
      features: ['Customer Database', 'Lead Management', 'Communication Tools', 'Support System'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: 'Data & Analytics Dashboards',
      description: 'Make informed decisions with comprehensive business intelligence dashboards.',
      features: ['Real-time Analytics', 'Custom Reports', 'Data Visualization', 'Performance Metrics'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: 'Website & Cloud Solutions',
      description: 'Professional websites and reliable cloud infrastructure for your business.',
      features: ['Responsive Websites', 'Cloud Hosting', 'Domain Management', 'SSL Security'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <BarChart3 className="h-12 w-12" />,
      title: 'IT Support & Training',
      description: 'Expert IT support and staff training to keep your business running smoothly and securely.',
      features: ['On-site & Remote Support', 'Cybersecurity Guidance', 'Staff Digital Training', 'System Maintenance'],
      color: 'from-yellow-500 to-orange-500'
    },
   
  ];
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy font-poppins mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-custom max-w-3xl mx-auto">
            Comprehensive technology solutions designed specifically for small and medium businesses in Kenya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-4 font-poppins">
                  {service.title}
                </h3>
                
                <p className="text-gray-custom mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="inline-flex items-center text-navy font-semibold hover:text-blue-600 transition-colors duration-200 group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`learn-more-content-${index}`}
                  type="button"
                >
                  {openIndex === index ? 'Hide Details' : 'Learn More'}
                  <ArrowRight className={`ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200 ${openIndex === index ? 'rotate-90' : ''}`} />
                </button>

                {openIndex === index && (
                  <div
                    id={`learn-more-content-${index}`}
                    className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 animate-fade-in"
                  >
                    {learnMoreContent[service.title]}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-poppins">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              We create tailored technology solutions that fit your unique business needs.
            </p>
            <button className="bg-white text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              onClick={() => navigate('/contact')}>
              Discuss Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}