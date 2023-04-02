import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './posts.css';

const Posts = () => {
    const posts  = useLoaderData()
    // console.log(posts);
    return (
        <div>
            All posts here: {posts.length}
            <div className='posts'>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;