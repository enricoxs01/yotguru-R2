// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import { getVesselsAPI } from './vessel-api';
import { updateVesselAPI } from './vessel-api'
import { createVesselAPI } from './vessel-api';
import { deleteVesselAPI } from './vessel-api';
import { getVesselAPI } from './vessel-api';


export function createVessel(vessel) {
    return  createVesselAPI(vessel)
}

export async function getVessels() {
    return  getVesselsAPI()
}

export function deleteVessel(id){
    return deleteVesselAPI(id)
}

export function updateVessel(payload) {
    console.log( "into UPDATE VESSEL....")
    let res = updateVesselAPI(payload)
    console.log(" RES from UPDATE VESSEL is...", res)
    return res
}
