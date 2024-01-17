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
const smarthome = [
  { key: 0, name: "JBL", url: "images/smart-homes/et-1.webp" },
  { key: 1, name: "F&D", url: "images/smart-homes/et-2.webp" },
  { key: 2, name: "CHAR BROIL", url: "images/smart-homes/et-3.webp" },
  { key: 3, name: "AMAZON", url: "images/smart-homes/et-4.webp" },
  { key: 4, name: "AMAZON", url: "images/smart-homes/et-5.webp" },
];

const title = "Smart Home Appliances";

const SoundBar = () => {
  return (
    <>
      <Category title={title} banner={applianceBanner} data={smarthome} />
    </>
  );
};

export default SoundBar;
