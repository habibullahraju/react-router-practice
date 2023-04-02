import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetailis = () => {
    const post = useLoaderData();
    // console.log(post);
    const navigatea = useNavigate();
    const handleGoBack = ()=> {
        navigatea(-1)
    }
    return (
        <div>
            <h1>Post Details Here:</h1>
            <h3>Id: {post.id}</h3>
            <h2>Title: {post.title}</h2>
            <p>Body: {post.body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetailis;