import React, { Suspense } from "react";
import Category from "../../components/Common/Category";

const cameraBanner = [
  {
    key: 0,
    url: "banner/smartphone1.jpg",
  },
  {
    key: 1,
    url: "banner/smartphone4.jpg",
  }
];
const camera = [
  { key: 0, name: "CANON", url: "images/kitchen/ka-1.jpg" },
  { key: 1, name: "SONY", url: "images/kitchen/ka-2.jfif" },
 ];

const title = "Camera";

const Camera = () => {
  return (
    <>
     <Category title={title} banner={cameraBanner} data={camera} />
    </>
  );
};

export default Camera;
