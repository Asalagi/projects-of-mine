import React from 'react';
import axios from 'axios';

function Register() {

    const handleCreate = (newHorse) => {
        axios.post('http://localhost:3001/horses', newHorse)
        .then(response => {
            console.log(response);
            if (response.data.success) {
                window.alert('Successfully registered!');
            }
        })
        .catch(error => console.error(`There was an error creating this horse: ${error}`));
    };

    return (
        <div>
            <h1>Please fill out the form</h1>
            <div>
            <form onSubmit={e => {
              e.preventDefault();
              handleCreate({
                  name: e.target.elements.name.value,
                  breed: e.target.elements.breed.value,
                  month_of_birth: e.target.elements.month_of_birth.value,
                  year_of_birth: e.target.elements.year_of_birth.value,
                  sex: e.target.elements.sex.value,
                  height: e.target.elements.height.value,
                  color: e.target.elements.color.value,
                  price: e.target.elements.price.value,
                  notes: e.target.elements.notes.value,
                });
             }}>
                <label>Horse's Name:</label>
                <input type="text" name="name" required /><br/>
                <label>Horse's Breed:</label>
                <select name="breed" required>
                <option value=" ">--Choose a breed</option>
                <option value="Paint Horse">Paint Horse</option>
                <option value="Quarter Horse">Quarter Horse</option>
                <option value="Arabian">Arabian</option>
                <option value="Thoroughbred">Thoroughbred</option>
                </select><br/>
                <label>Horse's Birthdate:</label>
                <select name="month_of_birth" required>
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
                </select> <label>Year Born:</label>
                <input type="text" name="year_of_birth" required /><br/>
                <label>Horse's Sex:</label>
                <select name="sex" required>
                <option value=" ">--Choose a sex</option>
                <option value="Colt">Colt</option>
                <option value="Filly">Filly</option>
                <option value="Gelding">Gelding</option>
                <option value="Mare">Mare</option>
                <option value="Stallion">Stallion</option>
                </select><br/>
                <label>Horse's Height:</label>
                <input type="text" name="height" required /><br/>
                <label>Color:</label>
                <input type="text" name="color" required /><br/>
                <label>Price:</label>
                <input type="text" name="price" required /><br/>
                <label>Notes:</label>
                <textarea name="notes" required /><br/>
                <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register;