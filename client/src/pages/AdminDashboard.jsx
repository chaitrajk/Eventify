import React, { useState } from 'react';
import eventsData from '../features/events/eventData';
import EventCard from '../features/events/EventCard';

const AdminDashboard = () => {
  const [events, setEvents] = useState(eventsData);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: '',
    organizer: '',
    tags: [],
    limitedSeats: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setNewEvent({ ...newEvent, [name]: val });
  };

  const handleAddEvent = () => {
    const newId = Date.now(); // unique ID
    const eventToAdd = {
      id: newId,
      ...newEvent,
      tags: newEvent.tags.split(',').map((tag) => tag.trim()), // tag string to array
    };
    setEvents([eventToAdd, ...events]);

    setNewEvent({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      image: '',
      organizer: '',
      tags: '',
      limitedSeats: false,
    });
  };

  const handleDelete = (id) => {
    const updated = events.filter((event) => event.id !== id);
    setEvents(updated);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Add New Event Form */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="title" placeholder="Event Title" value={newEvent.title} onChange={handleInputChange} className="border p-2 rounded" />
          <input name="date" type="date" value={newEvent.date} onChange={handleInputChange} className="border p-2 rounded" />
          <input name="time" type="time" value={newEvent.time} onChange={handleInputChange} className="border p-2 rounded" />
          <input name="location" placeholder="Location" value={newEvent.location} onChange={handleInputChange} className="border p-2 rounded" />
          <input name="organizer" placeholder="Organizer" value={newEvent.organizer} onChange={handleInputChange} className="border p-2 rounded" />
          <input name="tags" placeholder="Tags (comma separated)" value={newEvent.tags} onChange={handleInputChange} className="border p-2 rounded" />
          <input name="image" placeholder="Image URL" value={newEvent.image} onChange={handleInputChange} className="border p-2 rounded" />
          <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleInputChange} className="border p-2 rounded col-span-2" />
          <label className="flex items-center gap-2 col-span-2">
            <input type="checkbox" name="limitedSeats" checked={newEvent.limitedSeats} onChange={handleInputChange} />
            <span>Limited Seats</span>
          </label>
        </div>
        <button onClick={handleAddEvent} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Add Event
        </button>
      </div>

      {/* List of Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

