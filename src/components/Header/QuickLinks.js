import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Header.module.scss";
import { authAction } from "../../store/store";

const QuickLinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const logout = async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/user/logout`,
      null,
      { withCredentials: true }
    );
    if (res.status === 200) {
      return res;
    } else {
      return new Error("Unable to Logout.");
    }
  };

  const handleLogout = () => {
    logout().then(() => dispatch(authAction.logout));
    navigate("/");
  };
  return (
    <>
      <div
        className={[style.quicklink, "d-flex justify-content-end ps-4"].join(
          " "
        )}
      >
        <div className={"text-center px-3"}>
          <i className="bi bi-heart"></i>
          <h5 className={"mb-0"}>Wish List</h5>
        </div>
        <div className={"text-center px-3"}>
          <i className="bi bi-cart"></i>
          <h5 className={"mb-0"}>Cart</h5>
        </div>
        {!isLoggedIn && (
          <div className={"text-center ps-3"}>
            <i className="bi bi-person"></i>
            <h5 className={"mb-0"}>
              <NavLink className={"text-decoration-none"} to="/login">
                Sign In
              </NavLink>
            </h5>
          </div>
        )}
        {isLoggedIn && (
          <div className={"text-center ps-3"}>
            <i className="bi bi-person"></i>
            <h5 className={"mb-0"}>
              <NavLink
                onClick={handleLogout}
                className={"text-decoration-none"}
              >
                Logout
              </NavLink>
            </h5>
          </div>
        )}
      </div>
    </>
  );
};

export default QuickLinks;
