import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";

const AddProduct = () => {
  const [brandList, SetBrandList] = useState([]);
  const [brandId, SetBrndId] = useState();
  const [addProduct, setAddProduct] = useState({
    productName: "",
    brand: "",
    processorType: "",
    ram: "",
    storage: "",
    price: "",
    color: "",
    discountprice: "",
    percentage: "",
    images: [],
  });

  const state = useSelector((state) => state?.category);

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

  const handleSelectCategory = (catid) => {
    handleBrandList(catid.target.value);
  };

  const handleSelectBrand = (brandid) => {
    SetBrndId(brandid.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddProduct({ ...addProduct, [name]: value });
  };
  const handleUploadFile = (e) => {
    const files = Array.from(e.target.files);
    setAddProduct({ ...addProduct, images: files });
    console.log(typeof files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", addProduct.productName);
    formData.append("brand", brandId);
    formData.append("processor", addProduct.processorType);
    formData.append("ram", addProduct.ram);
    formData.append("storage", addProduct.storage);
    formData.append("price", addProduct.price);
    formData.append("color", addProduct.color);
    formData.append("discount_price", addProduct.discountprice);
    formData.append(" discount_percentage", addProduct.percentage);
    addProduct.images.forEach((image) => {
      formData.append("images", image);
    });
    // for (let [key, value] of formData.entries()) {
    //     console.log(key, value);
    //   }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/category/addmodel`,
        formData
      );
      if (res.status === 201) {
        console.log(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1 className="text-center pb-4">Add product</h1>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label">
                      Select Category
                    </label>
                    <div className="col-sm-9">
                      <Form.Select
                        aria-label="category select"
                        onChange={handleSelectCategory}
                      >
                        <option>Select Category</option>
                        {state.data?.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label className="col-sm-3 col-form-label">
                      Select Brand
                    </label>
                    <div className="col-sm-9">
                      <Form.Select
                        aria-label="brand select"
                        name="brand"
                        onChange={handleSelectBrand}
                      >
                        <option>Select Brand</option>
                        {brandList?.map((brand) => (
                          <option key={brand._id} value={brand._id}>
                            {brand.name}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label
                      htmlFor="productName"
                      className="col-sm-3 col-form-label"
                    >
                      Product Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="productName"
                        name="productName"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label
                      htmlFor="processorType"
                      className="col-sm-3 col-form-label"
                    >
                      Processor Type
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="processorType"
                        name="processorType"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label htmlFor="ram" className="col-sm-3 col-form-label">
                      Ram
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="ram"
                        name="ram"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label
                      htmlFor="storage"
                      className="col-sm-3 col-form-label"
                    >
                      Storage
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="storage"
                        name="storage"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label htmlFor="color" className="col-sm-3 col-form-label">
                      Color
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="color"
                        name="color"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label htmlFor="price" className="col-sm-3 col-form-label">
                      Price
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label
                      htmlFor="discountprice"
                      className="col-sm-3 col-form-label"
                    >
                      Discounted Price
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="discountprice"
                        name="discountprice"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label
                      htmlFor="percentage"
                      className="col-sm-3 col-form-label"
                    >
                      Discount percentage
                    </label>
                    <div className="col-sm-9">
                      <textarea
                        className="form-control"
                        id="percentage"
                        name="percentage"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="row mb-3">
                    <label
                      htmlFor="uploadimg"
                      className="col-sm-3 col-form-label"
                    >
                      Upload Images
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="file"
                        className="form-control"
                        id="uploadimg"
                        name="images"
                        multiple
                        onChange={handleUploadFile}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-100 text-center mt-4">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
