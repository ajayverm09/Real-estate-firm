import React from 'react';

const Testimonials = () => {
  return (
    <div
      className="bg-cover bg-center py-16 px-4 sm:px-6 lg:px-12"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/f61af8_8d4ef4b5b5314f8abeaad987dd13e1c4.jpg/v1/fill/w_1883,h_1005,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_8d4ef4b5b5314f8abeaad987dd13e1c4.jpg')",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#2e3d69] text-center font-bold mb-10 sm:mb-12">
        What Our Clients Think
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'NINA & TOM STONE', text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you." },
          { name: 'ANGELA PETERSON', text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you." },
          { name: 'PAUL & SUSAN TAYLOR', text: "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you." },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/80 p-6 sm:p-8 rounded-lg shadow-lg text-center flex flex-col justify-between h-full"
          >
            <p className="italic text-gray-700 mb-4 text-sm sm:text-base">{testimonial.text}</p>
            <h3 className="font-semibold text-blue-600 text-sm sm:text-base">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
