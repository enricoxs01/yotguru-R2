const express = require('express');
const router = express.Router();
const vesselsCtrl = require('../../controllers/api/vessels');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//current folder is api/vessels
router.get ('/', ensureLoggedIn,vesselsCtrl.get)
router.post('/add',ensureLoggedIn,vesselsCtrl.create)
//router.put ('/update',ensureLoggedIn, vesselsCtrl.update);


module.exports = router;
