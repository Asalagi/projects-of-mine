import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      {members.map(member => (
        <div key={member.id}>
          <h2>{member.username}</h2>
          <button onClick={() => handleDelete(member.id)}>Delete</button>
        </div>
      ))}
      <form onSubmit={e => {
        e.preventDefault();
        handleCreate({ 
          username: e.target.elements.username.value, 
          password: e.target.elements.password.value, 
          email: e.target.elements.email.value
        });
      }}>
        <input name="username" placeholder="username" required />
        <input name="password" placeholder="password" required />
        <input name="email" placeholder="email" required />
        <button type="submit">Create new member</button>
      </form>
    </div>
  );
};

export default App;