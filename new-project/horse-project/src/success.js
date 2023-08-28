import React from 'react';
import { useLocation } from 'react-router-dom';

function Success() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const horseName = queryParams.get('name');

    return (
        <div>
            <h1>Success!</h1>
            <p>{`${horseName} has been successfully registered!`}</p>

            <a href="/register">Register another horse</a><br />
            <a href="horses">View registered Horses</a>
        </div>
    );
}

export default Success;