const { Router } = require("express");
const controller = require("./controller");
const router = Router();


router.post("/", async (req, res) => {
    const user = await controller.getlogin(req, res);
    res.json(user);
});

module.exports = router;