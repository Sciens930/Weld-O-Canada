import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here (e.g., API call)
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center font-cardo">
            Contact us
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4 font-cardo">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-green"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-green"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-green"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-green"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-custom-green text-white py-2 px-6 rounded-md hover:bg-green-700 transition"
                >
                  Send message
                </button>
              </form>
            </div>
            {/* Contact Info and Map */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-4 font-cardo">
                Get in touch
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <FaPhone className="mr-2 text-custom-green" />
                  <span>+1 416-630-7177</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-custom-green" />
                  <a href="mailto:info@palletocanada.com" className="hover:text-custom-green">
                    info@palletocanada.com
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-custom-green"
                  >
                    <FaFacebookF size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/shareArticle?mini=true&url="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-custom-green"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </li>
              </ul>
              {/* Google Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509614!2d-122.4194156846813!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f5c2b7b1b%3A0x9a5b7e7f7e5b7e7f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1630521234567!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Pallet O Canada Location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;