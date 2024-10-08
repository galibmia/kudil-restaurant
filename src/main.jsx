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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import NotFound from "./pages/NotFound.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
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
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
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
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
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
