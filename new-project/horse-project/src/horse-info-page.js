
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
        </div>
    );
};

export default HorseInfo;
