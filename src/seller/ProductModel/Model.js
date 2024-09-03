import axios from "axios";
import { useEffect, useState } from "react";

const ProductModel = () => {
  const [category, setCategory] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState();
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    processor: "",
    ram: "",
    storage: "",
    color: "",
    price: "",
    discountprice: "",
    discountpercentage: "",
    images: [],
  });

  const [error, setError] = useState({});

  const getCategoryData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/getcategory`
      );
      if (res.status === 200) {
        setCategory(res.data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  const handleSelectCategory = (e) => {
    e.preventDefault();
    getBrandData(e.target.value);
  };

  const getBrandData = async (catid) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/getcategory/${catid}/getbrand`
      );
      if (res.status === 200) {
        setBrandList(res.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSelectBrand = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSelectedBrand(e.target.value);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: Array.from(e.target.files),
    });
  };

  const validateForm = () => {
    const newError = {};

    if (!formData.brand) newError.brand = "Select brand from the list";
    if (!formData.model) newError.model = "Model name is required";
    if (!formData.processor) newError.processor = "Processor is required";
    if (!formData.ram) newError.ram = "Ram is required";
    if (!formData.storage) newError.storage = "Storage is required";
    if (!formData.color) newError.color = "Color is required";
    if (!formData.price) newError.price = "Price is required";
    if (formData.images.length === 0) newError.images = "Image is required";

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    const data = new FormData();
    data.append("name", formData.model);
    data.append("brand", formData.brand);
    const specification = JSON.stringify({
      processor: formData.processor,
      ram: formData.ram,
      storage: formData.storage,
      color: formData.color,
      price: formData.price,
      discount_price: formData.discountprice,
      discount_percentage: formData.discountpercentage,
    });
    data.append("specifications", specification);
    formData.images.forEach((image) => {
      data.append("images", image);
    });

    // Log FormData object entries
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/category/addmodel`,
        data
      );
      if (res.status === 200) {
        console.log("Success ", res.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="category" className="form-label">
                    Category Name
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={handleSelectCategory}
                  >
                    <option>Select category from list</option>
                    {category.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="category" className="form-label">
                    Brand Name
                  </label>
                  {brandList._id}
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="brand"
                    onChange={handleInputChange}
                  >
                    <option>Select Brand from list</option>
                    {brandList.map((brand) => (
                      <option key={brand._id} value={brand._id}>
                        {brand.name}
                      </option>
                    ))}
                  </select>
                  {error.brand && (
                    <p className="text-danger m-0">{error.brand}</p>
                  )}
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="modelname" className="form-label">
                    Model Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="modelname"
                    name="model"
                    onChange={handleInputChange}
                  />
                  {error.model && (
                    <p className="text-danger m-0">{error.model}</p>
                  )}
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="processor" className="form-label">
                    Processor
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="processor"
                    name="processor"
                    onChange={handleInputChange}
                  />
                  {error.processor && (
                    <p className="text-danger m-0">{error.processor}</p>
                  )}
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="ram" className="form-label">
                    Ram
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ram"
                    name="ram"
                    onChange={handleInputChange}
                  />
                  {error.ram && <p className="text-danger m-0">{error.ram}</p>}
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="storage" className="form-label">
                    Storage
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="storage"
                    name="storage"
                    onChange={handleInputChange}
                  />
                  {error.storage && (
                    <p className="text-danger m-0">{error.storage}</p>
                  )}
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="color" className="form-label">
                    Color
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    name="color"
                    onChange={handleInputChange}
                  />
                  {error.color && (
                    <p className="text-danger m-0">{error.color}</p>
                  )}
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    onChange={handleInputChange}
                  />
                  {error.price && (
                    <p className="text-danger m-0">{error.price}</p>
                  )}
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="dsp" className="form-label">
                    Discounted Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dsp"
                    name="discountprice"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="percentage" className="form-label">
                    Discount Percentage
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="percentage"
                    name="discountpercentage"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="photo" className="form-label">
                    Photos
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="photo"
                    name="images"
                    multiple="multiple"
                    onChange={handleFileChange}
                  />
                  {error.images && (
                    <p className="text-danger m-0">{error.images}</p>
                  )}
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModel;
