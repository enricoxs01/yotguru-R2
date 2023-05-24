import { useState } from "react"
import { updateAcct } from "../../utilities/acct-service"
import { useNavigate } from "react-router-dom"

export default function EditAccountPage({account, setAccount}) {
    const [tempAcct, setTempAcct] = useState(account)
    console.log("EDIT ACCOUNT ...", tempAcct)

    const navigate = useNavigate()

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
          await updateAcct(tempAcct)
          setAccount(tempAcct)
          navigate('/account')
          } 
        catch (err) {
          console.log("failed to update account")
        }
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
        <input type="text" name="firstName" value={tempAcct.firstnName} onChange={handleChange}  />
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