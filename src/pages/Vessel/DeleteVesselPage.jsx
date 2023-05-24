import { useParams, useNavigate } from "react-router-dom";
import { deleteVessel } from "../../utilities/vessel-service";

export default function DeleteVesselPage() {
    const navigate = useNavigate();
    const params = useParams();
    console.log("PARAMS in Delete Vessel is ", params)

    function handleSubmit(evt){
        evt.preventDefault()
        try {
           deleteVessel(params)
          } 
        catch (err) {
          console.log("failed to delete vessel")
        }
        
        navigate('/vessels',{replace: true})
    }

    return (
        <>
         <div className="form-container" >
        <h1> Are you certain you want to remove this vessel? </h1>
        <form onSubmit={handleSubmit}>
        <button type="submit">DELETE</button>
        </form>
      </div>
        </>
    )
}