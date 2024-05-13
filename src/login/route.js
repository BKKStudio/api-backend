const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", controller.getuser)

router.post("/", async (req, res) => {
    const user = await controller.getlogin(req, res);
    res.json(user);
});

module.exports = router;