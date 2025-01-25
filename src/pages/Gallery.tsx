import React from "react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1737509551345-21577f99bf63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Event 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1737509551345-21577f99bf63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Event 1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1737509551345-21577f99bf63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Event 1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1737509551345-21577f99bf63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Event 1",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
