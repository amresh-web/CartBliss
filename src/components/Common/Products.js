import React from "react";
import style from "../../assets/scss/Products.module.scss";
import Button from "./Button";

const Products = (props) => {
  const mobile = props.mobileData;
  return (
    <>
      <div className={"row g-0"}>
        {mobile.map((data) => {
          return (
            <div className={"col-12 col-md-6 col-xl-3 mb-3"} key={data.key}>
              <div className={[style.card, "card"].join(" ")}>
                <div className={[style.card_imag, "text-center"].join(" ")}>
                  <img
                    src={data.url}
                    className={["img-fluid"].join(" ")}
                    alt="..."
                  />
                </div>
                <div
                  className={[style.card_body, "card-body text-center"].join(
                    " "
                  )}
                >
                  <h5 className="card-title mb-3">{data.name}</h5>

                  <Button name={"View Detail"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
