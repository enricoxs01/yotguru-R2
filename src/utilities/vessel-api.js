import sendRequest from './send-request';
const BASE_URL = '/api/vessels';

export async function createVesselAPI (payload) {
  return sendRequest(`${BASE_URL}/add`,'POST',payload)
}

export async function getVesselsAPI() {
  return sendRequest(`${BASE_URL}`)
}

export async function deleteVesselAPI(payload) {
  return sendRequest(`${BASE_URL}/delete`,'DELETE',payload)
}

export async function updateVesselAPI (payload) {
  return sendRequest(`${BASE_URL}/update`,'PUT',payload)
}