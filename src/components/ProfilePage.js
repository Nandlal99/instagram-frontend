import React, { useEffect, useState } from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileTabs from './ProfileTabs'
import ProfilePosts from './ProfilePosts'

const ProfilePage = () => {
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        getUserDetail();
    }, []);

    const getUserDetail = async () => {
        const token = sessionStorage.getItem("token");
        const data = await fetch("/api/user/details", {
            method: "GET",
            headers: {
                'Authorization': token
            }
        });
        const json = await data.json();
        console.log(json);
        setUserDetails(json);
    }

    return (
        <div className='flex-col max-w-lg sm:max-w-4xl sm:p-10'>
            <ProfileHeader name={userDetails?.user?.name} email={userDetails?.user?.email} profilePic={userDetails?.user?.baseURL + userDetails?.user?.profilePic} description={userDetails?.user?.description} posts={userDetails?.user?.posts} follower={userDetails?.user?.follower} following={userDetails?.user?.following} />
            <div className='bg-gray-700 h-[1px] mt-10'></div>
            <ProfileTabs />
            <ProfilePosts post_details={userDetails?.user?.post_details} baseURL={userDetails?.user?.baseURL} />
        </div>
    )
}

export default ProfilePage