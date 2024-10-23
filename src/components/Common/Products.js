import React from "react";
import style from "../../assets/scss/Products.module.scss";
import Button from "./Button";

const Products = ({ data }) => {
  return (
    <>
      {data && data.length > 0 ? (
        <div className={"row g-0"}>
          {data.map((category, categoryIndex) => (
            <div className={"col-12 col-md-6 col-xl-3 mb-3"} key={category._id}>
              <div className={[style.card, "card"].join(" ")}>
                <div className="w-100">
                  <div
                    className={[style.card_imag, "text-center"].join(" ")}
                    key={"p2" + category._id}
                  >
                    <img
                      key={`image_${category._id}_${categoryIndex}`}
                      src={`http://localhost:4000/images/${category.images[0]}`}
                      className={["mh-100 mw-100"].join(" ")}
                      alt={""}
                    />
                  </div>
                  <div
                    className={[style.card_body, "card-body text-center"].join(
                      " "
                    )}
                  >
                    <h5 className="card-title mb-3">{category.name}</h5>

                    <Button name={"View Detail"} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No data found</p>
      )}
    </>
  );
};

export default Products;
