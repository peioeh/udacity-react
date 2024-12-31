import { showLoading, hideLoading } from "react-redux-loading-bar";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
import { saveQuestion } from "../utils/api";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addUserQuestion(user_question) {
  return {
    type: ADD_USER_QUESTION,
    user_question,
  };
}


export function handleAddQuestion({ optionOneText, optionTwoText, author }) {

  return (dispatch) => {

    dispatch(showLoading());

    return saveQuestion({
      optionOneText, optionTwoText, author
    })
      .then((question) => {
        dispatch(addQuestion({ [question.id]: question }));
        dispatch(addUserQuestion({ author, qid: question.id }));
      }).then(() => dispatch(hideLoading()));
  };
}