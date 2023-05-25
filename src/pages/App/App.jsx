import { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import AccountPage from '../Account/AccountPage';
import EditAccountPage from '../Account/EditAccountPage';
import NavBar from '../../components/NavBar/NavBar';
import sendRequest from '../../utilities/send-request';
import ShowVesselsPage from '../Vessel/ShowVesselsPage';
import AddVesselsPage from '../Vessel/AddVesselsPage';
import EditVesselPage from '../Vessel/EditVesselsPage';
import DeleteVesselPage from '../Vessel/DeleteVesselPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [account, setAccount] = useState({})
  const [vessels, setVessels] = useState([])

  useEffect(function() {
    async function getAccount() {
            await sendRequest('/api/account')
            .then ((res)=> setAccount(res))
            
    }
    getAccount()
  
    async function getVessels() {
                   await sendRequest('/api/vessels')
                   .then ((res) => setVessels(res))
      console.log("VESSELS in useEffect is set to ...", vessels)
    }
    getVessels()
  }, []); 




  return (
    <main className="App">
      { user ?
          <>
           <NavBar user={user} setUser={setUser} />
           <Routes>
               {/* Route components in here */}
                <Route path="/vessels" element={<ShowVesselsPage vessels={vessels}/>} />
                <Route path="/vessels/add" element={<AddVesselsPage />} />
                <Route path="/vessels/edit/:id" element={<EditVesselPage vessels={vessels} setVessels={setVessels}/>} />
                <Route path="/vessels/delete/:id" element={<DeleteVesselPage />} />

                <Route path="/account" element={<AccountPage account={account}/>} />
                <Route path="/account/edit" element={<EditAccountPage account={account} />} />
           </Routes>
          </>
          :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
