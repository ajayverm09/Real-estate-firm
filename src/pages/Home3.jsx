import React, { useEffect } from 'react';
import { HiDocumentText, HiMap, HiCube } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Highlights = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <div
          data-aos="fade-down"
          className="bg-gray-100 rounded-2xl p-6 sm:p-8 flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase leading-tight">
            Voted<br />Number 1<br />Realtor in<br />the Bay
          </h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-col items-start p-6 sm:p-8 transform transition-transform duration-300 hover:scale-105"
        >
          <HiDocumentText className="text-blue-500 text-3xl sm:text-4xl mb-2" />
          <h3 className="text-lg sm:text-xl font-bold uppercase leading-snug">
            Free Registration<br />No Hidden Fees
          </h3>
          <hr className="w-10 border-t-2 my-2 border-blue-200" />
          <p className="text-gray-600 text-sm sm:text-base">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col items-start p-6 sm:p-8 transform transition-transform duration-300 hover:scale-105"
        >
          <HiCube className="text-blue-500 text-3xl sm:text-4xl mb-2" />
          <h3 className="text-lg sm:text-xl font-bold uppercase leading-snug">
            Free Property<br />Valuation
          </h3>
          <hr className="w-10 border-t-2 my-2 border-blue-200" />
          <p className="text-gray-600 text-sm sm:text-base">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="bg-gray-100 p-6 sm:p-8 rounded-2xl flex flex-col items-start justify-center transform transition-transform duration-300 hover:scale-105"
        >
          <HiMap className="text-blue-500 text-3xl sm:text-4xl mb-2" />
          <h3 className="text-lg sm:text-xl font-bold uppercase leading-snug">
            Offices in 4<br />Locations
          </h3>
          <hr className="w-10 border-t-2 my-2 border-blue-200" />
          <p className="text-gray-600 text-sm sm:text-base">
            I'm a paragraph. Click here to add your own text and edit me.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Highlights;
