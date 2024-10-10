import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <div className="flex flex-col items-center mt-6 space-y-4">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-red-600" />
              <span className="text-gray-700">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-red-600" />
              <span className="text-gray-700">contact@restaurant.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-red-600" />
              <span className="text-gray-700">123 Food Street, City, Country</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
