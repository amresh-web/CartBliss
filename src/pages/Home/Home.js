import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import Categories from "./Categories";
import TopMobilePhones from "./TopMobilePhones";
import TopTelevision from "./TopTelevision";
import TopHomeAppliances from "./TopHomeAppliances";
import ServiceBanner from "./ServiceBanner";

const Home = () => {
  return (
    <>
      <section>
        <Banner />
        <Card />
        <Categories />
        <TopMobilePhones />
        <TopTelevision />
        <TopHomeAppliances />
        <ServiceBanner />
      </section>
    </>
  );
};

export default Home;
