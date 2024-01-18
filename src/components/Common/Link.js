import { NavLink } from "react-router-dom";
import "../../assets/scss/Button.scss";

const Link = (props) => {
  return (
    <>
      <NavLink to={props.links} className="btn btn-dark rounded-pill px-5 py-2">
        {props.name}
      </NavLink>
    </>
  );
};
export default Link;
