import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import sendRequest from "../../utilities/send-request"
import "./ShowVesselsPage.css"

export default function ShowVesselsPage() {
  //vessels is an array of vessels that needs to be formatted
  const [vessels, setVessels] = useState([])

useEffect ( function() {
  async function getVessels() {
    await sendRequest('/api/vessels')
    .then ((res) => setVessels(res))
  }

  getVessels()
},[])

  return (
    <>
    { vessels.length ?
        <main>
            <div className="showVessels">
              { vessels.map((vessel) => {
                return (
                  <div key={vessel.hullId}className="vesselCard"> 
                    <div className="form-container" style={{textAlign: 'center'}}>
                      <h2>Vessel {vessel.name}</h2>
                      <p> Hull Id:      {vessel.hullId}</p>
                      <p> LOA:          {vessel.LOA} </p>
                      <p> Manufacturer: {vessel.manufacturer} </p>
                      <p> Model:        {vessel.model} </p>
                      <p> Model Year:   {vessel.modelYear} </p>
                      <Link className = "vesselLink" to={{pathname:`/vessels/edit/${vessel._id}`}}> Edit </Link>
                      <Link className = "vesselLink" to={{pathname:`/vessels/delete/${vessel._id}`}}> Delete</Link>
                    </div>
                  </div>
                 );
                })};
            </div>
            <div className = "addVesselLink">
                <Link className = "button"  to='/vessels/add'> Add Vessel</Link>
            </div>
        </main>
        :
        <div>
             <h5> There are no vessels to show. Please proceed to add new vessels</h5>
             <Link to='/vessels/add'> Add Vessel</Link> 
        </div>
    }
    </>
  )
}
