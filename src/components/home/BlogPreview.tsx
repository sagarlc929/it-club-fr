import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    date: "January 20, 2025",
    snippet:
      "Artificial Intelligence (AI) is transforming industries. In this blog, we explore its impact on various fields, from healthcare to entertainment.",
    link: "/blog/exploring-the-future-of-ai",
  },
  {
    id: 2,
    title: "How to Build a Simple Web Application",
    date: "January 15, 2025",
    snippet:
      "Learn how to build a basic web application using modern frameworks like React and Express. This tutorial will guide you through the process step by step.",
    link: "/blog/how-to-build-a-simple-web-application",
  },
  {
    id: 3,
    title: "Top Programming Languages in 2025",
    date: "January 10, 2025",
    snippet:
      "What are the most in-demand programming languages for developers in 2025? We dive into the latest trends in the programming world.",
    link: "/blog/top-programming-languages-in-2025",
  },
];

const BlogPreview: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Latest Blogs
      </h2>
      <div className="space-y-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.snippet}</p>
            <Link
              to={blog.link}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Read More &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
