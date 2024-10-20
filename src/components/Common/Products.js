import React from "react";
import style from "../../assets/scss/Products.module.scss";
import Button from "./Button";
import images from "../../assets/images/mobile/mb-1.webp";

const Products = ({ data }) => {
  const imageUrl = `http://localhost:4000/images/${data[0]?.images[0]}`;
  console.log(data[0]?.images[0]);
  return (
    <>
      {data && data.length > 0 ? (
        <div className={"row g-0"}>
          {data.map((category, categoryIndex) => (
            <div
              className={"col-12 col-md-6 col-xl-3 mb-3"}
              key={categoryIndex}
            >
              <div className={[style.card, "card"].join(" ")} key={""}>
                <div className="w-100" key={""}>
                  <div className={[style.card_imag, "text-center"].join(" ")}>
                    {category.images.map((image, index) => (
                      <img
                        key={index}
                        //src={`http://localhost:4000${image}`}
                        src={imageUrl}
                        className={["mh-100 mw-100"].join(" ")}
                        alt={""}
                      />
                    ))}
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
