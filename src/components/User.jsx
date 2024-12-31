import { connect } from "react-redux";

const User = ({ users, authedUser }) => {
    const user = users[authedUser];
    return (
        <div>
            {user ? (
                <>
                    <img className="avatar" src={user.avatarURL} alt="" />
                    <span>{user.name}</span>
                </>
            ) : (
                ""
            )}
        </div>
    );
};

const mapStateToProps = ({ users, authedUser }) => ({
    authedUser,
    users
});

export default connect(mapStateToProps)(User);