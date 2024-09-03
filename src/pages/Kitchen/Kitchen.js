import React from "react";
import Category from "../../components/Common/Category";

const kitchenBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone4.jpg",
  },
];

const title = "Kitchen Appliances";
const kitchen = [];

const Kitchen = () => {
  return (
    <>
      <Category title={title} banner={kitchenBanner} data={kitchen} />
    </>
  );
};

export default Kitchen;
