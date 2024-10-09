import { Link } from 'react-router-dom';
import React from 'react';

const MenuCard = ({ title, imageSrc, description, link }) => {
  return (
    <div
      className="relative h-[500px] w-full group"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute w-full h-[500px] bg-black bg-opacity-40 p-8">
        <div className="border border-yellow-200 h-full p-1">
          <div className="border border-yellow-200 h-full p-4 relative">
            <div className='absolute bottom-1 group-hover:opacity-0 transform transition-all duration-300 group-hover:-translate-y-5'>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            </div>
            {/* Hidden content: Description and Link */}
            <div className="p-2 absolute bottom-1 left-0 w-full transform transition-all duration-1000 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
              <p className="text-white">{description}</p>
              <Link
                to={link}
                className="text-red-600 font-bold hover:text-yellow-300"
              >
                View Menus &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
