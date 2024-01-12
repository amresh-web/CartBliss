import React from "react";
import style from "../../assets/scss/Category.module.scss";
import Banner from "./Banner";

const Category = (props) => {
  return (
    <>
   
      <div class={["container-fluid g-0"].join(" ")}>
        <Banner banner={props.banner} />
        <div className={[style.category].join(" ")}>
          <h1 className={"fs-4 fw-bold text-center my-4"}>{props.title}</h1>
        </div>
      </div>
    </>
  );
};

export default Category;
