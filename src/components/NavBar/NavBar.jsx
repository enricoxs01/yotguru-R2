import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className ="navigation">
      <div className="logo">
      <img src={require('../../images/logo.jpg')} alt='YOTGURU'></img>
      </div>
      <div className="loginDiv">
      <span className="userName" >Logged in as: {user.name}</span>
      </div>
        <div className="menuItems">
        <Link className="navLink" to="/vessels">My Vessels</Link>
        &nbsp; | &nbsp;
        <Link className="navLink" to="/account">My Account</Link>
        &nbsp;&nbsp;
        &nbsp;&nbsp;<Link className="navLink" to="" onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  );
}