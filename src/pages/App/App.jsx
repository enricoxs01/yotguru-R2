import { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getAcct } from '../../utilities/acct-service'
import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import VesselPage from '../VesselPage/VesselPage';
import AccountPage from '../Account/AccountPage';
import NavBar from '../../components/NavBar/NavBar';
import { createAcct } from '../../utilities/acct-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [account, setAccount] = useState({})

  useEffect(function() {
    console.log("WE are In UseEffect.....")

    async function createAccount(user) {
      console.log("creating account from APP...")
      const newAct = await createAcct()
    }

    async function getAccount() {
      const act = await getAcct()
                  .then (data=> console.log("act is ", act))

      if (act !== null) {setAccount(act);}
      else { 
        let newAct = createAccount(user)
        setAccount(newAct)}
    }
    getAccount()
  }, [user, account]);

  return (
    <main className="App">
      { user ?
          <>
           <NavBar user={user} setUser={setUser} />
           <Routes>
               {/* Route components in here */}
                <Route path="/vessels" element={<VesselPage user={user} />} />
                <Route path="/account" element={<AccountPage account={account} setAccount={setAccount} />} />
           </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
