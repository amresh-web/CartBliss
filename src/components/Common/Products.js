import React from "react";
import style from "../../assets/scss/Products.module.scss";
import Button from "./Button";

const Products = (props) => {
  const datas = props.data;

  return (
    <>
      <div className={"row g-0"}>
        {Object.keys(datas).map((category, categoryIndex) => (
          <div className={"col-12 col-md-6 col-xl-3 mb-3"} key={categoryIndex}>
            {typeof datas[category] === "object" && datas[category] !== null ? (
              Object.keys(datas[category]).map((brandName) => (
                <div className={[style.card, "card"].join(" ")} key={brandName}>
                  {datas[category][brandName].slice(0, 1).map((item) => (
                    <div className="w-100" key={item.key}>
                      <div
                        className={[style.card_imag, "text-center"].join(" ")}
                      >
                        <img
                          src={item.url}
                          className={["mh-100 mw-100"].join(" ")}
                          alt={item.name}
                        />
                      </div>
                      <div
                        className={[
                          style.card_body,
                          "card-body text-center",
                        ].join(" ")}
                      >
                        <h5 className="card-title mb-3">{brandName}</h5>

                        <Button name={"View Detail"} />
                      </div>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p>No brands found for this category.</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
