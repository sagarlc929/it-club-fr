import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add logic here to handle form submission (e.g., sending email or saving to database)
    console.log(formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>

      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
        <p className="text-lg text-gray-700 mb-6">
          If you have any questions or would like to learn more about the IT Club, feel free to reach out to us. We’re happy to help!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h3>
        <p className="text-lg text-gray-700 mb-4">Email: <a href="mailto:contact@itclub.com" className="text-blue-600 hover:text-blue-800">contact@itclub.com</a></p>
        <p className="text-lg text-gray-700 mb-4">Follow us on social media:</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com/itclub" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com/itclub" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com/itclub" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

