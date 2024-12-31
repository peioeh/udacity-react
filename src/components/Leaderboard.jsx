import { connect } from "react-redux";
import React from 'react';
import default_avatar from "../img/default_avatar.png";


const LeaderBoard = ({ users }) => {

  const sortedUsers = Object.values(users).sort((a, b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length));

  return (
    <div>
      <h2>LeaderBoard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr key={user.id}>
              <td>
                <div className="leaderboard-avatar"><img src={user.avatarURL || default_avatar} alt="" className="avatar" /></div>
                <div className="leaderboard-name">{user.name}<br />{user.id}</div>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(LeaderBoard);