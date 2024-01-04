import React, { Suspense } from "react";
import "../src/assets/scss/custom.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

const Router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <RouteLayout />,
  //   errorElement: <Error />,
  //   children: [

  //   ],
  // },

  { path: "/", element: <Home /> },
  { path: "/details", element: <Details /> },
  { path: "/smartphones", element: <SmartPhone /> },
  { path: "/kitchen", element: <Kitchen /> },
  { path: "/televisions", element: <Television /> },
  { path: "/home-appliances", element: <HomeAppliances /> },
  { path: "/soundbars", element: <SoundBar /> },
  { path: "/laptops", element: <Laptop /> },
  { path: "/cameras", element: <Camera /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
