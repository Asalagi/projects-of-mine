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
                <label>Name: </label>
                <input type="text" name="name" value={updateHorse.name} onChange={handleInputChange} /><br/>
                <label>Breed: </label>
                <select name="breed" value={updateHorse.breed} onChange={handleInputChange}>
                <option value=" ">--Choose a breed</option>
                <option value="Paint Horse">Paint Horse</option>
                <option value="Quarter Horse">Quarter Horse</option>
                <option value="Arabian">Arabian</option>
                <option value="Thoroughbred">Thoroughbred</option>
                </select><br/>
                <label>Horse's Birthdate: </label>
                <select name="month_of_birth" value={updateHorse.month_of_birth} onChange={handleInputChange}>
                <option value=" ">--Choose a month</option>
                <option value="Jan">JAN</option>
                <option value="Feb">FEB</option>
                <option value="Mar">MAR</option>
                <option value="Apr">APR</option>
                <option value="May">MAY</option>
                <option value="Jun">JUN</option>
                <option value="Jul">JUL</option>
                <option value="Aug">AUG</option>
                <option value="Sep">SEP</option>
                <option value="Oct">OCT</option>
                <option value="Nov">NOV</option>
                <option value="Dec">DEC</option>
                </select>
                <input type="text" name="year_of_birth" value={updateHorse.year_of_birth} onChange={handleInputChange} /><br/>
                <label>Height: </label>
                <input type="text" name="height" value={updateHorse.height} onChange={handleInputChange} />hh<br/>
                <label>Color: </label>
                <input type="text" name="color" value={updateHorse.color} onChange={handleInputChange} /><br/>
                <label>Price: </label>
                <input type="text" name="price" value={updateHorse.price} onChange={handleInputChange} /><br/>
                <label>Notes: </label>
                <textarea type="text" name="notes" value={updateHorse.notes} onChange={handleInputChange} /><br/>
                <button type="button" onClick={handleUpdateHorse}>Update Horse Info</button>
            </form>
        </div>
    );
}

export default CollapseForm;
