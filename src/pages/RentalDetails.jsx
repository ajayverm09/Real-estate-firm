import React from "react";
import { useParams, Link } from "react-router-dom";
import rentals from "./Rental";

const RentalDetail = () => {
  const { id } = useParams();
  const rental = rentals.find((item) => item.id === parseInt(id));

  if (!rental) {
    return <h2 className="text-center mt-10 text-xl">Property not found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="md:w-1/2 w-full">
          <img
            src={rental.img}
            alt={rental.title}
            className="w-full h-64 sm:h-80 md:h-full rounded-2xl object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-start md:justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">{rental.title}</h1>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">{rental.desc}</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <span className="text-lg sm:text-xl font-semibold">{rental.price}</span>
            <span className="text-gray-700">{rental.beds}</span>
          </div>
          <Link
            to="/rental"
            className="mt-5 text-blue-600 hover:underline text-sm sm:text-base"
          >
            ← Back to listings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentalDetail;
