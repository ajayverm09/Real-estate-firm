import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const sales = [
  {
    id: 1,
    title: "ALTON AVENUE",
    bedrooms: 5,
    price: "$500,000",
    images: [
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
    ],
    description: "Beautiful 5-bedroom property with spacious living areas and modern design."
  },
  {
    id: 2,
    title: "PRINCE WAY",
    bedrooms: 3,
    price: "$450,000",
    images: [
      "https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg",
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
    ],
    description: "Charming 3-bedroom home with great amenities and a prime location."
  },
  {
    id: 3,
    title: "PIERCE CLOSE",
    bedrooms: 6,
    price: "$790,000",
    images: [
      "https://images.pexels.com/photos/11238628/pexels-photo-11238628.jpeg",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg"
    ],
    description: "Luxury 6-bedroom villa with large outdoor space and a pool."
  }
];

const SalesSection = () => {
  const [imageIndexes, setImageIndexes] = useState(sales.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes(prevIndexes =>
        prevIndexes.map((current, i) =>
          (current + 1) % sales[i].images.length
        )
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest mb-10">
        Properties for Sale
      </h2>

      <div className="space-y-16">
        {sales.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col lg:flex-row items-center gap-6 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <Link to={`/sales/${item.id}`} className="relative w-full lg:w-1/2">
              <img
                src={item.images[imageIndexes[index]]}
                alt={item.title}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 text-sm sm:text-base font-semibold rounded-tr-lg">
                {item.price}
              </div>
            </Link>

            <div className="w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold">{item.title}</h3>
              <p className="text-gray-600 font-medium mt-1">{item.bedrooms} bedrooms</p>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">{item.description}</p>
              <Link
                to="/agents"
                className="mt-5 inline-block px-5 py-2 sm:px-6 sm:py-3 border border-black text-black text-sm sm:text-base rounded hover:bg-black hover:text-white transition"
              >
                Arrange a Viewing
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SalesSection;
export { sales };
