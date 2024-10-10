import React from "react";
import image from "../../assets/images/loading.jpg";

const Loading = () => {
  return (
    <div className="w-full mt-44">
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt="" />
        <h6 className="text-5xl cinzel-font">Welcome to Kudil Restaurant</h6>
      </div>
    </div>
  );
};

export default Loading;
