import React, { useState, useEffect } from 'react';
import { getMembers, createMember, deleteMember } from '../../models/member.js'; // ensure this path is correct

const App = () => {
  const [members, setMembers] = useState([]);

  // Fetch members when the component mounts
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = () => {
    getMembers()
      .then(result => {
        if (Array.isArray(result)) {
          setMembers(result);
        } else {
          console.error('getMembers did not return an array');
        }
      })
      .catch(error => console.error(`There was an error fetching members: ${error}`));
  };

  const handleCreate = (newMember) => {
    createMember(newMember)
      .then(response => {
        console.log(response);
        fetchMembers(); // refetch members to update the UI
      })
      .catch(error => console.error(`There was an error creating member: ${error}`));
  };

  const handleDelete = (id) => {
    deleteMember(id)
      .then(response => {
        console.log(response);
        fetchMembers(); // refetch members to update the UI
      })
      .catch(error => console.error(`There was an error deleting member: ${error}`));
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