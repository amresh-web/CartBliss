import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/authSlice";

const Login = ({ setUser }) => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loginSender = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/signin`,
        { email: formData.email, password: formData.password }
      );
      if (res.status === 200) {
        setUser(res.data.data._id);
        const userData = {
          email: res.data.data.email,
          password: res.data.data.password,
          token: res.data.token,
        };
        dispatch(login(userData));
        navigate("/addproduct");
      } else {
        console.log("Login failed. Status code:", res.status);
      }
    } catch (err) {
      console.error("An error occurred during login:", err.message);
      setErrors("An error occurred during login. Please try again later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validiateError = {};
    if (!formData.email.trim()) {
      validiateError.email = "Enter email address";
    }
    if (!formData.password.trim()) {
      validiateError.password = "Enter password";
    }
    setErrors(validiateError);
    if (Object.keys(validiateError).length === 0) {
      loginSender();
    }
  };

  return (
    <>
      <div className={"row h-100"}>
        <div className={"col-12"}>
          <div className={"bg-white h-100 rounded-start p-5"}>
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="col-md-12">
                <label htmlFor="pass" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                {/* {errors && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors}
                  </p>
                )} */}
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
