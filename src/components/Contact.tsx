import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare,
  Send,
  Clock
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    reset();
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '0792 837410',
      link: 'tel:+254792837410'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'mohamedabukar412@gmail.com',
      link: 'mailto:mohamedabukar412@gmail.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'Eastleigh, Nairobi',
      link: '#'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      content: 'Mon - Fri: 8AM - 6PM',
      link: '#'
    }
  ];

  const services = [
    'Business Process Automation',
    'E-commerce & POS Integration',
    'CRM & Customer Experience',
    'Data & Analytics Dashboards',
    'Website & Cloud Solutions',
    'Custom Solution'
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
            Get in Touch
          </h2>
          <p className="text-xl text-gray-custom max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy mb-8 font-poppins">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center text-navy">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">{info.title}</h4>
                    {info.link.startsWith('#') ? (
                      <p className="text-gray-custom">{info.content}</p>
                    ) : (
                      <a
                        href={info.link}
                        className="text-gray-custom hover:text-navy transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp QR Code */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <MessageSquare className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-navy mb-2 font-poppins">
                Quick WhatsApp Contact
              </h4>
              <p className="text-gray-custom mb-6">
                Scan the QR code below to start a WhatsApp conversation
              </p>
              <div className="bg-white p-4 rounded-lg inline-block">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/254792837410?text=Hi%20MohaTech,%20I%27m%20interested%20in%20your%20services"
                  alt="WhatsApp QR Code"
                  className="w-32 h-32"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Or click{' '}
                <a
                  href="https://wa.me/254792837410?text=Hi%20MohaTech,%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 font-semibold"
                >
                  here
                </a>{' '}
                to chat directly
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-navy mb-8 font-poppins">
                Send us a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-colors duration-200"
                      placeholder="0700 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project or requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-white py-4 px-6 rounded-lg font-semibold hover:bg-navy-light transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}