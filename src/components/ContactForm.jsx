import React, { useState } from 'react';
import { motion } from "motion/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Email address is invalid.');
      return;
    }
    console.log('Form data submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-purple-100 ">
      <div className="container mx-auto px-6 bg-purple-100 ">
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <h3 className="inline-block bg-amber-50 font-medium hover:scale-105 duration-300 bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent">Get In Touch</h3>
          <h2 className="inline-block hover:scale-105 duration-300 text-3xl md:text-4xl font-bold bg-gradient-to-bl from-purple-700 to-pink-500 bg-clip-text text-transparent">Contact me</h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto  p-8 rounded-lg shadow-lg bg-purple-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
            <div>
              <label htmlFor="name" className="block  text-gray-700 font-medium mb-2 ">Name</label>
              <input type="text" placeholder='Your Name' id="name" name="name" value={formData.name} onChange={handleChange} className="min-h-11 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white shadow-md hover:scale-105 duration-300" />
            </div>
            <div>
              <label htmlFor="email"  className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" placeholder='Your Email' id="email" name="email" value={formData.email} onChange={handleChange} className="w-full min-h-11 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white shadow-md hover:scale-105 duration-300" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject"  className="block text-gray-700 font-medium mb-2">Subject</label>
            <input type="text" placeholder="Your purpose in brief" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="min-h-11 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white shadow-md hover:scale-105 duration-300" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" placeholder='Type here....' name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full min-h-45 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 bg-white shadow-md hover:scale-105 duration-300"></textarea>
          </div>
          <div className="text-center">
            <motion.button whileTap={{scale:0.8}} transition={{duration:0}} type="submit" className=" bg-purple-500 hover:scale-105 duration-300  hover:bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-10 shadow-lg text-white py-3 px-8 font-medium ">
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;