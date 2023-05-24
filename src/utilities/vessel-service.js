// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import { getVesselAPI } from './vessel-api';
//import { updateVesselAPI } from './vessel-api'
import { createVesselAPI } from './vessel-api';

export function createVessel(vessel) {
    return  createVesselAPI(vessel)
}

export function getVessels() {
    return  getVesselAPI()
}


/*
export function updateVessel(payload) {
    return updateVesselAPI(payload)
}*/
