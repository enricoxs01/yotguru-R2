import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import sendRequest from '../../utilities/send-request';
import React from 'react'
import "./ShowAccountPage.css"

export default function ShowAccountPage({acct}) {
  const [account, setAccount] = useState({})
    
  useEffect(function() {
    async function getAccount() {
            await sendRequest('/api/account')
            .then ((res)=> setAccount(res))
                  }
    getAccount()
  },[])

    return (
      <> 
        <main className="accountView">
        <div className="form-container" style={{textAlign: 'center'}}>
              <img className='boatImage' src={require('../../images/logo.jpg')}  alt={'yotguru page'} />
              <h2>ACCOUNT NUMBER: {account.actNumber}</h2>
              <p className='text'>Belongs to: {account.firstName} {  } {account.middleNameInitial} {  } {account.lastName} </p>
              <p className='text'>Email: {account.email} </p>
              <p className='text'>Phone: +{account.countryCode} {  } {account.phone} </p>
              <Link className="accountLink" to="/account/edit">Edit</Link>
                 {  }
              {/*<Link className="accountLink" to="/account/cancel">Cancel Subscription</Link>*/}
        </div>
      </main>
     </>
    );
  }