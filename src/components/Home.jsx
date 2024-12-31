import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import Questions from './Questions';

const Home = ({ users, authedUser, questions }) => {

  const user = users[authedUser];
  const answeredQuestionsIDs = Object.keys(user.answers);

  const sortedQuestions = Object.values(questions).sort(
    (a, b) => b.timestamp - a.timestamp
  )

  const answeredQuestions = sortedQuestions.filter(question => answeredQuestionsIDs.includes(question.id));
  const newQuestions = sortedQuestions.filter(question => !answeredQuestionsIDs.includes(question.id));
  const [showNewQuestions, setShowNewQuestions] = useState(true);

  return (
    <div>
      <div>
        <button onClick={() => setShowNewQuestions(!showNewQuestions)} className={`toggle-button ${showNewQuestions ? 'off' : 'on'}`}>
          {showNewQuestions ? 'Show Done' : 'Show New Questions'}
        </button>
      </div>
      {showNewQuestions ? (
        <>
          <h2>New questions</h2>
          <Questions questions={newQuestions} />
        </>
      ) : (
        <>
          <h2>Done</h2>
          <Questions questions={answeredQuestions} />
        </>
      )}
    </div>
  );

};

const mapStateToProps = ({ users, authedUser, questions }) => ({
  users,
  authedUser,
  questions
});

export default connect(mapStateToProps)(Home);