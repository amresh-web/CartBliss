import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    category: "",
  });
  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validiateError = {};
    if (!formData.category.trim()) {
      validiateError.category = "Enter a valid category";
    }

    setError(validiateError);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/category/addcategory`,
        {
          name: formData.category,
        }
      );
      if (res.status === 200) {
        console.log("Success");
        setFormData("");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <label className="col-12 mb-2">Category Name</label>
          <div className="col-12">
            <input
              type="text"
              className="form-control w-25"
              placeholder="Enter category name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {error.category && (
          <p className={"fs-6 fw-normal text-danger m-0"}>{error.category}</p>
        )}
        <div className="row mt-3">
          <div className="col-12">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AddCategory;
