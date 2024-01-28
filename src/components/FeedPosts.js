import React, { useEffect, useState } from 'react'
import FeedPost from './FeedPost';
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import PostSkeleton from './PostSkeleton';

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        getPosts();
    }, [])

    const getPosts = async () => {
        const token = sessionStorage.getItem("token");
        const data = await fetch("/api/feed/posts", {
            method: "GET",
            headers: {
                'Authorization': token
            }
        });
        const json = await data.json();
        console.log(json.post);
        setPosts(json.post);
        // console.log(posts);
    }

    return (
        <div className=' p-10 max-w-lg flex-col'>
            {isLoading && [1, 2, 3, 4].map((value, index) => {
                return (<PostSkeleton key={index} />)
            })}

            {!isLoading && (
                <>
                    <FeedPost postImg={img1} username="john" avatar={img1} />
                    <FeedPost postImg={img2} username="joker" avatar={img2} />
                    <FeedPost postImg={img3} username="silver" avatar={img3} />
                    <FeedPost postImg={img4} username="place" avatar={img4} />
                    {posts.map((post) => {
                        return (
                            <FeedPost key={post?._id} id={post?._id} postImg={post?.imageURL} username={post?.User_details?.name} avatar={post?.User_details?.profilePicURL} content={post?.content} likes={post?.likes} />
                        )
                    })}

                    {/* <FeedPost postImg={posts[0]?.imageUrl} username={posts[0]?.User_details?.name} avatar={posts[0]?.imageUrl} /> */}
                </>
            )}

        </div>
    )
}

export default FeedPosts;