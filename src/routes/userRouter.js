const router = require('express').Router();
const user = require('../controller/userController')

router.post('/createVendor',user.createVendor);
router.post('/userRegistration',user.userRegistration);

module.exports = router;