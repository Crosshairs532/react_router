/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { useNavigate, Link } from 'react-router-dom';
const Post = ({ post }) => {
    const { title, body, id } = post
    const navigate = useNavigate();
    // const handleshow = () => {
    //     navigate(`/posts/${id}`)
    // }
    return (
        <div style={{
            border: '1px solid black'
        }}>
            <h2>{title}</h2>
            <p>{body}</p>
            {/* <button onClick={handleshow}>click to see details</button> */}
            <Link to={`/posts/${id}`}><button>click to see details</button></Link>
        </div>
    );
};

export default Post;
Post.propTypes = {
    post: PropTypes.object
}