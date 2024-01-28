import React, { useState } from 'react'
import auth from "../images/auth.png";
import instaLogo from "../images/logo (2).png";
import playstoreLogo from "../images/playstore.png";
import microsoftLogo from "../images/microsoft.png";
import googleLogo from "../images/google (1).png";
// import { useNavigate } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='flex h-screen w-screen bg-slate-800 justify-center items-center px-4 '>
            <div className='mx-3'>
                <img src={auth} alt='authLogo' className="hidden h-[30rem] md:block" />
            </div>
            <div className="flex-col ">
                <div className='flex-col border-solid border-2 border-gray-600 rounded p-3 mt-2  justify-center items-center'>
                    <img src={instaLogo} alt='logo' className='h-20 cursor-pointer' />

                    {isLogin ? <LogIn /> : <SignUp setIsLogin={setIsLogin} />}

                    <div className='flex justify-center items-center'>
                        <div className='h-[1px] w-24 bg-gray-400'></div>
                        <p className='mx-3 text-gray-400'>OR</p>
                        <div className='h-[1px] w-24 bg-gray-400'></div>
                    </div>
                    <div className='flex justify-center items-center gap-3 my-2'>
                        <img src={googleLogo} alt='google logo' className='h-5' />
                        <p className='text-md text-blue-400 cursor-pointer'>Log in with Google</p>
                    </div>
                </div>
                <div className='flex border-solid border-2 border-gray-600 rounded p-3 my-2  justify-center items-center cursor-pointer '>
                    <p className='text-sm text-gray-300 mx-2'>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                    <p className='text-sm text-blue-400 ' onClick={() => {
                        setIsLogin(!isLogin);
                    }}>{isLogin ? "Sign up" : "Log in"}</p>
                </div>
                <div className='flex justify-center items-center my-4 text-gray-400'>
                    Get the app.
                </div>
                <div className='flex justify-center gap-4 my-4'>
                    <img src={playstoreLogo} alt='google logo' className='h-10' />
                    <img src={microsoftLogo} alt='microsoft logo' className='h-10' />
                </div>
            </div>
        </div>
    )
}

export default AuthPage