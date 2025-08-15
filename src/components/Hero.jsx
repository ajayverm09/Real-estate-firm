import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/f61af8_f2b8d6008c40442a8a1f732d12b98301.png/v1/fill/w_1883,h_836,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_f2b8d6008c40442a8a1f732d12b98301.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent flex items-center px-4 sm:px-10 md:px-20">
        <div className="max-w-full sm:max-w-md md:max-w-xl">
          <h1
            data-aos="fade-right"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug sm:leading-tight md:leading-tight mb-3 sm:mb-4"
          >
            LUXURY VILLA<br />MINUTES<br />FROM THE BAY
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-blue-500 text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4"
          >
            $3,500,000
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-6"
          >
            I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
          </p>
          <Link to="/sales">
            <button
              data-aos="zoom-in"
              data-aos-delay="600"
              className="border-2 border-black text-black px-4 sm:px-6 py-2 sm:py-3 rounded-2xl hover:bg-black hover:text-white transition text-sm sm:text-base md:text-lg"
            >
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
