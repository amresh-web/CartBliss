import React from "react";
import "../../assets/scss/Button.scss";

const Button = (props) => {
  return (
    <>
      <button type="button" className="btn btn-dark rounded-pill px-5 py-2">
        {props.name}
      </button>
    </>
  );
};
export default Button;
