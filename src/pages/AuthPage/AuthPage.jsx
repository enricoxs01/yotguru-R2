import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser, setAcct }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="welcome-container">
      <h1>Welcome to Yotguru</h1>
      { showSignUp ?
          <SignUpForm setUser={setUser} setAcct={setAcct} />
          :
          <LoginForm setUser={setUser}  setAcct={setAcct} />
      }
      <button className="authButton" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>

    </main>
  );
}