import React from 'react';
import {Link} from "react-router-dom";
import {Form, Formik} from "formik";
import { object, string } from "yup";
const Login = () => {
    const LoginValidation = object().shape({
        email: string().required("Required").email("Valid email required"),
        password: string().min(8, "Required").required("Required"),
    });
    const handleSubmit = (values) => {
        console.log(values);
    };
    return (
        <div>
            <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={LoginValidation}
                >
                    {() => {
                        return (
                            <Form className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8">
                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
            <Link to="/registration"> Create account </Link>
        </div>
    );
};

export default Login;