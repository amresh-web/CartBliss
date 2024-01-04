import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={["row"].join(" ")}>
          <div className={["col-4"].join(" ")}>
            <div className={[styles.logo].join(" ")}>
              Cart <span>Bliss</span>
            </div>
          </div>
          <div className={["col-4"].join(" ")}>
            <h4 className="fs-4 fw-bold text-white text-uppercase">Shop</h4>
            <nav
              className={[styles["navbar-nav"], "nav flex-column"].join(" ")}
            >
              <li>
                <NavLink
                  to={"/"}
                  className={[styles["nav-link"], "nav-link"].join(" ")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={[styles["nav-link"], "nav-link"].join(" ")}
                >
                  Computer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/"}
                  className={[styles["nav-link"], "nav-link"].join(" ")}
                >
                  Smart Phone
                </NavLink>
              </li>
            </nav>
          </div>
          <div className={["col-4"].join(" ")}>
            <h4 className="fs-4 fw-bold text-white text-uppercase mb-4">
              Subscribe our newsletter
            </h4>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
