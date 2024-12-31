import { RECEIVE_USERS } from "../actions/users";
import { UPDATE_USER_ANSWERS } from "../actions/answers";
import { ADD_USER_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_USER_ANSWERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUESTION:
      const { author, qid } = action.user_question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(qid)
        }
      };
    default:
      return state;
  }
}
