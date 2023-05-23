import  {CCard,CCardImage,CCardBody,CCardText,CCardTitle,CListGroup,CListGroupItem,CCardLink,CRow,CCol}  from '@coreui/react';
import React from 'react'
import "./AccountPage.css"
import { getAcct } from '../../utilities/acct-service';

export default function ShowAccountPage({account}) {

    return (
      <> 
        <main className="accountView">
          <div className="accountCard">
            <h1> SHOW ACCOUNT </h1>
          <CCard className="mb-3" style={{ maxWidth: '540px' }}>
            <CRow className="g-0">
            <CCol md={4}>
              <CCardImage src={require('../../images/logo.jpg') } />
            </CCol>
            <CCol md={8}>
              <CCardBody>
                <CCardTitle>ACCOUNT NUMBER: {account.actNumber} </CCardTitle>
                <CCardText>
                Belongs to: {account.firstName} {  } {account.middleNameInitial} {  } {account.lastName} 
                </CCardText>
                </CCardBody>
                <CListGroup flush>
                  <CListGroupItem>Email: {account.email}</CListGroupItem>
                  <CListGroupItem>Phone: +{account.countryCode} {  } {account.phone}</CListGroupItem>
                </CListGroup>
              <CCardBody>
                <CCardLink className="accountLink" href="#">Edit</CCardLink>
                 {  }
                <CCardLink className="accountLink" href="#">Cancel Subscription</CCardLink>
                  {  }
                <CCardLink className="accountLink" href="#">Add Photo </CCardLink>
              </CCardBody>
            </CCol>
            </CRow>
        </CCard>
        </div>
      </main>
     </>
    );
  }