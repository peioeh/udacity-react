import React from 'react'
import { connect } from "react-redux";
import Login from './Login';

const RequireAuth = (props) => {
    if (!props.isLoggedIn) {
        return <Login />;
    }
    return props.children;
};


const mapStateToProps = ({ authedUser }) => ({
    isLoggedIn: authedUser !== null,
});

export default connect(mapStateToProps)(RequireAuth);