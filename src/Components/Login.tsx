import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div>
            Login
            <Link to="/registration"> Create account </Link>
        </div>
    );
};

export default Login;