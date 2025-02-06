import React, { useEffect, useState } from "react";

const Gallery: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [events, setEvents] = useState<any[]>([]); // Initialize an empty array for events
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

  useEffect(() => {
    // Fetch event data from API
    const fetchGallery = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/gallery");
        const data = await response.json();
        if (data.success) {
          setEvents(data.data); // Set the event data
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

    fetchGallery();
  }, []);

  if (loading)
    return <p className="text-center text-gray-600">Loading gallery...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Event Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={event.alt} // Use the 'alt' as the image source here
              alt={event.src} // Use 'src' as an alt text if needed
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center"></div>

            <p className="text-white text-center font-semibold text-lg transition-opacity duration-300 absolute bottom-4 left-0 right-0  opacity-0 group-hover:opacity-100">
              {event.src}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
