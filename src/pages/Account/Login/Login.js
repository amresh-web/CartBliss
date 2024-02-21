const Login = () => {
    return (<>
        <div className={"row h-100"}>
            <div className={"col-12"}>
                <div className={"bg-white h-100 rounded-start p-5"}>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pass" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Login;