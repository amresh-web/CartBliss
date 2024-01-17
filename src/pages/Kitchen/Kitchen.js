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
  }
];
const kitchen = [
  { key: 0, name: "Appliance 1", url: "images/kitchen/ka-1.jfif" },
  { key: 1, name: "Appliance 2", url: "images/kitchen/ka-2.jfif" },
  { key: 2, name: "Appliance 3", url: "images/kitchen/ka-3.jfif" },
  { key: 3, name: "Appliance 4", url: "images/kitchen/ka-4.jfif" },
  { key: 4, name: "Appliance 5", url: "images/kitchen/ka-5.jfif" },
  { key: 5, name: "Appliance 6", url: "images/kitchen/ka-6.jfif" },
];

const title = "Kitchen Appliances";

const Kitchen = () => {
  return (
    <>
      <Category title={title} banner={kitchenBanner} data={kitchen} />
    </>
  );
};

export default Kitchen;
