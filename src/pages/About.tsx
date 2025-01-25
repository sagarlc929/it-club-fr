import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Us</h2>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the IT Club! We are a community of passionate individuals who share a common love for technology and innovation. Our club brings together students and professionals to learn, collaborate, and create cutting-edge solutions in the field of IT.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to foster a dynamic learning environment that encourages students to explore the latest trends in technology. Through workshops, hackathons, and collaboration with industry leaders, we aim to equip members with the skills needed to thrive in the ever-changing world of IT.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700 mb-6">
          We envision a future where technology empowers individuals to create meaningful change. By building a community of tech enthusiasts, we aim to inspire innovation, collaboration, and leadership within the IT space.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h3>
        <p className="text-lg text-gray-700 mb-6">
          Whether you're a coding expert or just starting your journey in IT, our club provides opportunities for everyone to learn and grow. Join us for our upcoming events and become a part of our tech community!
        </p>
      </div>
    </div>
  );
};

export default About;

