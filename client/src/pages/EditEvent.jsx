import React, { useState } from 'react';

const EditEvent = () => {
  const [title, setTitle] = useState('Sample Event');
  const [desc, setDesc] = useState('Sample Description');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Edited Event: ${title}`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-indigo-600 text-white py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEvent;

