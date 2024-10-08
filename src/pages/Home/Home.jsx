import React from "react";
import HScroll from "../../components/HScroll";
import Banner from "../../components/Banner/Banner";
import ChefCard from "../../components/ChefCard/ChefCard";

const Home = () => {
  return (
    <div className="my-14">
      <Banner></Banner>
      <div className="mt-24">
        <ChefCard></ChefCard>
      </div>
      <HScroll></HScroll>
    </div>
  );
};

export default Home;
