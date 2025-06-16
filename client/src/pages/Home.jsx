import React, { useState } from 'react';
import api from '../services/api';
import eventsData from '../features/events/eventData';
import EventCard from '../features/events/EventCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const eventsPerPage = 2;

  const filteredEvents = eventsData.filter((event) => {
    const matchSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDate = filterDate ? event.date === filterDate : true;
    return matchSearch && matchDate;
  });

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Search and filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full md:w-1/2"
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="p-2 border rounded w-full md:w-1/4"
        />
      </div>

      {/* Events */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">No events found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;

