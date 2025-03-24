import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center font-cardo">
            Checkout
          </h1>
          <p className="text-center text-gray-600">Checkout functionality to be implemented.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;