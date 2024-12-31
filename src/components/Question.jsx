import { useNavigate, Link } from "react-router-dom";
import getUserLocale from 'get-user-locale';

const Question = ({ question }) => {
    const navigate = useNavigate();
    const toQuestionPage = (e, id) => {
        e.preventDefault();
        navigate(`/questions/${id}`);
    };
    var timestamp = new Date(question.timestamp).toLocaleString(getUserLocale())

    return (
        <div className="question-tile" key={question.id}>
            <h3>{question.author}</h3>
            <p>{timestamp}</p>
            <button
                className="show-question"
                onClick={(e) => toQuestionPage(e, question.id)}
            >
                Show
            </button>

        </div>
    );
};


export default Question;