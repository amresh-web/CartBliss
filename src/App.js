import React from "react";
import "../src/assets/scss/custom.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./Route";
import Error from "./Error";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Details = React.lazy(() => import("./components/Common/Details"));
// const SmartPhones = React.lazy(() =>
//   import("./pages/smart-phones/SmartPhones")
// );
const Kitchen = React.lazy(() => import("./pages/Kitchen/Kitchen"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "details", element: <Details /> },
      //{ path: "smartphones", element: <SmartPhones /> },
      { path: "kitchen", element: <Kitchen /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
