import MemberCard from "../components/about/MemberCard"; // Adjust the path if needed
import { useState, useEffect } from "react";
interface Member {
    _id: string;
    name: string;
    role: string;
    bio: string;
    backgroundImage: string;
    frontImage: string;
    logoImage: string;
    rank: number;
}



const About: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/members");
                if (!response.ok) {
                    throw new Error("Failed to fetch members");
                }
                const data = await response.json();
                setMembers(data.data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchMembers();
    }, []);

    if (loading)
        return <p className="text-center text-gray-600">Loading blogs...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;

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

            {/* <div className=" flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
            <div className=" flex flex-wrap gap-6">
                {members.map((member, index) => (
                    <MemberCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default About;
