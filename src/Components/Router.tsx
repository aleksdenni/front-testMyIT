import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import Home from "../Pages/Home";
import Account from "../Pages/Account";
import ErrorPage from "./ErrorPage";
import Login from "./Login";
import Registration from "./Registration";

const Router = () => {
    return (

        <Routes>
            <Route path="/*" element={<Home/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/registration" element={<Registration/>}></Route>
            <Route path='*' element={ErrorPage}></Route>
        </Routes>


    );
};

export default Router;