import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Grid from '@react-css/grid'
import default_avatar from "../img/default_avatar.png";
import { handleSaveQuestionAnswer } from "../actions/answers";


const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

const QuestionPage = (props) => {
    const questions = props.questions;
    if (!Object.keys(questions).includes(props.id)) {
        return <h2 align="center">Error 404: page not found</h2>;
    }
    const question = questions[props.id];
    const user = props.users[props.authedUser];
    const author = props.users[question.author];
    const avatar = author.avatarURL || default_avatar;
    const optionOneSelected = question.optionOne.votes.includes(props.authedUser);
    const optionTwoSelected = question.optionTwo.votes.includes(props.authedUser);
    const answer = optionOneSelected || optionTwoSelected;
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;


    const handleVote = (e) => {
        //e.preventDefault();
        const { dispatch, questions, users, id, authedUser } = props;
        if (e.target !== undefined) {
            const answer = e.target.value;
            dispatch(
                handleSaveQuestionAnswer({
                    questions,
                    users,
                    authedUser,
                    qid: id,
                    answer,
                })
            );
        }
    };

    return (
        <div className="centered-page">
            <h1>Poll by {author.name}</h1>
            <img className="avatar-big" src={avatar} alt="" />
            <h2>Would You Rather</h2>

            <Grid autoFlow='column' as='section'>
                <div>
                    <p>{question.optionOne.text}</p>
                    {answer ? <><p>{question.optionOne.votes.length} votes ({Math.round(question.optionOne.votes.length * 10000 / totalVotes) / 100}%)</p></> : <button value="optionOne" onClick={handleVote}>Click</button>}
                    {answer && optionOneSelected && <p>(Your answer)</p>}
                </div><div>
                    <p>{question.optionTwo.text}</p>
                    {answer ? <><p>{question.optionTwo.votes.length} votes ({Math.round(question.optionTwo.votes.length * 10000 / totalVotes) / 100}%)</p></> : <button value="optionTwo" onClick={handleVote}>Click</button>}
                    {answer && optionTwoSelected && <p>(Your answer)</p>}
                </div>
            </Grid>
        </div>
    );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
    const { id } = props.router.params;


    return {
        id,
        questions,
        users,
        authedUser,
    };
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
