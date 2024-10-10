import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layouts/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import "animate.css";
import OurChefs from "./pages/OurChefs.jsx";
import ChefsMenu from "./pages/ChefsMenu/ChefsMenu.jsx";
import Recipe from "./pages/Recipe/Recipe.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import TermsCondition from "./pages/TermsCondition/TermsCondition.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Profile from "./pages/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chefs",
        element: <OurChefs></OurChefs>,
      },
      {
        path: "menus/:chefId",
        element: <ChefsMenu></ChefsMenu>,
      },
      {
        path: "/recipes/:id",
        element: <Recipe></Recipe>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsCondition></TermsCondition>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
