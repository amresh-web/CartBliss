import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import style from "../../assets/scss/Account.module.scss";

export default function Account() {
  const [desc, setDesc] = useState();
  const [lgn, setLgn] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signup") {
      setDesc("You have an Account click here to");
      setLgn(
        <NavLink
          className={"fs-4 text-white fw-bold text-decoration-none"}
          to="/login"
        >
          Login
        </NavLink>
      );
    }
    if (location.pathname === "/login") {
      setDesc("If you don't have an Account click here to");
      setLgn(
        <NavLink
          className={"fs-4 text-white fw-bold text-decoration-none"}
          to="/signup"
        >
          Sign Up
        </NavLink>
      );
    }
  }, [location]);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className={[
            style.wrapper,
            "d-flex justify-content-center align-items-center min-vh-100 py-4",
          ].join(" ")}
        >
          <div className={"container"}>
            <div className="row g-0 justify-content-center">
              <div className="col-12 col-lg-6">
                <Outlet />
              </div>
              <div className="col-12 col-lg-3">
                <div className={"position-relative  h-100"}>
                  <div
                    className={[style.account, "w-100 rounded-end"].join(" ")}
                  >
                    <div
                      className={[
                        "d-flex flex-column align-items-center h-100 px-3 py-5",
                      ]}
                    >
                      <div
                        className={[style.logo, "ps-3 mb-5 text-center"].join(
                          " "
                        )}
                      >
                        Cart <span>Bliss</span>
                      </div>
                      <div className={"w-100 text-center"}>
                        <p className="fs-6 fw-normal text-white">
                          {desc} {lgn}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
}
