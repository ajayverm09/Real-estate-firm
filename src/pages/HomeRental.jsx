import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeRental = () => {
  const navigate = useNavigate();

  const rentals = [
    {
      title: 'East Drive',
      bedrooms: 4,
      price: '$790,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    },
    {
      title: 'Osterley Avenue',
      bedrooms: 3,
      price: '$450,000',
      image: 'https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg',
    },
    {
      title: 'Chase Avenue',
      bedrooms: 3,
      price: '$500,000',
      image: 'https://images.pexels.com/photos/259646/pexels-photo-259646.jpeg',
    },
    {
      title: 'Kings Close',
      bedrooms: 2,
      price: '$450,000',
      image: 'https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg',
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center uppercase mb-10 sm:mb-12">
        Latest Rental Properties
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {rentals.map((rental, index) => (
          <div key={index} className="space-y-3 sm:space-y-4">
            <img
              src={rental.image}
              alt={rental.title}
              className="w-full h-64 sm:h-72 rounded-2xl object-cover cursor-pointer hover:opacity-90 transition"
              onClick={() => navigate('/rental')}
            />
            <div>
              <p className="font-semibold text-sm sm:text-base">{rental.bedrooms} bedrooms</p>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase mb-1 sm:mb-2">{rental.title}</h3>
              <p className="text-gray-700 text-xs sm:text-sm mb-1 sm:mb-2">
                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click
                “Edit Text” or double click me to add your own content and make changes to the font.
              </p>
              <p className="text-blue-600 font-bold text-lg sm:text-xl">{rental.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeRental;
