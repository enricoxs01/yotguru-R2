import { Link } from "react-router-dom";
import { getVessels } from "../../utilities/vessel-service";

export default function ShowVesselsPage() {
  //vessels is an array of vessels that needs to be formatted

  const renderVessels =   getVessels()
  console.log("VESSELS>>> ",renderVessels)


  return (
    <>
    { renderVessels.length?
        <div>
            {renderVessels}
            <Link to='/vessels/add'> Add Vessel</Link>
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
