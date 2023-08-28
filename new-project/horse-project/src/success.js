import React from 'react';
import { useLocation } from 'react-router-dom';

function Success() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const horseName = queryParams.get('name');
    const horseId = queryParams.get('id');

    return (
        <div>
            <h1>Success!</h1>
            <p>{`Horse ${horseName} (${horseId}) has been successfully registered!`}</p>
        </div>
    );
}

export default Success;