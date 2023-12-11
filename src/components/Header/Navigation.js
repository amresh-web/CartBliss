import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className={[style["navbar-nav"], "nav"].join(" ")}>
        <NavLink to={"/"} className={[style["nav-link"], "nav-link"].join(" ")}>
          Home
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
