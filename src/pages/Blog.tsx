import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  date: string;
  summary: string;
  slug: string;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return <p className="text-center text-gray-600">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        All Blog Posts
      </h2>
      <div className="space-y-8">
        <div className="space-y-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-600/50 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {new Date(blog.date).toDateString()}
              </p>
              <p className="text-gray-700 mb-4">{blog.summary}</p>
              <Link
                to={`/blog/${blog.slug}`}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
