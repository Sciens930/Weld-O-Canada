import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center font-cardo">
            About Us
          </h1>
          <div className="text-gray-600 space-y-6">
            <p>
              Proudly Canadian, Pallet O Canada Inc. CWB certified fabrication shop operates with a fully equipped building along with fabrication equipment. We are certified for (CSA W47.1), Stainless Steel (CSA W47.1), and Aluminum (CSA W47.2).
            </p>
            <p>
              Pallet O Canada is also certified in quality manual ISO 9001:2015, and Weld O Canada has its own HSE Manual for safe operation.
            </p>
            <p>
              Pallet O Canada focuses on the fabrication of ASME pressure vessels, bio pharmaceutical equipment, modular skids, vacuum chambers, storage tanks, and other custom-designed equipment and stainless steel applications. Industries served include bio pharmaceutical, semiconductor, alternative energy, power generation, and other industrial applications.
            </p>
            <p>
              Our clients consist of well-established and industry-leading firms that require exceptional precision and quality engineered components delivered on time and at competitive prices.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;