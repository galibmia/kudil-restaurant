import React, { useEffect, useState } from "react";
import menuBg from "../../assets/images/menuBg_2.webp";
import { FaStar } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [chefData, setChefData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/recipe.json")
      .then((res) => res.json())
      .then((recipes) => {
        const chefsMenu = recipes.find((recipe) => recipe.id == id);
        setRecipe(chefsMenu);
      });
  }, []);

  useEffect(() => {
    fetch("/chefData.json")
      .then((res) => res.json())
      .then((chefs) => {
        console.log(chefs)
        setChefData(chefs.find((chef) => chef.id == recipe.chef_id));
      });
  }, [recipe]);

  if (recipe === null || chefData === null) {
    return <h1>Loading</h1>;
  }
  

  return (
    <div className="w-[80%] mx-auto my-32">
      <div className="grid grid-cols-2 gap-20">
        <div
          className="w-full relative"
          style={{
            backgroundImage: `url(${recipe.image})`,
            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute -bottom-12 -right-12 bg-red-700">
            <div
              className="w-[270px] bg-opacity-50"
              style={{
                backgroundImage: `url(${menuBg})`,
                height: "250px",
                backgroundSize: "50% auto",
                backgroundPosition: "center center",
                backgroundRepeat: "repeat",
              }}
            >
              <div className=" absolute bg-red-700 w-full h-full bg-opacity-85 p-7">
                <div className="border border-yellow-300 h-full p-1">
                  <div className="border border-yellow-300 h-full p-4 text-white text-center">
                    <h1 className="text-5xl font-extrabold text-center">{recipe.rating}</h1>
                    <h6 className="font-bold text-2xl mt-4">Client Ratings</h6>
                    <p className="text-yellow-300 flex items-center justify-center mt-2 gap-1">
                      <FaStar className="text-xl" />
                      <FaStar className="text-xl" />
                      <FaStar className="text-xl" />
                      <FaStar className="text-xl" />
                      <FaStar className="text-xl" />
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
          {recipe.recipe_name}
          </h1>
          <p className="font-semibold text-lg mt-2">By: <span>{chefData.name}</span></p>
          <p className="mt-8 mb-2 font-bold text-lg">Cooking Method:</p>
          <p className="mb-8 ml-2">
            {recipe.cooking_method}
          </p>
          <p className="my-2 font-bold text-lg">Ingredients:</p>
          <ul class="space-y-3 grid grid-cols-2 gap-2">
            {
                recipe.ingredients.map(ingredient => <li class="flex gap-2 items-center ml-2 capitalize">
                    <span class=" w-3 h-3 border-2 border-red-500 bg-white rounded-full"></span>
                    {ingredient}
                  </li>)
            }
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
