import React from "react";
import bgImg from "../../assets/images/banner-bg.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "animate.css";

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
        <motion.div
          className="w-[55%] mx-auto mt-44"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-center text-7xl fira-sans-extrabold text-white my-14 leading-normal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover Exquisite Chinese Dishes at{" "}
            <p className="animate__animated animate__pulse animate__infinite text-7xl fira-sans-extrabold text-[#f43d22] uppercase inline-flex">
              Kudil
            </p>
          </motion.h1>

          <motion.p
            className="text-white w-[72%] mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>

          <div className="flex items-center justify-center mt-8">
            <motion.button
              className="border border-white text-black font-semibold bg-white px-14 py-4 hover:bg-transparent hover:text-white me-8"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Reservation
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={"/chefs"}
                className="border border-white hover:text-black font-semibold hover:bg-white px-14 py-4 bg-transparent text-white"
              >
                View Chefs
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
