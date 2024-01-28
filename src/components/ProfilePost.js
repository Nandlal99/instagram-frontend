import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProfilePost = ({ img }) => {
    const nagivate = useNavigate();
    const handleEachPost = (path) => {
        nagivate(path);
    }
    return (
        <div className='overflow-hidden cursor-pointer h-52 w-56 rounded mx-auto'
            onClick={() => {
                handleEachPost("/home/eachPost");
            }}>
            <img src={img} alt='post pic' className='h-full w-full bg-cover' />
        </div>
    )
}

export default ProfilePost