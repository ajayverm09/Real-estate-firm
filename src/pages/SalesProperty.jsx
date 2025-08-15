import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sales } from "../pages/Sales";
import AOS from "aos";
import "aos/dist/aos.css";

const SalesProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const propertyIndex = sales.findIndex((p) => p.id === parseInt(id));
  const property = sales[propertyIndex];
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!property) {
    return <p className="text-center py-20">Property not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 relative">
      <button
        onClick={() => navigate("/sales")}
        className="absolute top-4 right-4 px-3 sm:px-4 py-2 border rounded-lg border-black hover:bg-black hover:text-white transition"
      >
        ✕
      </button>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 relative"
        >
          <img
            src={property.images[imgIndex]}
            alt={property.title}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-lg"
          />

          {imgIndex > 0 && (
            <button
              onClick={() => setImgIndex(imgIndex - 1)}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow hover:scale-110 transition"
            >
              &lt;
            </button>
          )}

          {imgIndex < property.images.length - 1 && (
            <button
              onClick={() => setImgIndex(imgIndex + 1)}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow hover:scale-110 transition"
            >
              &gt;
            </button>
          )}
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-3">{property.title}</h1>
          <p className="text-gray-500 text-sm sm:text-base mb-2">{property.bedrooms} bedrooms</p>
          <p className="text-gray-700 text-sm sm:text-base">{property.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SalesProperty;
