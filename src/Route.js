import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Suspense } from "react"

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default RouteLayout;
