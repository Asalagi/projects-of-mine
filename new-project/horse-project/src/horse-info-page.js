import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CollapseForm from './update-horse';

function HorseInfo() {
    const { id } = useParams();
    const [horse, setHorse] = useState({});
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3001/horses/${id}`)
        .then(response => {
            setHorse(response.data);
        })
        .catch(error => {
            console.error('Oh no, someone ran away! We can not catch this horse', error);
        });
    }, [id]);

    const handleEditClick = () => {
        setIsCollapseOpen(true); // Automatically expand the form when "Edit Horse" is clicked
    };

    return (
        <div>
            <h2>{horse.name}</h2>
            <p>{horse.year_of_birth} {horse.color} {horse.breed} {horse.sex}, {horse.height}hh</p>
            <h3>Notes</h3>
            <p>{horse.notes}</p>
            <p>Asking {horse.price}</p>
            <a href="#" onClick={handleEditClick}>Edit Horse</a>
            {isCollapseOpen && <CollapseForm horse={horse} />}
            <br />
            Delete Horse<br />
        </div>
    );
};

export default HorseInfo;