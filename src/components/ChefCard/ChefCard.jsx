import React, { useEffect, useState } from "react";
import { IoTime } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import {Tilt} from "react-tilt";
import { Link } from "react-router-dom";

const ChefCard = () => {
  const [chefsData, setChefsData] = useState(null);

  useEffect(() => {
    fetch("/chefData.json")
      .then((res) => res.json())
      .then((data) => {
        setChefsData(data);
      });
  }, []);

  if (chefsData === null) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="w-[65%] mx-auto">
      <h1 className="text-center text-7xl fira-sans-extrabold text-black my-14 leading-normal">
        Meet Our{" "}
        <p className="text-7xl fira-sans-extrabold text-[#f43d22] uppercase inline-flex underline">
          Chefs
        </p>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-8 mx-8 md:mx-0">
        {chefsData.map((chefData) => (
          <Tilt key={chefData.id} className="Tilt" options={{ max: 10 }}>
            <div className="card glass w-96">
              <figure>
                <img src={chefData.picture} alt={chefData.name} />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title">{chefData.name}</h2>
                <h6 className="text-lg md:text-xl font-semibold text-[#757575]">
                  {chefData.number_of_recipes} Recipes
                </h6>
                <div className="md:flex gap-6 mb-8 ">
                  <p className="flex items-center gap-2 text-[#757575] text-md font-semibold my-2">
                    <IoTime className="text-xl" />
                    {chefData.years_of_experience} Years of Experience
                  </p>
                  <p className="flex items-center gap-2 text-[#757575] text-md font-semibold ">
                    <AiFillLike className="text-xl" /> Likes: {chefData.likes}
                  </p>
                </div>
                <div className=" w-full justify-center">
                  <button className="btn w-full text-white bg-[#f43d22] hover:bg-[#ffd23e] hover:text-black hover:border-none">
                    View Recipes
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;
