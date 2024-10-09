import React from "react";
import MenuCard from "./MenuCard";
import { Box, Card, CardMedia, Typography } from "@mui/material";

const menuItems = [
  {
    title: "Appetizers",
    imageSrc:
      "https://i.ibb.co/MkkBhhR/fresh-spring-rolls-with-vegetables-and-seafood-2023-11-27-05-08-00-utc-result.webp",
    description: "A variety of delicious starters to begin your meal.",
    link: "#",
  },
  {
    title: "Main Dish",
    imageSrc:
      "https://i.ibb.co/2yBxtrW/chinese-food-set-asian-style-food-concept-composi-2023-11-27-05-32-29-utc-result.webp",
    description: "Savor our hearty and flavorful main courses.",
    link: "#",
  },
  {
    title: "Dessert",
    imageSrc:
      "https://i.ibb.co/VjwYSQj/top-view-little-yummy-cake-with-lemon-slices-on-da-2023-11-27-05-11-06-utc-result.webp",
    description: "Indulge in sweet and delightful treats.",
    link: "#",
  },
  {
    title: "Drinks",
    imageSrc:
      "https://i.ibb.co/fQBPsLb/variety-of-matcha-tea-2023-11-27-05-06-39-utc-result.webp",
    description: "Refresh with a selection of traditional drinks.",
    link: "#",
  },
];

const MenuCards = () => {
  return (
    <div className="absolute w-full h-[800px] py-24  bg-[#f5f4f4] bg-opacity-90">
      <p className="text-red-700 text-center font-bold my-2">我们的菜单</p>
      <h1 className="text-4xl text-center font-bold mb-8">Savor the Diversity of Authentic Chinese Cuisine</h1>
      <Box className="flex justify-center gap-4 w-[75%] mx-auto">
        {menuItems.map((item) => (
          <MenuCard
            key={item.title}
            title={item.title}
            imageSrc={item.imageSrc}
            description={item.description}
            link={item.link}
          ></MenuCard>
        ))}
      </Box>
    </div>
  );
};

export default MenuCards;
