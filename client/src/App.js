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
      <div className="reg-box">
        <form onSubmit={e => {
          e.preventDefault();
          handleCreate({
            username: e.target.elements.username.value,
            password: e.target.elements.password.value,
            email: e.target.elements.email.value
          });
        }}>
          <input className="input-text" name="username" placeholder="username" required /><br />
          <input className="input-text" name="password" placeholder="password" required /><br />
          <input className="input-text" name="email" placeholder="email" required /><br />
          <button className="btn-center-submit" type="submit">Create new member</button>
        </form>
      </div>
      <div className="member-box">
        <table className="member-table">
          <thead className="member-thead">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.username}</td>
                <td>{member.email}</td>
                <td>
                  <button onClick={() => handleDelete(member.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;