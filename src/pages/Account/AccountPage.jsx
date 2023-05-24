import ShowAccountPage from './ShowAccountPage';
import EditAccountPage from './EditAccountPage';

export default function AccountPage({account, setAccount}) {
  
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


  