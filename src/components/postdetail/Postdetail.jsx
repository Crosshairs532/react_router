/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetail = () => {
    const det = useLoaderData();
    console.log(det, 'deeettttt')
    const navigate = useNavigate()
    const { title, body } = det
    const handlenav = () => {
        navigate(-1)
    }
    return (
        <div>

            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={handlenav}>go back</button>
        </div>
    );
};

export default Postdetail;