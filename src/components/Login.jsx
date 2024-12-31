import { connect } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import React, { useState } from 'react';

import { setAuthedUser } from '../actions/authedUser';

const Login = ({ users, dispatch }) => {
  const location = useLocation();

  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
      console.log("authed user set to " + selectedUser);
      navigate(location);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedUser} onChange={handleChange}>
          <option value="" disabled>Select a user</option>
          {Object.keys(users).map((userId) => (
            <option key={userId} value={userId}>
              {users[userId].name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={!selectedUser}>
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Login);