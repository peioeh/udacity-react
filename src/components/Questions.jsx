import Question from "./Question";
import Grid from '@react-css/grid'

const Questions = ({ questions }) => {
    return (
        <Grid autoFlow='column' as='section' autoColumns='min-content'>
            {questions.map((question) => (
                <Question key={question.id} question={question} />
            ))}
        </Grid>
    );
};


export default Questions;