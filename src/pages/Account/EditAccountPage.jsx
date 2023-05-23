import { useState } from "react"
import { updateAcct } from "../../utilities/acct-service"

export default function EditAccountPage({account, setAccount}) {
    const [tempAcct, setTempAcct] = useState(account)
    console.log("EDIT ACCOUNT ...")
    console.log(account)

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
          await updateAcct(tempAcct)
          setAccount(tempAcct)
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
        <h3 style={{fontWeight: "bold"}}> Account Status: {tempAcct.acctStatus ? "complete" : "incomplete"} </h3>

        <form autoComplete="off" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" value={tempAcct.firstnName} onChange={handleChange} required />
        <label>Middle Initial</label>
        <input type="text" name="middleInitial" value={tempAcct.middleNameInitial} onChange={handleChange} required />
        <label>Last Name</label>
        <input type="text" name="lastName" value={tempAcct.lastName} onChange={handleChange} required />
        <label> Country Code: + {tempAcct.countryCode}</label>
        <input type="text" name="countryCode" value={tempAcct.countryCode} onChange={handleChange} />
        <label> Phone: {account.phone} </label>
        <input type="text" name="phone" value={tempAcct.phone} onChange={handleChange}  />
        <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
}