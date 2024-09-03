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
  },
];

const title = "Television";
const television = [];

const Television = () => {
  return (
    <>
      <Category title={title} banner={televisonBanner} data={television} />
    </>
  );
};

export default Television;
