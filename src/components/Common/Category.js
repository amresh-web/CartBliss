import React from "react";
import { useLocation } from "react-router-dom";
import style from "../../assets/scss/Category.module.scss";
import Banner from "./Banner";
import Products from "./Products";
import Link from "./Link";

const Category = (props) => {
  const location = useLocation();
  const catLinks = `/product${location.pathname}`;
  return (
    <>
      <div className={["container-fluid g-0"].join(" ")}>
        <Banner banner={props.banner} />
        <div className={[style.category].join(" ")}>
          <h1 className={"fs-4 fw-bold text-center my-4"}>{props.title}</h1>
          <Link name="View All" links={catLinks} />
          <Products data={props.data} />
        </div>
      </div>
    </>
  );
};

export default Category;
