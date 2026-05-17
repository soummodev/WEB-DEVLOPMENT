import "./user.css";
import PropTypes from "prop-types";

function User(props) {
  const wm = <h2 className="true">Welcome {props.username}</h2>;
  const cm = <h2 className="false">Please log in</h2>;
  return props.isLoggedin ? wm : cm;
}

User.proptype = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string,
    
}
User.defaultProps = {
    isLoggedin: false,
    username:"guest"
}


export default User;
