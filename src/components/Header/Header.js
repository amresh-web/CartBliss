import React from "react";
import style from "./Header.module.scss";
import Search from "./Search";
import QuickLinks from "./QuickLinks";
import Navigation from "./Navigation";

const Home = () => {

  return (
    <>
      <header>
        <div className={["row"].join(" ")}>
          <div className={["col-3"].join(" ")}>
            <div className={[style.logo].join(" ")}>
              Cart <span>Bliss</span>
            </div>
          </div>
          <div className={["col-5"].join(" ")}>
            <Search />
          </div>
          <div className={["col-4"].join(" ")}>
            <QuickLinks />
          </div>
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Home;
