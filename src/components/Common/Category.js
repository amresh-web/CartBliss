import React from "react";
import style from "../../assets/scss/Category.module.scss";

const Category = (props) => {
  return (
    <>
      <div class={["container"].join(" ")}>
        <div className={[style.category, "container"].join(" ")}>
          <h1 className={"fs-4 fw-bold text-center my-4"}>{props.title}</h1>
        </div>
      </div>
    </>
  );
};

export default Category;
