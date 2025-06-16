import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { Link } from 'react-router-dom';

const EventCard = ({ event, onEdit, onDelete }) => {
  const { user } = useAuth(); // use auth context
  const isAdmin = user?.email === 'admin@gmail.com'; // simple admin check

  const {
    id,
    image,
    title,
    date,
    time,
    location,
    description,
    organizer,
    tags,
    limitedSeats,
  } = event;

  const fallbackImage = "https://source.unsplash.com/featured/?event";

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 relative">
      {/* Limited Seats Badge */}
      {limitedSeats && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full z-10">
          Limited Seats
        </span>
      )}

      {/* Image */}
      <img
        src={image || fallbackImage}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <Link to={`/event/${id}`}>
          <h2 className="text-xl font-bold text-gray-800 hover:underline">{title}</h2>
        </Link>

        <p className="text-sm text-gray-600 mt-1">
          📅 {date} | 🕒 {time}
        </p>
        <p className="text-sm text-gray-600">📍 {location}</p>

        {organizer && (
          <p className="text-sm text-gray-500 mt-1">👤 Organized by: {organizer}</p>
        )}

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="mt-2 text-gray-700 text-sm line-clamp-2">{description}</p>

        {/* Footer Buttons */}
        <div className="mt-4 flex justify-between items-center">
          {/* RSVP */}
          <button
            onClick={() => alert(`RSVP confirmed for "${title}"`)}
            className="bg-indigo-600 text-white text-sm px-4 py-2 rounded hover:bg-indigo-700"
          >
            RSVP Now
          </button>

          {/* Admin Edit/Delete */}
          {isAdmin && (
            <div className="flex gap-2">
              <button
                onClick={() => onEdit?.(event)}
                className="bg-yellow-400 text-white px-3 py-1 text-sm rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete?.(event.id)}
                className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;

