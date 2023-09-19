/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
const Post = ({ post }) => {
    const { title, body } = post
    return (
        <div style={{
            border: '1px solid black'
        }}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;
Post.propTypes = {
    post: PropTypes.object
}