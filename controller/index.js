const {Router} = require("express");
const router = Router();

const region = require('./region');
const login = require('./login')
router.use(region);
router.use(login);

module.exports = router;