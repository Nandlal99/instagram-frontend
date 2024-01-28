import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';

const CreatePost = () => {
    const [inputData, setInputData] = useState({});
    const [isInputData, setIsInputData] = useState(false);
    const ref = useRef();
    const { values, errors, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            image: "",
            content: ""
        },
        onSubmit: (values, { resetForm }) => {
            let data = new FormData();
            if (values.image && values.content) {
                console.log("some data enter by user");
                console.log(values);
                data.append('image', values.image);
                data.append('content', values.content);
                setInputData(data);
                setIsInputData(true);
            }
            console.log(ref.current);
            console.log(ref.current.value)
            resetForm();
            ref.current.value = '';

        }
    });

    useEffect(() => {
        if (isInputData) {
            sendData();
            // console.log(inputData);
        }
        // console.log(inputData, typeof inputData, Object.keys(inputData).length);
    }, [isInputData]);

    const sendData = async () => {
        const token = sessionStorage.getItem("token");
        const data = await fetch("/api/feed/post", {
            method: "POST",
            headers: {
                'Authorization': token,
                // 'Content-Type': 'multipart/form-data'
            },
            body: inputData
        });
        const json = await data.json();
        console.log(json);
    };

    return (
        <form onSubmit={handleSubmit} className=' flex flex-col  mx-auto my-10 md:my-20 text-white'>
            <div className='flex md:justify-center items-center mx-5 md:mx-0 mb-8'>
                <h3 className='font-bold text-xl md:text-3xl'>Create a Post</h3>
            </div>
            <div className='my-3 flex flex-col sm:my-5 sm:flex-row'>
                <label htmlFor='profilePic' className='text-white px-5 sm:py-5'>Post Image :</label>
                <input
                    type='file'
                    name='profilePic'
                    // value={values.image}
                    ref={ref}
                    onChange={(event) => {
                        setFieldValue('image', event.currentTarget.files[0]);
                    }}
                    onBlur={handleBlur}
                    className='p-4 text-white'
                />
            </div>
            <div className='my-3 flex flex-col  sm:flex-row  '>
                <label htmlFor='content' className='text-white px-5  sm:py-5'>Caption :</label>
                <textarea
                    name='content'
                    type='text'
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // rows={"2"}
                    // cols={"30"}
                    placeholder='eg. Jone Smith ...'
                    className='p-2 text-gray-600 mx-5 mt-3 sm:mt-0 rounded w-64 h-20 sm:w-72 sm:h-20'
                />
            </div>
            <div className='my-8 flex md:justify-center items-center mx-5 md:mx-0'>
                <button type='submit' className='bg-blue-500 py-3 px-8 rounded-md text-lg font-bold'>Create</button>
            </div>
        </form>
    )
}

export default CreatePost