import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Tech Workshop 2025",
    date: "February 15, 2025",
    description: "An insightful workshop on the latest in AI and Machine Learning technologies.",
    link: "/events/tech-workshop-2025",
  },
  {
    id: 2,
    title: "Hackathon 2025",
    date: "March 10, 2025",
    description: "A 24-hour coding marathon with exciting challenges and prizes. Don’t miss it!",
    link: "/events/hackathon-2025",
  },
  {
    id: 3,
    title: "Cybersecurity Seminar",
    date: "April 5, 2025",
    description: "Join us to learn the latest trends in cybersecurity from top experts in the field.",
    link: "/events/cybersecurity-seminar",
  },
];

const EventPreview: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <div className="space-y-8 "> */}
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{event.date}</p>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <Link
              to={event.link}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              View Event Details &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPreview;

