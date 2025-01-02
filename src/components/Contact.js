import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import { fadeIn } from "../components/variants";

const Contact = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_sayeo9e', 'template_mm5apth', e.target, '7-zFdw7gEvp-PVtW1')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send email. Please try again later.');
      });
    
   
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
  };

  
  return (
    <div id="contact">
    <section className="p-8 text-center">
      <div className="flex flex-col md:flex-row items-center align center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 text-center md:text-left">
        <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
        >
          <h2 className="text-3xl text-center md:text-left text-accent font-bold mb-8">Get in touch</h2>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
          <p className="text-lg text-center md:text-left text-white mb-4">
            <strong>Location</strong><br />
            Maple Ridge, BC!
          </p>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <motion.div 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
          <h2 className="text-3xl text-accent font-bold mb-4">Send me a message</h2>
          <p className="text-lg text-center text-white mb-4">
            Contact me today for professional, reliable web development tailored to your needs!
          </p>
          </motion.div>
          <motion.div 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-1/2 p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 mb-6 bg-accent text-white font-bold uppercase rounded hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="p-8 text-center">
    <motion.div 
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount : 0.3 }}
    >
      <h2 className="text-3xl text-accent font-bold mb-6 md:mb-4">My Location</h2>
      </motion.div>
      <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount : 0.3 }}
          >
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166647.05536074864!2d-122.70482142234435!3d49.2600948719505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d3614f013ecb%3A0x47a5c3ea30cde8ea!2sMaple%20Ridge%2C%20BC!5e0!3m2!1sen!2sca!4v1725440818231!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      </motion.div>
    </section>
  </div>
  );
};

export default Contact;