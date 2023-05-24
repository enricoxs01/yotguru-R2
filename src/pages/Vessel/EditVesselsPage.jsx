import { useNavigate, useParams } from "react-router-dom";
import { updateVessel } from "../../utilities/vessel-service";
import { useEffect, useState } from "react";
import sendRequest from '../../utilities/send-request';

export default function EditVesselPage({vessels, hack,setHack}) {
    const params = useParams();

    var vessel = vessels.find( ves => {
        return ves._id === params.id
      })


    const [tempVessel, setTempVessel] = useState(vessel)
    const navigate = useNavigate();
    
    async function handleSubmit(evt) {
        evt.preventDefault()

        try { await updateVessel(tempVessel)} 
        catch (err) {
          console.log("failed to update account")
        }
        navigate('/vessels',{replace: 'true'})
    }

    function handleChange(evt) {
        evt.preventDefault()
        setTempVessel({ ...tempVessel, [evt.target.name]: evt.target.value });
      }


    return (
        <div className="form-container">
        <h1> Edit Vessel </h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <label> Name</label>
        <input type="text" name="name" value={tempVessel.name} onChange={handleChange}  />
        <label>HullID</label>
        <input type="text" name="hullId" value={tempVessel.hullId} onChange={handleChange}  />
        <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
}
