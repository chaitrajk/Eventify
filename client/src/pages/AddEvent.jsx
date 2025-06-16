import React, { useState } from 'react';

const AddEvent = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Added Event: ${title}`);
    setTitle('');
    setDesc('');
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          className="border p-2 rounded"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;

