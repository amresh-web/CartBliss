import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/scss/Button.scss";

const Link = ({name, links, state}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(links, { state });
  };
  
  return (
    <>
      <NavLink to={links} onClick={handleClick} className="btn btn-dark rounded-pill px-5 py-2">
        {name}
      </NavLink>
    </>
  );
};
export default Link;
