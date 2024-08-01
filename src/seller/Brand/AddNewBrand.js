import { useState } from "react";
import FilterCategory from "./FilterCategory";
import axios from "axios";

const AddNewBrand = ({ fetchCategory, title }) => {
  const [selectCategory, SetSelectedCategory] = useState();
  const [formData, setFormData] = useState({
    brand: "",
  });

  // filter category from the list
  const handleSelectCategory = (e) => {
    e.preventDefault();
    SetSelectedCategory(e.target.value);
    //handleAddBrand(e.target.value);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, brand: e.target.value }));
  };

  const handleAddBrand = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/category/addbrand`,
        { name: formData.brand, category: selectCategory }
      );
      if (res.status === 200) {
        console.log(res);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBrand();
  };
  return (
    <>
      <FilterCategory
        fetchCategory={fetchCategory}
        handleSelectCategory={handleSelectCategory}
        title={title}
      />
      <div className="w-100 mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <label className="col-12" htmlFor="brand">
              Add New Brand
            </label>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter brand name"
                name="brand"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNewBrand;
