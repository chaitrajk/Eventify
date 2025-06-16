import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-20 px-4 text-center rounded-3xl shadow-xl mx-4 mt-6">
      <h1 className="text-5xl font-extrabold mb-4">
        Discover Events. Create Memories.
      </h1>
      <p className="text-xl mb-6">
        Browse trending events and register with just one click.
      </p>
      <button className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-purple-100 transition-all duration-300">
        Explore Events
      </button>
    </section>
  );
};

export default Hero;

