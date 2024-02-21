import { useEffect } from "react";

const Signup = () => {

    return (<>
        <div className={"row"}>
         
            <div className={"col-12"}>
                <div className={"bg-white rounded-start p-5"}>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="uname" className="form-label">User Name</label>
                            <input type="text" className="form-control" id="uname" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="phone" className="form-label">Phone No</label>
                            <input type="number" className="form-control" id="phone" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pass" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="cpassword" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select">
                                <option defaultValue>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
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