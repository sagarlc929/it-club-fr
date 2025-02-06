import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import EventsPreview from "../components/home/EventsPreview";
import BlogPreview from "../components/home/BlogPreview";

console.log(import.meta.env.DB_PASSWORD); // undefined
const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Events Preview */}
      <EventsPreview />

      {/* Blog Preview */}
      <BlogPreview />
    </div>
  );
};

export default Home;
