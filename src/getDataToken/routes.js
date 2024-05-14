const { Router } = require("express");
const controller = require('./Controller');
const router = Router();


router.get("/", controller.getDataFromToken);

module.exports = router;