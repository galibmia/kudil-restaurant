import React from "react";
import chefImg from "../../assets/images/chef_with_food.webp";
import menuBg from "../../assets/images/menuBg_2.webp";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PromotionSection = () => {
  return (
    <div className="w-[80%] mx-auto my-24">
      <div className="grid grid-cols-2 gap-20">
        <div
          className="w-full relative"
          style={{
            backgroundImage: `url(${chefImg})`,
            height: "600px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute -bottom-12 -right-12 bg-red-700">
            <div
              className="w-[310px] bg-opacity-50"
              style={{
                backgroundImage: `url(${menuBg})`,
                height: "300px",
                backgroundSize: "50% auto",
                backgroundPosition: "center center",
                backgroundRepeat: "repeat",
              }}
            >
              <div className=" absolute bg-red-700 w-full h-full bg-opacity-85 p-7">
                <div className="border border-yellow-300 h-full p-1">
                  <div className="border border-yellow-300 h-full p-4 text-white text-center">
                    <h1 className="text-5xl font-extrabold text-center">4.8</h1>
                    <h6 className="font-bold text-2xl mt-4">Client Ratings</h6>
                    <p className="text-yellow-300 flex items-center justify-center mt-2 gap-1">
                      <FaStar className="text-xl" />
                      <FaStar className="text-xl" />
                      <FaStar className="text-xl" />
                      <FaStar className="text-xl" />
                      <FaStar className="text-xl" />
                    </p>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-14 px-8">
          <p className="text-red-600 font-bold">关于我们</p>
          <h1 className="text-5xl font-bold my-4">
            Bringing the Rich Flavors of China to Your Table
          </h1>
          <p className="my-8">
            Vestibulum molestie vestibulum nulla libero euismod id ac luctus.
            Cras porttitor tortor conubia himenaeos finibus lacus ad nisi.
            Ullamcorper tempus mus risus libero blandit lorem. Senectus per ex
            litora dolor massa libero ullamcorper porta.
          </p>
          <ul class="space-y-3">
            <li class="relative pl-8 my-4">
              <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-2 border-red-500 bg-white rounded-full"></span>
              Scelerisque sit natoque gravida elementum
            </li>
            <li class="relative pl-8  my-4">
              <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-2 border-red-500 bg-white rounded-full"></span>
              Orci tellus proin amet aenean justo habitant
            </li>
            <li class="relative pl-8  my-4">
              <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-2 border-red-500 bg-white rounded-full"></span>
              Aenean senectus inceptos rhoncus varius
            </li>
            <li class="relative pl-8  my-4">
              <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 border-2 border-red-500 bg-white rounded-full"></span>
              In pretium laoreet dui aenean mollis tellus
            </li>
          </ul>
          <div className="mt-16">
            <Link className="px-10 py-6 bg-red-600 text-white transform transition-all duration-300 hover:px-9 hover:py-5 hover:ml-1  hover:bg-yellow-300 hover:text-black">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
