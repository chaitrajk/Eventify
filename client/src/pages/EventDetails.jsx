import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import events from '../features/events/eventData';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));
  const [rsvped, setRsvped] = useState(false);

  useEffect(() => {
    const savedRSVP = JSON.parse(localStorage.getItem('rsvpList')) || [];
    setRsvped(savedRSVP.includes(event?.id));
  }, [event]);

  const handleRSVP = () => {
    const savedRSVP = JSON.parse(localStorage.getItem('rsvpList')) || [];
    if (!savedRSVP.includes(event.id)) {
      savedRSVP.push(event.id);
      localStorage.setItem('rsvpList', JSON.stringify(savedRSVP));
      setRsvped(true);
    }
  };

  if (!event) {
    return <div className="text-center text-red-500 mt-10">Event not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-lg text-gray-700 mb-2">📅 {event.date}</p>
      <p className="text-gray-600 mb-4">{event.description}</p>

      {rsvped ? (
        <p className="text-green-600 font-medium">✅ You have RSVPed for this event!</p>
      ) : (
        <button
          onClick={handleRSVP}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          RSVP Now
        </button>
      )}
    </div>
  );
};

export default EventDetails;

