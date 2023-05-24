import sendRequest from './send-request';
const BASE_URL = '/api/vessels';

export async function createVesselAPI (payload) {
  return sendRequest(`${BASE_URL}/add`,'POST',payload)
}

export async function getVesselAPI() {
  return sendRequest(`${BASE_URL}`)
}
