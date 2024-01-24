import React from "react";

const ProductList = () => {
  const receivedData = window.history.state;
  const data = receivedData.usr;
  return (
    <>
      <div className={"container-fluid py-5"}>
        <div className={"row row-cols-1 row-cols-md-5 g-4"}>
          {Object.keys(data).map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              {typeof data[category] === "object" && data[category] !== null ? (
                Object.keys(data[category]).map((brandName) => (
                  <React.Fragment key={brandName}>
                    {data[category][brandName].map((item) => (
                      <div className={"col"} key={item.key}>
                        <a
                          href="#"
                          className={"card h-100 text-decoration-none"}
                        >
                          <div class={"card-body"}>
                            <img
                              className={["mh-100 mw-100"].join(" ")}
                              src={item.url}
                              alt={item.name}
                            />
                          </div>
                          <div className={"card-footer text-center py-4"}>
                            <p className={"card-text"}>{item.name}</p>
                            <h5 className={"card-title"}>
                              <i className={"bi bi-currency-rupee"}></i>
                              {item.price}
                            </h5>
                            {/* <ul>
                          {item.desc.map((descItem, descIndex) => (
                            <li key={descIndex}>{descItem}</li>
                          ))}
                        </ul> */}
                          </div>
                        </a>
                      </div>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <p>No brands found for this category.</p>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
