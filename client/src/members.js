import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './app-style.css';

const Members = () => {
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

  return (
    <div className="member-box">
      <table className="member-table">
        <thead className="member-thead">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.username}</td>
              <td>{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;