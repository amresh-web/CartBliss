import React from "react";
import Category from "../../components/Common/Category";

const laptopBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone4.jpg",
  }
];
const laptop = [
  { key: 0, name: "ASUS", url: "images/laptop/lp-1.jpg" },
  { key: 1, name: "HP", url: "images/laptop/lp-2.jpg" },
  { key: 2, name: "MAC", url: "images/laptop/lp-3.jfif" },
  { key: 3, name: "Windows", url: "images/laptop/lp-5.jfif" },
];

const title = "Laptop";
const Laptop = () => {
  return (
    <>
      <Category title={title} banner={laptopBanner} data={laptop} />
    </>
  );
};

export default Laptop;
