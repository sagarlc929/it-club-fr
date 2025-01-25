import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="container mx-auto h-full flex items-center justify-center relative text-center text-white px-4">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Welcome to the IT Club
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            Join a community of tech enthusiasts, explore, learn, and innovate.
          </p>
          <Link
            to="/events"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Explore Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

