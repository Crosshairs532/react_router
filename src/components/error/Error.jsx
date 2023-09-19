import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h2>OOPS!!!!</h2>
            {
                error.status || error.message
            }
        </div>
    );
};

export default Error;