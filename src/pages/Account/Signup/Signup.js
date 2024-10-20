import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    phone: "",
    email: "",
    password: "",
    cnfpassword: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validiateError = {};
    if (!formData.fullname.trim()) {
      validiateError.fullname = "Full name is required";
    }
    if (!formData.username.trim()) {
      validiateError.username = "User name is required";
    }
    if (!formData.phone.trim()) {
      validiateError.phone = "Phone number is required";
    } else if (formData.phone.match(/^\d{1,10}$/)) {
      validiateError.phone = "Invalid phone number";
    }
    if (!formData.email.trim()) {
      validiateError.email = "Email is required";
    }

    if (!formData.password.trim()) {
      validiateError.password = "Password is required";
    }
    if (!formData.cnfpassword) {
      validiateError.cnfpassword = "Confirm password is required";
    }
    if (formData.password !== formData.cnfpassword) {
      validiateError.cnfpassword = "Confirm password not matched";
    }
    if (!formData.address.trim()) {
      validiateError.address = "Address is required";
    }
    if (!formData.city.trim()) {
      validiateError.city = "City name is required";
    }
    if (!formData.state.trim()) {
      validiateError.state = "State name is required";
    }
    if (!formData.zip.trim()) {
      validiateError.zip = "Zip is required";
    }

    setErrors(validiateError);

    if (Object.keys(validiateError).length === 0) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/adduser`,
          formData
        );
        if (response.status === 200) {
          toast.success(response.message);
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={"row"}>
        <div className={"col-12"}>
          <div className={"bg-white rounded-start p-5"}>
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="fullname"
                  onChange={handleInputChange}
                />
                {errors.fullname && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.fullname}
                  </p>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="uname" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="uname"
                  name="username"
                  onChange={handleInputChange}
                />
                {errors.username && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.username}
                  </p>
                )}
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone No
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="col-md-6">
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
              <div className="col-md-6">
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
              <div className="col-md-6">
                <label htmlFor="cpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  name="cnfpassword"
                  onChange={handleInputChange}
                />
                {errors.cnfpassword && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.cnfpassword}
                  </p>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  name="address"
                  onChange={handleInputChange}
                />
                {errors.address && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.address}
                  </p>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  name="city"
                  onChange={handleInputChange}
                />
                {errors.city && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.city}
                  </p>
                )}
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputState"
                  name="state"
                  onChange={handleInputChange}
                />
                {errors.state && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.state}
                  </p>
                )}
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  name="zip"
                  onChange={handleInputChange}
                />
                {errors.zip && (
                  <p className={"fs-6 fw-normal text-danger m-0"}>
                    {errors.zip}
                  </p>
                )}
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
