import { NavLink, Outlet } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import style from "../../assets/scss/Account.module.scss";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

export default function Account() {
    const [title, setTitile] = useState()
    const [desc, setDesc] = useState()
    const [lgn, setLgn] = useState()
    useEffect(()=>{
   
    if(window.location.pathname === '/signup'){
        setTitile("Sign Up")
        setDesc("You have an Account click here to")
        setLgn(<NavLink to="/login">Login</NavLink>)
    }
    if(window.location.pathname === '/login'){
        setTitile("Log In")
        setDesc("If you don't have an Account click here to")
        setLgn(<NavLink to="/signup">Sign Up</NavLink>)
    }
},[])
    console.log(window.location.pathname); 
    return (<>
        <Suspense fallback={<div>Loading...</div>}>
            <div className={[style.wrapper, "d-flex justify-content-center align-items-center vh-100"].join(' ')}>
                <div className={"container"}>
                    <div className="row g-0 justify-content-center">
                        <div className="col-12 col-lg-6">
                        <Outlet /> 
                        </div>
                        <div className="col-12 col-lg-3">
                        <div className={"position-relative h-100"}>
                        <div className={[style.account, "w-100"].join(' ')}>
                            <div className={["d-flex align-items-center flex-direction-column h-100 px-3 py-5"]}>
                                <div className={[style.logo,"ps-3"].join(" ")}>
                                    Cart <span>Bliss</span>
                                </div>
                                <div className={"w-100 text-center"}>
                                   <h1 className={"fs-1 fw-bold text-white py-3"}>{title}</h1>
                                    <p className="fs-6 fw-normal text-white">{desc} {lgn}</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </Suspense>
    </>)
}
