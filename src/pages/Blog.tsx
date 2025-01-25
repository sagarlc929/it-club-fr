import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    date: "January 20, 2025",
    content: "Artificial Intelligence (AI) is transforming industries. In this blog, we explore its impact on various fields, from healthcare to entertainment. AI has shown immense potential in revolutionizing the way we work, interact, and solve complex problems. Its applications range from medical diagnostics to autonomous vehicles, offering a glimpse of a future powered by smart systems and machines.",
    link: "/blog/exploring-the-future-of-ai",
  },
  {
    id: 2,
    title: "How to Build a Simple Web Application",
    date: "January 15, 2025",
    content: "In this tutorial, we’ll walk through the steps of building a simple web application using modern frameworks like React and Express. You’ll learn about setting up a project, integrating frontend and backend technologies, and managing user authentication. Whether you're new to web development or looking to expand your skills, this guide will help you get started with building full-stack web apps.",
    link: "/blog/how-to-build-a-simple-web-application",
  },
  {
    id: 3,
    title: "Top Programming Languages in 2025",
    date: "January 10, 2025",
    content: "With the rapid pace of technological advancement, programming languages continue to evolve to meet new challenges. In 2025, languages like Python, JavaScript, and Go are expected to remain dominant in the developer community. This blog dives deep into the top programming languages and how they are shaping the future of software development. Learn about their features, use cases, and why they are in high demand among developers.",
    link: "/blog/top-programming-languages-in-2025",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">All Blog Posts</h2>
      <div className="space-y-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.content.slice(0, 200)}...</p>
            <Link
              to={blog.link}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read Full Article &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

