import React from "react";
import bgImg from "../../assets/images/banner-bg.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="relative mb-14"
      style={{
        backgroundImage: `url(${bgImg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bg-black w-full h-[100vh] bg-opacity-60">
        <div className=" w-[55%] mx-auto mt-44">
          <h1 className="text-center text-7xl fira-sans-extrabold text-white my-14 leading-normal">
            Discover Exquisite Chinese Dishes at{" "}
            <p className="animate__animated animate__pulse animate__infinite text-7xl fira-sans-extrabold text-[#f43d22] uppercase inline-flex">
              Kudil
            </p>
          </h1>
          <p className="text-white w-[72%] mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-center justify-center mt-8">
            <button className="border border-white text-black font-semibold bg-white px-14 py-4 hover:bg-transparent hover:text-white me-8">
              Reservation
            </button>
            <Link to={"/chefs"} className="border border-white hover:text-black font-semibold hover:bg-white px-14 py-4 bg-transparent text-white ">
              View Chefs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
