import React from "react";
import { Link } from "react-router-dom";
import rentals from "./Rental";

const RentalList = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-12">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
        Latest Rental Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rentals.map((rental) => (
          <div
            key={rental.id}
            className="border shadow-lg overflow-hidden rounded-lg bg-white flex flex-col"
          >
            <Link to={`/rental/${rental.id}`} className="relative block group">
              <img
                src={rental.img}
                alt={rental.title}
                className="w-full h-64 sm:h-72 md:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <div className="p-4 flex flex-col justify-between flex-1">
              <div className="mb-3">
                <span className="block font-semibold text-sm sm:text-base">
                  {rental.price}
                </span>
                <span className="block text-gray-600 text-xs sm:text-sm">
                  {rental.beds}
                </span>
                <h3 className="text-base sm:text-lg font-semibold truncate">
                  {rental.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                  {rental.desc}
                </p>
              </div>
              <div className="mt-auto flex justify-center sm:justify-end">
                <Link
                  to="/agents"
                  className="px-4 py-2 text-sm sm:text-base border rounded hover:bg-black hover:text-white hover:border-black transition"
                >
                  Arrange a Viewing
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalList;
