import React from "react";
import style from "../../assets/scss/Category.module.scss";
import Banner from "./Banner";
import Products from "./Products";

const mobileData = [
  { key: 0, name: "Samsung", url: "/images/mobile/mb-5.webp" },
  { key: 1, name: "LAVA", url: "/images/mobile/mb-1.webp" },
  { key: 2, name: "LG", url: "/images/mobile/mb-3.webp" },
  { key: 3, name: "MI", url: "/images/mobile/mb-8.webp" },
];

const Category = (props) => {
  return (
    <>
      <div class={["container-fluid g-0"].join(" ")}>
        <Banner banner={props.banner} />
        <div className={[style.category].join(" ")}>
          <h1 className={"fs-4 fw-bold text-center my-4"}>{props.title}</h1>
          <Products mobileData={mobileData} />
        </div>
      </div>
    </>
  );
};

export default Category;
