import { useState } from "react";
import axios from "axios";

const AddProduct = () => {

    const [formData, setFormData] = useState({
        productName:"",
        modalno: "",
        price: "",
        color: "",
        description:"",
        image:""
    });

    const handleInputChange = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }
    const handleUploadFile = (e) => {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.files}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        try {
            const response = await axios.post(
              `${process.env.REACT_APP_BASE_URL}/product/addproduct`,
              formData
            );
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }

    }
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-7 py-4">
                    <h1 className="text-center pb-4">Add product</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="productName" className="col-sm-3 col-form-label">Product Name</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="productName" name="productName" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="modal" className="col-sm-3 col-form-label">Modal No</label>
                            <div className="col-sm-9">
                                <select className="form-select" aria-label="Default select example" name="modalno" onChange={handleInputChange}>
                                    <option defaultValue>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="price" className="col-sm-3 col-form-label">Price</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="price" name="price" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="color" className="col-sm-3 col-form-label">Color</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="color" name="color" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="desc" className="col-sm-3 col-form-label">Descriptions</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" id="desc" name="description" onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="uploadimg" className="col-sm-3 col-form-label">Upload Images</label>
                            <div className="col-sm-9">
                                <input type="file" className="form-control" id="uploadimg" name="image" multiple onChange={handleUploadFile} />
                            </div>
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
                <div className="col-5">
                
                </div>
            </div>
        </div>
    </>)
}

export default AddProduct;