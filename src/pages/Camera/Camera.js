import React from "react";
import Category from "../../components/Common/Category";
import datas from "../../assets/data.json";

const cameraBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone4.jpg",
  },
];
const camera = [];
const title = "Camera";

const Camera = () => {
  return (
    <>
      <Category title={title} banner={cameraBanner} data={camera} />
    </>
  );
};

export default Camera;
