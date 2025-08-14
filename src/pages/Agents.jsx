import React from 'react';

const Agent = () => {
  const agents = [
    {
      name: 'Tamara Turner',
      role: 'Sales',
      email: 'info@mysite.com',
      phone: '123-456-7890',
      image:
        'https://static.wixstatic.com/media/f2170762b38345b89d71d78c95fb5d3f.jpg/v1/fill/w_564,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f2170762b38345b89d71d78c95fb5d3f.jpg',
    },
    {
      name: 'Ian Jones',
      role: 'Sales',
      email: 'info@mysite.com',
      phone: '123-456-7890',
      image:
        'https://static.wixstatic.com/media/f8680840aa88468e813414f1c0083404.jpg/v1/fill/w_564,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f8680840aa88468e813414f1c0083404.jpg',
    },
    {
      name: 'Rachel Stone',
      role: 'Rentals',
      email: 'info@mysite.com',
      phone: '123-456-7890',
      image:
        'https://static.wixstatic.com/media/f61af8_35a2f93a8d2149da9da8c90d8de252b6.jpg/v1/fill/w_564,h_548,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_35a2f93a8d2149da9da8c90d8de252b6.jpg',
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-black/50 py-12 sm:py-16 px-4 sm:px-6 md:px-12"
      style={{
        backgroundImage:
          "url('https://static.wixstatic.com/media/f61af8_8d4ef4b5b5314f8abeaad987dd13e1c4.jpg/v1/fill/w_1883,h_1005,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f61af8_8d4ef4b5b5314f8abeaad987dd13e1c4.jpg')",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#0B132B] text-center font-bold mb-6">
        Our Agents
      </h1>

      <p className="text-[#1d3682] text-center max-w-3xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base md:text-lg leading-relaxed">
        At the heart of our success is a team of dedicated professionals committed to helping you
        find the perfect property. Our agents bring years of industry experience, deep market
        knowledge, and a passion for real estate. Whether you're buying, selling, or renting, they
        take the time to understand your needs and guide you every step of the way. With a
        client-first mindset and an unwavering commitment to excellence, our team ensures your
        journey is smooth, informed, and rewarding.
      </p>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-72 lg:w-80"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl md:text-lg font-bold uppercase">{agent.name}</h2>
              <hr className="my-2" />
              <p className="text-blue-500 font-semibold mb-2 sm:mb-4">{agent.role}</p>
              <p className="text-gray-700 text-sm sm:text-base mb-1">Email: {agent.email}</p>
              <p className="text-gray-700 text-sm sm:text-base">Tel: {agent.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agent;
