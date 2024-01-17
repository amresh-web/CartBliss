import React from "react";
import Category from "../../components/Common/Category";

const applianceBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone4.jpg",
  }
];
const television = [
  { key: 0, name: "Samsung", url: "images/appliances/ha-1.webp" },
  { key: 1, name: "Videcon", url: "images/appliances/ha-2.webp" },
  { key: 2, name: "LG", url: "images/appliances/ha-3.webp" },
  { key: 3, name: "MI", url: "images/appliances/ha-4.webp" },
  { key: 4, name: "Motorola", url: "images/appliances/ha-5.webp" },
  { key: 5, name: "Panasonic", url: "images/appliances/ha-6.webp" },
  { key: 6, name: "Sony", url: "images/appliances/ha-7.webp" },
  { key: 7, name: "MI", url: "images/appliances/ha-8.webp" },
];

const title = "Home Appliances";

const HomeAppliances = () => {
  return (
    <>
     <Category title={title} banner={applianceBanner} data={television} />
    </>
  );
};

export default HomeAppliances;
