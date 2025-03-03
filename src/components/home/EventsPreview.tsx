import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {IconLoader} from '@tabler/icons-react'
const EventPreview: React.FC = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [events, setEvents] = useState<any[]>([]); // Initialize an empty array for events
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

  useEffect(() => {
    // Fetch event data from API
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/events/features",
        );
        const data = await response.json();
        console.log("data" + data);
        if (data.success) {
          setEvents(data.data); // Set the event data
        } else {
          setError("Failed to load events");
        }
      } catch (err) {
        console.error("Error occurred while fetching events: ", err);
        setError("An error occurred while fetching events");
      } finally {
        setLoading(false); // Set loading to false after the request
      }
    };

    fetchEvents();
  }, []);

  if (loading)
    return <p className="text-center text-gray-600">Loading events...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white p-6  hover:shadow-blue-600/50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <Link
              to={event.registrationLink}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Register Now &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventPreview;
