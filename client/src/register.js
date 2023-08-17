import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './app-style.css';

function Register() {
    let navigate = useNavigate();

    const handleCreate = (newMember) => {
        axios.post('http://localhost:3001/member', newMember)
        .then(response => {
            console.log(response);
            if (response.data.success) {
                navigate('/login');
            }
        })
        .catch(error => console.error(`There was an error creating the member: ${error}`));
    };
    return (
     <div className="reg-box">
       <form onSubmit={e => {
          e.preventDefault();
          handleCreate({
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
            email: e.target.elements.email.value
          });
        }}>
          <h2>Register</h2>
          <input className="input-text" name="username" placeholder="username" required /><br />
          <input className="input-text" name="password" placeholder="password" required /><br />
          <input className="input-text" name="email" placeholder="email" required /><br />
          <button className="btn-center-submit" type="submit">Register</button>
        </form>
      </div>
    );
}

export default Register;