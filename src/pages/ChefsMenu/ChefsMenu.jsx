import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Link, useParams } from "react-router-dom";

const ChefsMenu = () => {
  const [menus, setMenus] = useState(null);
  const { chefId } = useParams();

  useEffect(() => {
    fetch("/recipe.json")
      .then((res) => res.json())
      .then((recipes) => {
        const chefsMenu = recipes.filter((recipe) => recipe.chef_id == chefId);
        
        setMenus(chefsMenu);
      });
  }, []);

  const [chefData, setChefData] = useState(null);

  useEffect(() => {
    fetch("/chefData.json")
      .then((res) => res.json())
      .then((chefs) => {
        setChefData(chefs.find(chef => chef.id == chefId));
      });
  }, []);


  if (menus === null) {
    return <h1>Loading</h1>;
  }
  if (chefData === null) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="w-4/5 mx-auto my-32">
        <h1 className="text-4xl font-bold text-center my-8">{chefData.name}'s All Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-8 mx-8 md:mx-0">
        {menus.map((menu) => (
            <div className="card relative glass lg:w-80 xl:w-80 2xl:w-96">
              <LazyLoad className="h-[450px] w-full">
                <img src={menu.image} alt={menu.recipe_name} className="h-full w-full" />
              </LazyLoad>
              <div className="card-body p-4">
                <h2 className="card-title">{menu.recipe_name}</h2>
                <div className="md:flex gap-6 mb-10 ">
                 
                  <p className="flex items-center gap-2 text-[#757575] text-md font-semibold ">
                    Rating: {menu.rating}
                  </p>
                </div>
                <div className=" absolute left-0 w-full bottom-0">
                  <Link to={`/recipes/${menu.id}`} className="btn w-full text-white bg-[#f43d22] hover:bg-[#ffd23e] hover:text-black hover:border-none">
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ChefsMenu;
