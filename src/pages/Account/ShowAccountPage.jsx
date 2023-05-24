import  {CCardLink}  from '@coreui/react';
import React from 'react'
import "./AccountPage.css"

export default function ShowAccountPage({account}) {

    return (
      <> 
        <main className="accountView">
          <div className="accountCard">
            <h1> SHOW ACCOUNT </h1>
              <img className='boatImage' src={require('../../images/logo.jpg') } />
              <h2>ACCOUNT NUMBER: {account.actNumber}</h2>
              <p className='text'>Belongs to: {account.firstName} {  } {account.middleNameInitial} {  } {account.lastName} </p>
              <p className='text'>Email: {account.email} </p>
              <p className='text'>Phone: +{account.countryCode} {  } {account.phone} </p>
              <CCardLink className="accountLink" href="/account/edit">Edit</CCardLink>
                 {  }
              <CCardLink className="accountLink" href="/account/cancel">Cancel Subscription</CCardLink>
                  {  }
              <CCardLink className="accountLink" href="/account/addPhoto">Add Photo </CCardLink>
        </div>
      </main>
     </>
    );
  }