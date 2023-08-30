import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import CollapseForm from './update-horse';

function HorseInfo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [horse, setHorse] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdatedHorse = (updatedHorseInfo) => {
        axios.put(`http://localhost:3001/horses/${id}`, updatedHorseInfo)
        .then(response => {
            console.log("Horse information was updated successfully", response.data);
            setHorse(response.data);
            setIsEditing(false);
        })
        .catch(error => {
            console.log("Error has occured and horse had not been updated", error);
        });
    }

    const handleDeleteHorse = () => {
        axios.delete(`http://localhost:3001/horses/${id}`)
        .then(response => {
            console.log(`Horse with ID of ${id} has been deleted successfully`, response.data);
            navigate('/delete-horse');
        })
        .catch(error => {
            console.log("An error has occurred, and horse can not be deleted", error)
        });
    }
    
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
            <button onClick={() => setIsEditing(true)}>Edit Horse</button>
            {isEditing && <CollapseForm horse={horse} onUpdate={handleUpdatedHorse} />}
            <br />
            <button onClick={handleDeleteHorse}>Delete Horse</button>
        </div>
    );
}

export default HorseInfo;
