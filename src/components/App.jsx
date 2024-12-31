import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import RequireAuth from './RequireAuth'
import Nav from "./Nav";
import Login from "./Login";
import NewPoll from "./NewPoll";
import Logout from "./Logout";
import LeaderBoard from "./Leaderboard";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);


  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Nav />
        {
          props.loading === true ? null : (
            <Routes>
              <Route path="/" exact element={<RequireAuth><Home /></RequireAuth>} />
              <Route path="/logout" exact element={<RequireAuth><Logout /></RequireAuth>} />
              <Route path="/leaderboard" exact element={<RequireAuth><LeaderBoard /></RequireAuth>} />
              <Route path="/add" exact element={<RequireAuth><NewPoll /></RequireAuth>} />
              <Route path="/question/:id" element={<RequireAuth><QuestionPage /></RequireAuth>} />
            </Routes>
          )
        }
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ users }) => ({
  loading: users === null,
});

export default connect(mapStateToProps)(App);
