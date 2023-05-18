import { Component } from 'react';
import { login } from '../../utilities/users-service';
import { Link } from "react-router-dom";
import SignUpForm from '../SignUpForm/SignUpForm';


export default class LoginForm extends Component {
    state = {
      name: '',
      password: '',
      error: ''
    };

    handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        // We don't want to send the 'error' or 'confirm' property,
        //  so let's make a copy of the state object, then delete them
        const formData = {...this.state};
          // The promise returned by the signUp service method 
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
        const user = await login(formData);
        console.log("User is ...")
        console.log(user)

        delete formData.error;
        delete formData.confirm;
      
      } catch {  
        // An error occurred 
        this.setState({ error: 'Login Failed - Try Again' });
        }
    };

    // The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
           [evt.target.name]: evt.target.value,
          error: ''
        });
    };

    render() {
      const disable = ((this.state.name === null) || (this.state.password === null));
      return (
        <div>
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <button type="submit" disabled={disable}>Login</button>
            </form>
          </div>
          <br></br>
            <Link to={'/signup'}> Please signup if you do not have an account established </Link> 
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      );
    };
  }