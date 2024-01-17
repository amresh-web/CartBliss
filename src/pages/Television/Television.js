import React from "react";
import Category from "../../components/Common/Category";

const televisonBanner = [
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
  { key: 0, name: "Samsung", url: "images/television/tv-1.webp" },
  { key: 1, name: "Videcon", url: "images/television/tv-2.webp" },
  { key: 2, name: "LG", url: "images/television/tv-3.webp" },
  { key: 3, name: "MI", url: "images/television/tv-4.webp" },
  { key: 4, name: "Motorola", url: "images/television/tv-5.webp" },
  { key: 5, name: "Panasonic", url: "images/television/tv-6.webp" },
  { key: 6, name: "Sony", url: "images/television/tv-7.webp" },
  { key: 7, name: "MI", url: "images/television/tv-8.webp" },
];

const title = "Television";

const Television = () => {
  return (
    <>
       <Category title={title} banner={televisonBanner} data={television} />
    </>
  );
};

export default Television;
