import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className={[style["navbar-nav"], "nav"].join(" ")}>
        <NavLink to={"/"} className={[style["nav-link"], "nav-link"].join(" ")}>
          Home
        </NavLink>
        <NavLink
          to={"smartphones"}
          className={[style["nav-link"], "nav-link"].join(" ")}
        >
          Smart Phone
        </NavLink>
        <NavLink
          to={"televisions"}
          className={[style["nav-link"], "nav-link"].join(" ")}
        >
          Television
        </NavLink>
        <NavLink
          to={"home-appliances"}
          className={[style["nav-link"], "nav-link"].join(" ")}
        >
          Home Appliances
        </NavLink>
        <NavLink
          to={"smarthome"}
          className={[style["nav-link"], "nav-link"].join(" ")}
        >
          Smart Home
        </NavLink>
        <NavLink
          to={"laptops"}
          className={[style["nav-link"], "nav-link"].join(" ")}
        >
          Laptops
        </NavLink>
        <NavLink
          to={"kitchen"}
          className={[style["nav-link"], "nav-link"].join(" ")}
        >
          Kitchen Appliances
        </NavLink>
        <NavLink
          to={"cameras"}
          className={[style["nav-link"], "nav-link"].join(" ")}
        >
          Camera
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
