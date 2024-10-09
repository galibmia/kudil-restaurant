import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layouts/Main.jsx';
import Home from "./pages/Home/Home.jsx";
import 'animate.css';
import OurChefs from './pages/OurChefs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [ 
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'chefs',
        element: <OurChefs></OurChefs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
