import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col justify-center items-center text-center">
      <div className="bg-red-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-red-700 mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Oops! This page is lost in the kitchen.
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          It seems the dish you ordered isn't on the menu! Perhaps you'd like to go back and try again?
        </p>

        <img
          src="https://i.ibb.co/mFR8HzL/6.jpg" // Replace with an appropriate Chinese food image URL
          alt="Chinese Food Illustration"
          className="w-72 h-auto mx-auto rounded-lg"
        />

        <div className="mt-8">
          <Link
            to="/"
            className="bg-red-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all ease-in-out duration-200"
          >
            <FaUtensils className="inline-block mr-2" />
            Return to Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
