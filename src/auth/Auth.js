import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AuthFooter from "./footer/AuthFooter";
import AuthNavbar from "./navbar/AuthNavbar";

const Auth = () => {
    const navigate = useNavigate();

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (userToken) {
            return navigate('/');
    }
    
    }
    useEffect(() => {
        checkUserToken();
    }, []);
    return (
        <React.Fragment>
            <AuthNavbar />
            <Outlet />
            <AuthFooter />
        </React.Fragment>
    );
}

export default Auth;