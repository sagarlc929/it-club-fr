import React from "react";

const features = [
  {
    id: 1,
    title: "Collaborative Learning",
    description:
      "Join study groups, workshops, and seminars to enhance your technical skills.",
    icon: "https://www.svgrepo.com/show/450741/collaboration.svg",
  },
  {
    id: 2,
    title: "Networking Opportunities",
    description:
      "Meet industry professionals and fellow students to expand your network.",

    icon: "https://www.svgrepo.com/show/450741/collaboration.svg",
  },
  {
    id: 3,
    title: "Exclusive Events",
    description:
      "Attend tech meetups, hackathons, and conferences hosted by the club.",
    icon: "https://www.svgrepo.com/show/450741/collaboration.svg",
  },
];

const Features: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Feature Icon */}
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mb-4 mx-auto"
            />
            {/* Feature Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            {/* Feature Description */}
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
