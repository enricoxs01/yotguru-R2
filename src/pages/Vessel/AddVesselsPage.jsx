import { useState } from "react"
import { createVessel } from "../../utilities/vessel-service"

export default function AddVesselsPage() {
    //vessels is an array of vessels that needs to be formatted
    console.log("Into Add Vessels ")

    const [tempVessel, setTempVessel] = useState({})

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
          await createVessel(tempVessel)
          } 
        catch (err) {
          console.log("failed to create new vessel")
        }
    }

    function handleChange(evt) {
        evt.preventDefault()
        setTempVessel({ ...tempVessel, [evt.target.name]: evt.target.value });
      }
  
    return (
      <>
        <h1> ADD VESSEL </h1>
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Vessel's Name: </label>
        <input type="text" name="name" value={tempVessel.name} onChange={handleChange}  />
        <label>HULL ID: </label>
        <input type="text" name="hullId" value={tempVessel.hullId} onChange={handleChange}  />
        <label>LOA: </label>
        <input type="text" name="LOA" value={tempVessel.LOA} onChange={handleChange}  />
        <label> Manufacturer: </label>
        <input type="text" name="manufacturer" value={tempVessel.manufacturer} onChange={handleChange} />
        <label> Model: </label>
        <input type="text" name="model" value={tempVessel.model} onChange={handleChange}  />
        <label> Model Year: </label>
        <input type="text" name="modelYear" value={tempVessel.modelYear} onChange={handleChange}  />
        <button type="submit">SUBMIT</button>
        </form>
      </div>
      </>
    )
  }
  