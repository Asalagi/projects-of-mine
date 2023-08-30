import React, { useState } from 'react';

function CollapseForm({ horse, onUpdate }) {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateHorse((prevHorse) => ({
            ...prevHorse,
            [name]: value,
        }));
    };

    const handleUpdateHorse = () => {
        onUpdate(updateHorse);
    };

    return (
        <div>
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={updateHorse.name} onChange={handleInputChange} />
                <button type="button" onClick={handleUpdateHorse}>Update Horse Info</button>
            </form>
        </div>
    );
}

export default CollapseForm;
