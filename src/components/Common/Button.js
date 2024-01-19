import React from "react";
import "../../assets/scss/Button.scss";

const Button = ({name, handleClick}) => {
  return (
    <>
      <button type="button" className="btn btn-dark rounded-pill px-5 py-2" onClick={handleClick}>
        {name}
      </button>
      
    </>
  );
};
export default Button;
