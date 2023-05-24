import { updateAcct } from "../../utilities/acct-service"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function EditAccountPage({account, setAccount}) {
    const altAccount = account
    const navigate = useNavigate()
    const [tempAcct, setTempAcct] = useState({...account})
    
    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
          await updateAcct(tempAcct)
          console.log("Handle Submit in EDIT ACCOUNT the account is set to ", account)
          } 
        catch (err) {
          console.log("failed to update account")
        }
        setAccount(tempAcct)
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