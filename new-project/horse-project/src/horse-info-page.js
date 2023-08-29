
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HorseInfo() {
    const { id } = useParams();
    const [horse, setHorse] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/horses/${id}`)
        .then(response => {
            setHorse(response.data);
        })
        .catch(error => {
            console.error('Oh no, someone ran away! We can not catch this horse', error);
        });
    }, [id]);
    return (
        <div>
            <h2>{horse.name}</h2>
            <p>{horse.year_of_birth} {horse.color} {horse.breed} {horse.sex}, {horse.height}hh</p>
            <h3>Notes</h3>
            <p>{horse.notes}</p>
            <p>Asking {horse.price}</p>
            Edit Horse<br/>
           Delete Horse<br/>
        </div>
    );
};

export default HorseInfo;
