import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from './UserContext';
import './app-style.css';

import Register from './register';
import Login from './login';
import LoginSuccess from './success';
import PrivateRoute from './privateroute';
import Account from './account'; 
import Members from './members';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }), [isLoggedIn, currentUser]);

  return (
<UserContext.Provider value={value}>
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login-success" element={<LoginSuccess />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account/:id" element={<PrivateRoute><Account /></PrivateRoute>} />
      <Route path="/members" element={<PrivateRoute><Members /></PrivateRoute>} />
    </Routes>
  </Router>
</UserContext.Provider>
  );
}

export default App;