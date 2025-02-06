import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div
        className="container mx-auto px-6 py-6 text-center rounded-lg "
        style={{ backgroundColor: "rgba(37, 99, 235, 0.5)" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Welcome to the IT Club
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Join a community of tech enthusiasts, explore, learn, and innovate.
        </p>
        <div className="space-x-4">
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
