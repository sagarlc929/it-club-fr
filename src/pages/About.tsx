import React from "react";
import MemberCard from "../components/about/MemberCard"; // Adjust the path if needed
const members = [
  {
    name: "goku",
    role: "president",
    bio: "software engineer",
    backgroundImage: "/member/bg.jpg",
    frontImage: "member/front_bg_remove.png",
    logoImage: "member/bg_remove_logo.png",
  },
  {
    name: "goku",
    role: "president",
    bio: "software engineer",
    backgroundImage: "/member/bg.jpg",
    frontImage: "member/front_bg_remove.png",
    logoImage: "member/bg_remove_logo.png",
  },

  {
    name: "goku",
    role: "president",
    bio: "software engineer",
    backgroundImage: "/member/bg.jpg",
    frontImage: "member/front_bg_remove.png",
    logoImage: "",
  },
  {
    name: "goku",
    role: "president",
    bio: "software engineer",
    backgroundImage: "/member/bg.jpg",
    frontImage: "member/front_bg_remove.png",
    logoImage: undefined,
  },
];

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        About Us
      </h2>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to the IT Club! We are a community of passionate individuals
          who share a common love for technology and innovation. Our club brings
          together students and professionals to learn, collaborate, and create
          cutting-edge solutions in the field of IT.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Our mission is to foster a dynamic learning environment that
          encourages students to explore the latest trends in technology.
          Through workshops, hackathons, and collaboration with industry
          leaders, we aim to equip members with the skills needed to thrive in
          the ever-changing world of IT.
        </p>
      </div>

      {/* Team Section */}
      <h3 className="text-2xl font-semibold text-center text-gray-800 my-12">
        Meet Our Team
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default About;
