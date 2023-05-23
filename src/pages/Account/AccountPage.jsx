import "./AccountPage.css"
import ShowAccountPage from './ShowAccountPage';
import EditAccountPage from './EditAccountPage';
import { useState,useRef,useEffect } from "react";
import { getAcct, createAcct } from "../../utilities/acct-service";

export default function AccountPage({account, setAccount}) {
  console.log("Account  in Account Page is...")
  console.log(account)
  
  return (
    <>
    { account.acctStatus ?
       <ShowAccountPage account={account} />
       :
       <EditAccountPage account = {account} setAccount={setAccount} />
    }
    </>
  )
  }


  