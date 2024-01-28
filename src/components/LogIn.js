import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const LogIn = () => {
    const [inputs, setInputs] = useState({
        // email: "",
        // password: "",
    });

    const nagivate = useNavigate();

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, { resetForm }) => {
            if (values.email && values.password) {
                setInputs(values);
            }
            resetForm();
        }
    });

    useEffect(() => {
        if (Object.keys(inputs).length !== 0) {
            handleLogin();
        }
    }, [inputs]);

    const handleLogin = async () => {
        const data = await fetch("api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        });
        const json = await data.json();
        console.log(json);
        sessionStorage.setItem("token", "Bearer " + json.token);
        nagivate("/home");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='email'
                    placeholder='Email'
                    className='block bg-slate-800 border-solid border-[2px] border-gray-700 rounded p-1 px-3 mb-3 w-60 text-gray-400'
                    // value={inputs.email}
                    // onChange={(e) => {
                    //     setInputs({ ...inputs, email: e.target.value })
                    // }}
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input type='password'
                    placeholder='Password'
                    className='block bg-slate-800 border-solid border-[2px] border-gray-700 rounded p-1 px-3 w-60 text-gray-400'
                    // value={inputs.password}
                    // onChange={(e) => {
                    //     setInputs({ ...inputs, password: e.target.value })
                    // }}
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <button className='w-full h-8 bg-blue-300 text-md  my-3 rounded'
                    // onClick={handleLogin}
                    type='submit'
                >
                    Log in
                </button>
            </form>
        </>
    )
}

export default LogIn