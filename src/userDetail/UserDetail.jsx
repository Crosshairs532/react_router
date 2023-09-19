/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetail = () => {
    const load = useLoaderData();
    const { name, id } = load

    return (
        <div>
            <h2>{name}</h2>
            <p><strong>ID:</strong>{id} </p>
        </div >
    );
};

export default UserDetail;