import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { handleAddQuestion } from "../actions/questions";


const NewPoll = ({ users, authedUser, dispatch }) => {
    const navigate = useNavigate();
    const [optionOneText, setOptioOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");

    const handleChangeOption1 = (e) => {
        setOptioOneText(e.target.value);
    };
    const handleChangeOption2 = (e) => {
        setOptionTwoText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestion({ optionOneText, optionTwoText, author: users[authedUser].id }));

        setOptioOneText("");
        setOptionTwoText("");

        navigate("/");
    };


    return (
        <div className="centered-page">
            <h2>Would You Rather</h2>
            <p>Create Your Own Poll</p>
            <br />
            <form className="new-poll" onSubmit={handleSubmit}>
                <p>First option</p>
                <textarea className="textarea" id="first-option" name="first-option" rows="1" placeholder="Option One" value={optionOneText}
                    onChange={handleChangeOption1} />
                <p>Second option</p>
                <textarea className="textarea" id="first-option" name="first-option" rows="1" placeholder="Option Two" value={optionTwoText}
                    onChange={handleChangeOption2} />
                <button className="btn" type="submit" disabled={optionOneText === "" || optionTwoText === ""}>
                    Submit
                </button>
            </form>
        </div>);
};

const mapStateToProps = ({ users, authedUser }) => ({
    users,
    authedUser,
});

export default connect(mapStateToProps)(NewPoll);