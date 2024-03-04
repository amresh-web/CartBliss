import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/signin`,
          formData
        );
        navigate("/");
        console.log(response.data);
      } catch (e) {
        console.error(errors);
      }
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
