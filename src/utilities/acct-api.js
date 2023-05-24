import sendRequest from './send-request';
const BASE_URL = '/api/account';

export async function getAcctAPI() {
  return sendRequest(`${BASE_URL}`);
}

export async function updateAcctAPI (payload) {
  return sendRequest(`${BASE_URL}/update`,'PUT',payload)
}
