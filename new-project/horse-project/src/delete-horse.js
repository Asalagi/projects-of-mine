import React from 'react';

function DeleteSuccess() {

    return (
        <div>
            <h1>Horse Deleted</h1>
            <p>You have successfully delete this horse. </p>

            <a href="/register">Register another horse</a><br />
            <a href="horses">View registered Horses</a>
        </div>
    );
}

export default DeleteSuccess;