// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import { getAcctAPI } from './acct-api';
import { updateAcctAPI } from './acct-api'

export function getAcct() {
    return  getAcctAPI()
}

export function updateAcct(payload) {
    return updateAcctAPI(payload)
}
