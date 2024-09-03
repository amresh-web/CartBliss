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
  },
];

const title = "Laptop";
const laptop = [];

const Laptop = () => {
  return (
    <>
      <Category title={title} banner={laptopBanner} data={laptop} />
    </>
  );
};

export default Laptop;
