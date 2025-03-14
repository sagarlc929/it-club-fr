import React, { useEffect, useState } from "react";

const Events: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([]); // Initialize an empty array for events
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

  useEffect(() => {
    // Fetch event data from API
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/events");
        const data = await response.json();
        console.log("data" + data);
        if (data.success) {
          setEvents(data.data); // Set the event data
          console.log(data.data);
        } else {
          setError("Failed to load events");
        }
      } catch (err) {
        console.error("Error occurred while fetching events:", err);
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
  // Get the current date
  const currentDate = new Date();

  // Convert event dates and categorize them
  const upcomingEvents = events.filter(
    (event) => new Date(event.date) > currentDate,
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date) <= currentDate,
  );

  // Function to format date and time
  const formatDate = (dateString: string) => {
    const eventDate = new Date(dateString);
    return eventDate.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Events
      </h1>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {formatDate(event.date)}
                  </p>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
                <div className="p-4">
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">
                    {event.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {formatDate(event.date)}
                  </p>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
                <div className="p-4">
                  <button className="w-full bg-gray-500 text-white py-2 rounded-lg cursor-not-allowed opacity-50">
                    Event Passed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
