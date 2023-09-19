/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Use from '../Use/Use';
import './user.css'
const User = () => {
    const User = useLoaderData();
    return (

        <div className='user-container'>

            {
                User.map((i, idx) => <Use key={idx} i={i}></Use>)
            }
        </div>
    );
};

export default User;