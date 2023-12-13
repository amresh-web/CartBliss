import React from "react";
import "../src/assets/scss/custom.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./Route";
import Error from "./Error";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Details = React.lazy(() => import("./components/Common/Details"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "details", element: <Details /> },
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
