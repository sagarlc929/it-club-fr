import React from "react";

const events = [
  {
    id: 1,
    title: "Tech Workshop 2025",
    date: "February 15, 2025",
    description: "Learn about the latest trends in AI and machine learning.",
    image:
      "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Hackathon 2025",
    date: "March 10, 2025",
    description: "Join our 24-hour coding marathon and win exciting prizes!",
    image:
      "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Cybersecurity Seminar",
    date: "April 5, 2025",
    description: "Discuss the future of cybersecurity with industry experts.",
    image:
      "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Events: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105"
          >
            {/* Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            {/* Event Details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">
                {event.title}
              </h2>
              <p className="text-sm text-gray-600">{event.date}</p>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
            {/* View Details Button */}
            <div className="p-4">
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
