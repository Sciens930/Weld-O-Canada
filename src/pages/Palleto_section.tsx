// import React from 'react';

const Palleto_section = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <img
          src="https://palletocanada.com/wp-content/uploads/2024/02/Group-427319052-1-2048x1365.webp"
          alt="Pallet Banner"
          className="w-full h-auto max-h-[400px] object-cover mb-8 rounded-md"
        />
        <h1 className="text-4xl md:text-5xl text-green-800 font-bold mb-4">Welcome to Palleto Canada</h1>
        <p className="text-xl text-gray-600 mb-8">Innovative Steel Pallet Solutions</p>
        <button className="bg-green-800 text-white py-3 px-8 rounded-md hover:bg-green-700 transition text-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Palleto_section;