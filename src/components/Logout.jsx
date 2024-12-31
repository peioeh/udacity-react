import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';

import { setAuthedUser } from '../actions/authedUser';
import authedUser from "../reducers/authedUser";

const Logout = ({ authedUser, dispatch }) => {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(null));
    navigate('/');
  };

  return (
    <div>
      <p>You are logged as {authedUser}. Click below to logout</p>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Logout);