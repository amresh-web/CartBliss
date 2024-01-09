import React from "react";
import "../src/assets/scss/custom.scss";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RouteLayout from "./Route";
import Error from "./Error";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Details = React.lazy(() => import("./components/Common/Details"));
const SmartPhone = React.lazy(() => import("./pages/smart-phone/SmartPhones"));
const Kitchen = React.lazy(() => import("./pages/Kitchen/Kitchen"));
const Television = React.lazy(() => import("./pages/Television/Television"));
const HomeAppliances = React.lazy(() =>
  import("./pages/HomeAppliances/HomeAppliances")
);
const SoundBar = React.lazy(() => import("./pages/Soundbar/Soundbar"));
const Laptop = React.lazy(() => import("./pages/Laptop/Laptop"));
const Camera = React.lazy(() => import("./pages/Camera/Camera"));



function App() {
  const router = createBrowserRouter([
    {
      element: <RouteLayout />,
      errorElement: <Error />,
      children: [
        {index: true, element: <Home />},
        {path: 'smartphones', element: <SmartPhone />},
        {path: 'televisions', element: <Television />},
        {path: 'details', element:<Details />},
        {path: 'kitchen', element:<Kitchen />},
        {path: 'home-appliances', element:<HomeAppliances />},
        {path: 'soundbars', element:<SoundBar />},
        {path: 'laptops', element:<Laptop />},
        {path: 'cameras', element:<Camera />},
      ]
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
