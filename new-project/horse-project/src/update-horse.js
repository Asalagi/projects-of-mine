
import React, { useState } from 'react';
import { getHorses } from '../../models/horse-model';

function CollapseForm({horse, onUpdate}) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [updateHorse, setUpdateHorse] = useState({
        name: horse.name,
        breed: horse.breed,
        month_of_birth: horse.month_of_birth,
        year_of_birth: horse.year_of_birth,
        sex: horse.sex,
        height: horse.height,
        color: horse.color,
        price: horse.price,
        notes: horse.notes,
    });

    const handleCollapseForm = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUpdateHorse((prevHorse) => ({
            ...prevHorse,
            [name]: value, 
        }));
    };

    const handleUpdateHorse = (updateHorseInfo) => {
        onUpdate(updateHorseInfo);
        setIsCollapsed(true);
    };

    return (
        <div>
            <button onClick={handleCollapseForm}>
                {isCollapsed ? 'Expand' : 'Collapse'}
            </button>
            {!isCollapsed && (
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={updateHorseInfo.name} onChange={handleInputChange} />
                    <button onClick={handleUpdateHorse}>Update Horse Info</button>
                </div>
            )}
        </div>
    )
}