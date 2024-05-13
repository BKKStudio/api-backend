const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", async (req, res) => {
    const user = await controller.getuser(req, res);
    res.json(user);
});
router.post("/", async (req, res) => {
    const user = await controller.getlogin(req, res);
    res.json(user);
});

module.exports = router;