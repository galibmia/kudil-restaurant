import React from "react";
import HScroll from "../../components/HScroll";
import Banner from "../../components/Banner/Banner";
import ChefCard from "../../components/ChefCard/ChefCard";
import menuBg from "../../assets/images/menuBg.webp";
import MenuCards from "../../components/MenuCard/MenuCards";
import PromotionSection from "../../components/PromotionSection/PromotionSection";

const Home = () => {
  return (
    <div className="my-14">
      <Banner></Banner>
      <PromotionSection></PromotionSection>
      <div
        className="my-24 relative"
        style={{
          backgroundImage: `url(${menuBg})`,
          height: "800px",
          backgroundSize: "20% auto",
          backgroundPosition: "center center",
          backgroundRepeat: "repeat",
        }}
      >
        <MenuCards></MenuCards>
      </div>
      <HScroll></HScroll>
      <div className="my-24">
        <ChefCard></ChefCard>
      </div>
    </div>
  );
};

export default Home;
