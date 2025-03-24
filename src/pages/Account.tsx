import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyAccount: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <section className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4 font-cardo">My Account</h1>
          <p className="text-gray-600">Login or register to manage your account.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MyAccount;