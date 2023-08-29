import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RegisteredHorses() {
    const [horses, setHorses] = useState([]);

    useEffect(() => {
        fetchHorses();
    }, []);

    const fetchHorses = () => {
        axios.get('http://localhost:3001/horses')
        .then(response => {
            if (Array.isArray(response.data)) {
                setHorses(response.data);
            } else {
                console.error('The server response was not an array');
            }
        })
        .catch(error => console.error(`Oh no some one left the gate open and horses can't be fetched: ${error}`));
    };

    return (
        <div>
            <h1>Registered Horses</h1>
            <a href="/register">Register A Horse</a><br />

            <table>
                <thead>
                    <tr>
                     <th>Name</th>
                     <th>Breed</th>
                     <th>Age</th>
                     <th>Sex</th>
                     <th>Color</th>
                     <th>Height</th>
                     <th>Price</th>
                     <th>Controls</th>
                    </tr>
                </thead>
                <tbody>
                    {horses.map(horse => (
                    <tr key={horse.id}>
                     <td>{horse.name}</td>
                     <td>{horse.breed}</td>
                     <td>{horse.month_of_birth} {horse.year_of_birth}</td>
                     <td>{horse.sex}</td>
                     <td>{horse.color}</td>
                     <td>{horse.height}hh</td>
                     <td>{horse.price}</td>
                     <td>view page</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RegisteredHorses;