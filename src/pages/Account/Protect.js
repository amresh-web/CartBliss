import React, {useEffect} from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const navigate = useNavigate();
    const  {Component} = props;
   
    useEffect(() => {
        const token = Cookies.get(props.user);
        if(!token){
            navigate('/login');
        }
    }, []);

    return(<>
    <Component />
    </>)
}

export default Protected;