import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions";
import { UPDATE_QUESTION_ANSWERS } from "../actions/answers";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        ...action.question,
      };
    case UPDATE_QUESTION_ANSWERS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
