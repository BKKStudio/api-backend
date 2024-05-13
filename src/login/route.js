const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", async (req, res) => {
    const user = await controller.getuser(req, res);
    res.json(user);
});
router.post("/", controller.getlogin);

module.exports = router;