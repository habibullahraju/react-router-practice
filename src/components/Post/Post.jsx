import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate();
    const handlerPostID = ()=>{
        navigate(`/post/${post.id}`)
    }
    return (
        <div className='post'>
            <h2>Id: {post.id}</h2>
            <h3>name: {post.title}</h3>
            <p><Link to={`/post/${post.id}`}>Post Details</Link></p>
            <button onClick={handlerPostID}>Post Details</button>
        </div>
    );
};

export default Post;