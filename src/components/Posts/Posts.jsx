/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Post from '../../post/Post';

const Posts = () => {
    const posts = useLoaderData();
    const navigate = useNavigate();
    const handlego = () => {
        navigate(-1)
    }
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px'
        }}>
            <h2>{posts.length}</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            <button onClick={handlego} >go back</button>
        </div>

    );
};

export default Posts;