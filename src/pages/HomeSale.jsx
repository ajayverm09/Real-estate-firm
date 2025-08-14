import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSale = () => {
  const navigate = useNavigate();

  const properties = [
    {
      title: 'Alton Avenue',
      bedrooms: 3,
      price: '$500,000',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
    },
    {
      title: 'Prince Way',
      bedrooms: 3,
      price: '$450,000',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
      title: 'Pierce Close',
      bedrooms: 6,
      price: '$790,000',
      image: 'https://images.pexels.com/photos/33379153/pexels-photo-33379153.jpeg',
    },
  ];

  return (
    <div className="bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase mb-10 sm:mb-12">
        Properties for Sale
      </h2>
      <div className="flex flex-col gap-10 sm:gap-12 max-w-5xl mx-auto">
        {properties.map((property, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full md:w-1/2 h-64 sm:h-80 md:h-72 lg:h-96 rounded-2xl object-cover cursor-pointer hover:opacity-90 transition"
              onClick={() => navigate('/sales')}
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold uppercase mb-2 sm:mb-3">
                {property.title}
              </h3>
              <p className="font-semibold text-sm sm:text-base mb-2">{property.bedrooms} bedrooms</p>
              <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4">
                I'm a paragraph. Click here to add your own text and edit me. I’m a great place for
                you to tell a story and let your users know a little more about you.
              </p>
              <p className="text-blue-600 font-bold text-lg sm:text-xl">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSale;
