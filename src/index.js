import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Services from "./pages/Services.js";
import Project from "./pages/Project.js";
import AllProjects from "./components/AllProjects.js";
import Websites from "./components/Websites.js";
import MobileApp from "./components/MobileApp.js";
import Designs from "./components/Designs.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/allprojects",
    element: <AllProjects/>
  },
  {
    path: "/websites",
    element: <Websites/>
  },
  {
    path: "/allprojects",
    element: <AllProjects/>
  },
  {
    path: "/mobileapp",
    element: <MobileApp/>
  },
  {
    path: "/designs",
    element: <Designs/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



