import { updateAcct } from "../../utilities/acct-service"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import sendRequest from '../../utilities/send-request';


export default function EditAccountPage() {
    const navigate = useNavigate()
    const [tempAcct, setTempAcct] = useState({})
    
    useEffect(function() {
      async function getAccount() {
              await sendRequest('/api/account')
              .then ((res)=> setTempAcct(res))
                    }
      getAccount()
    },[])

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
          await updateAcct(tempAcct)
          } 
        catch (err) {
          console.log("failed to update account")
        }
        //setAccount(tempAcct)
        navigate('/account',{replace: true})
    }

    function handleChange(evt) {
        evt.preventDefault()
        setTempAcct({ ...tempAcct, [evt.target.name]: evt.target.value });
      }

    return (
      <div className="form-container">
        <h1> Edit account {tempAcct.acctNumber}</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" value={tempAcct.firstName} onChange={handleChange}  />
        <label>Middle Initial</label>
        <input type="text" name="middleNameInitial" value={tempAcct.middleNameInitial} onChange={handleChange}  />
        <label>Last Name</label>
        <input type="text" name="lastName" value={tempAcct.lastName} onChange={handleChange}  />
        <label> Country Code: +</label>
        <input type="text" name="countryCode" value={tempAcct.countryCode} onChange={handleChange} />
        <label> Phone: </label>
        <input type="text" name="phone" value={tempAcct.phone} onChange={handleChange}  />
        <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
}