const express = require('express');
const router = express.Router();
const accountCtrl = require('../../controllers/api/account');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//current folder is api/account
router.get ('/', ensureLoggedIn,accountCtrl.get)
router.post('/',ensureLoggedIn,accountCtrl.create)
router.put ('/update',ensureLoggedIn, accountCtrl.update);


module.exports = router;
