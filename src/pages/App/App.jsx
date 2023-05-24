import { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import AccountPage from '../Account/AccountPage';
import EditAccountPage from '../Account/EditAccountPage';
import CancelAccountPage from '../Account/CancelAccountPage';
import AddPhotoPage from '../Account/AddPhotoPage';
import NavBar from '../../components/NavBar/NavBar';
import sendRequest from '../../utilities/send-request';
import ShowVesselsPage from '../Vessel/ShowVesselsPage';
import AddVesselsPage from '../Vessel/AddVesselsPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [account, setAccount] = useState({})

  useEffect(function() {
    async function getAccount() {
      const act = 
            await sendRequest('/api/account')
            .then ((res)=> {
              setAccount(res)
            })
    }
    getAccount()

  }, []);

  return (
    <main className="App">
      { user ?
          <>
           <NavBar user={user} setUser={setUser} />
           <Routes>
               {/* Route components in here */}
                <Route path="/vessels" element={<ShowVesselsPage />} />
                <Route path="/vessels/add" element={<AddVesselsPage />} />
                <Route path="/account" element={<AccountPage account={account} setAccount={setAccount} />} />
                <Route path="/account/edit" element={<EditAccountPage account={account} setAccount={setAccount} />} />
                <Route path="/account/cancel" element={<CancelAccountPage account={account} setAccount={setAccount} />} />
                <Route path="/account/addPhoto" element={<AddPhotoPage account={account} setAccount={setAccount} />} />
           </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
