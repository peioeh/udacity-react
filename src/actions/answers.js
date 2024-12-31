import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestionAnswer } from "../utils/api";
export const UPDATE_QUESTION_ANSWERS = "UPDATE_QUESTION_ANSWERS";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";


function updateQuestionAnswers(questions) {
    return {
        type: UPDATE_QUESTION_ANSWERS,
        questions,
    };
}

function updateUserAnswers(users) {
    return {
        type: UPDATE_USER_ANSWERS,
        users,
    };
}


export function handleSaveQuestionAnswer({ users, questions, authedUser, qid, answer }) {

    const updatedQuestions = {
        ...questions,
        [qid]: {
            ...questions[qid],
            [answer]: {
                ...questions[qid][answer],
                votes: questions[qid][answer].votes.concat([authedUser])
            }
        }
    }

    const updatedUsers = {
        ...users,
        [authedUser]: {
            ...users[authedUser],
            answers: {
                ...users[authedUser].answers,
                [qid]: answer
            }
        }
    }

    return (dispatch) => {

        dispatch(showLoading());

        return saveQuestionAnswer({
            authedUser, qid, answer
        })
            .then(() => dispatch(updateQuestionAnswers(updatedQuestions)))
            .then(() => dispatch(updateUserAnswers(updatedUsers)))
            .then(() => dispatch(hideLoading()));
    };
}