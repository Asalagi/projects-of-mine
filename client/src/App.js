import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app-style.css';

const App = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = () => {
    axios.get('http://localhost:3001/')
      .then(response => {
        if (Array.isArray(response.data)) {
          setMembers(response.data);
        } else {
          console.error('The server response was not an array');
        }
      })
      .catch(error => console.error(`There was an error fetching members: ${error}`));
  };

  const handleCreate = (newMember) => {
    axios.post('http://localhost:3001/member', newMember)
      .then(response => {
        console.log(response);
        fetchMembers();
      })
      .catch(error => console.error(`There was an error creating the member: ${error}`));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/member/${id}`)
      .then(response => {
        console.log(response);
        fetchMembers();
      })
      .catch(error => console.error(`There was an error deleting the member: ${error}`));
  };

  return (
    <div>
    <div class="reg-box">
      <form onSubmit={e => {
        e.preventDefault();
        handleCreate({ 
          username: e.target.elements.username.value, 
          password: e.target.elements.password.value, 
          email: e.target.elements.email.value
        });
      }}>
        <input class="input-text" name="username" placeholder="username" required /><br/>
        <input class="input-text" name="password" placeholder="password" required /><br/>
        <input class="input-text" name="email" placeholder="email" required /><br/> 
        <button class="btn-center-submit" type="submit">Create new member</button>
      </form>
      </div>
      <div class="member-box">
      {members.map(member => (
        <div key={member.id}>
          <p>{member.id} - {member.username} - {member.email} - 
          <button onClick={() => handleDelete(member.id)}>Delete</button></p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default App;