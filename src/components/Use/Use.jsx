/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Use = ({ i }) => {
    const { id, name, email, phone } = i;
    return (
        <div style={{
            borderRadius: '8px',
            boxShadow: '0px 0px 9px 0px grey',
            padding: '10px'

        }}>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{id}</p>
            <p>{email}</p>
            <Link to={`/users/${id}`}>Show details</Link>
        </div >
    );
};

export default Use;
Use.propTypes = {
    i: PropTypes.object
}