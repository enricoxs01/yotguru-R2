import { Link } from "react-router-dom";

export default function ShowVesselsPage({vessels}) {
  //vessels is an array of vessels that needs to be formatted

  return (
    <>
    { vessels.length?
        <div>
            <div>
              { vessels.map((vessel) => {
                return (
                  <div> 
                    <div className="form-container" style={{textAlign: 'start'}}>
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
              }) }
            </div>
            <div className = "addVesselLink">
                <Link to='/vessels/add'> Add Vessel</Link>
            </div>
        </div>
        :
        <div>
             <h1> There are no vessels to show. Please proceed to add new vessels</h1>
             <Link to='/vessels/add'> Add Vessel</Link> 
        </div>
    }
    </>
  )
}
