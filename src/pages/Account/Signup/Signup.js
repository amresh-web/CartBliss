import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        cnfpassword: '',
        address: '',
        city: '',
        state:'',
        zip: ''
    })
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        let {name, value} = e.target
        setFormData({...formData, [name]: value})
        console.log(formData.fullname);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let validiateError = {}
        if(!formData.fullname.trim()){
            validiateError.fullname = "Full name is required"
        }
        if(!formData.username.trim()){
            validiateError.username = "User name is required"
        }
        if(!formData.phone.trim()){
            validiateError.phone = "Phone number is required";
        } else if(formData.phone.match(/^\d{1,10}$/)){
            validiateError.phone = "Invalid phone number"
        }
        if(!formData.email.trim()){
            validiateError.email = "Email is required"
        } 
        // else if(/[a-z]+@[a-z]+\.[a-z]{2,3}/){
        //     validiateError.email = "Email id is not valid"
        // }
        if(!formData.password.trim()){
            validiateError.password = "Password is required"
        } 
        // else if(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/){
        //     validiateError.password = "Password must contain 1 lower, upper, digit, special char, length should be 8-16"
        // }
        if(!formData.cnfpassword){
            validiateError.cnfpassword = "Confirm password is required"
        }
        if(formData.password !== formData.cnfpassword){
            validiateError.cnfpassword = "Confirm password not matched"
        }
        if(!formData.address.trim()){
            validiateError.address = "Address is required"
        }
        if(!formData.city.trim()){
            validiateError.city = "City name is required"
        }
        if(!formData.state.trim()){
            validiateError.state = "State name is required"
        }
        if(!formData.zip.trim()){
            validiateError.zip = "Zip is required"
        } else if(formData.zip.match("^[0-9]{6}$")){
            validiateError.zip = "Zip should be 6 character"
        }

        setErrors(validiateError);

        if(Object.keys(validiateError).length === 0){
            alert("Form Submitted successfully")
            console.log(formData)
        }
    }

   
    return (<>
        <div className={"row"}>
         
            <div className={"col-12"}>
                <div className={"bg-white rounded-start p-5"}>
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" name="fullname" onChange={handleInputChange} />
                            {errors.fullname && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.fullname}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="uname" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="uname" name="username" onChange={handleInputChange} />
                            {errors.username && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.username}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Phone No</label>
                            <input type="number" className="form-control" id="phone" name="phone" onChange={handleInputChange} />
                            {errors.phone && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.phone}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={handleInputChange} />
                            {errors.email && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.email}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pass" name="password" onChange={handleInputChange} />
                            {errors.password && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.password}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="cpassword" name="cnfpassword" onChange={handleInputChange} />
                            {errors.cnfpassword && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.cnfpassword}</p>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" onChange={handleInputChange} />
                            {errors.address && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.address}</p>}
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" name="city" onChange={handleInputChange} />
                            {errors.city && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.city}</p>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <input type="text" className="form-control" id="inputState" name="state" onChange={handleInputChange} />
                            {errors.state && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.state}</p>}
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" name="zip" onChange={handleInputChange} />
                            {errors.zip && <p className={"fs-6 fw-normal text-danger m-0"}>{errors.zip}</p>}
                        </div>
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Signup;