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
  },
];

const title = "Smart Home Appliances";
const smartHome = [];

const SoundBar = () => {
  return (
    <>
      <Category title={title} banner={applianceBanner} data={smartHome} />
    </>
  );
};

export default SoundBar;
