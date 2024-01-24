import React from "react";
import style from "../../assets/scss/Category.module.scss";
import Banner from "./Banner";
import Products from "./Products";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const Category = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const catLinks = `/product${location.pathname}`;

  const handleClick = () => {
    const dataToSend = props.data;
    navigate(catLinks, { state: dataToSend });
  };

  return (
    <>
      <div className={["container-fluid g-0"].join(" ")}>
        <Banner banner={props.banner} />
        <div className={[style.category].join(" ")}>
          <h1 className={"fs-4 fw-bold text-center my-4"}>{props.title}</h1>
          <Button name="View All" handleClick={handleClick} />
          <Products data={props.data} />
        </div>
      </div>
    </>
  );
};

export default Category;
