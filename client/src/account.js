import React from 'react';
import { useParams } from 'react-router-dom';

const Account = () => {
  const { id } = useParams(); 

  return (
    <div>
      <h1>Welcome to your account, user {id}!</h1>
    </div>
  );
};

export default Account;