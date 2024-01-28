import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const SignUp = ({ setIsLogin }) => {
    const [inputs, setInputs] = useState({
        // email: "",
        // password: "",
        // name: "",
    });

    const nagivate = useNavigate();

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: ''
        },
        onSubmit: (values, { resetForm }) => {
            if (values.email && values.password && values.name) {
                setInputs(values);
            }
            resetForm();
        }
    });

    useEffect(() => {
        if (Object.keys(inputs).length !== 0) {
            handleSignup();
        }
    }, [inputs])

    const handleSignup = async () => {
        console.log(inputs);
        const data = await fetch("api/auth/signup", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        });
        const json = await data.json();
        console.log(json);
        setIsLogin(true);
        nagivate("/");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='email'
                    placeholder='Email'
                    className='block bg-slate-800 border-solid border-[2px] border-gray-700 rounded p-1 px-3 mb-2 w-60 text-gray-400'
                    name='email'
                    // value={inputs.email}
                    // onChange={(e) => {
                    //     setInputs({ ...inputs, email: e.target.value })
                    // }}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input type='text'
                    placeholder='Full Name'
                    className='block bg-slate-800 border-solid border-[2px] border-gray-700 rounded p-1 px-3 w-60 mb-2 text-gray-400'
                    name='name'
                    // value={inputs.name}
                    // onChange={(e) => {
                    //     setInputs({ ...inputs, name: e.target.value })
                    // }}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input type='password'
                    placeholder='Password'
                    className='block bg-slate-800 border-solid border-[2px] border-gray-700 rounded p-1 px-3 w-60 text-gray-400'
                    name='password'
                    // value={inputs.password}
                    // onChange={(e) => {
                    //     setInputs({ ...inputs, password: e.target.value })
                    // }}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <button className='w-full h-8 bg-blue-300 text-md  my-3 rounded'
                    // onClick={handleSignup}
                    type='submit'
                >
                    Sign up
                </button>
            </form>
        </>
    )
}

export default SignUp