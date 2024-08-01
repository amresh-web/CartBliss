import { useState } from "react";
import FilterCategory from "./FilterCategory";
import axios from "axios";

const BrandLists = ({ fetchCategory, title }) => {
  const [selectCategory, SetSelectedCategory] = useState();
  const [brandList, SetBrandList] = useState([]);

  // filter category from the list
  const handleSelectCategory = (e) => {
    e.preventDefault();
    SetSelectedCategory(e.target.value);
    handleBrandList(e.target.value);
  };

  const handleBrandList = async (catid) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/getcategory/${catid}/getbrand`
      );
      if (res.status === 200) {
        SetBrandList(res.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      {selectCategory}
      <FilterCategory
        fetchCategory={fetchCategory}
        handleSelectCategory={handleSelectCategory}
        title={title}
      />
      {brandList.length === 0 ? (
        <h5>No data found!</h5>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Brand Name</th>
            </tr>
          </thead>
          <tbody>
            {brandList.map((brand, index) => (
              <tr key={brand._id}>
                <td>{index}</td>
                <td>{brand.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default BrandLists;
