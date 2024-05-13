const { Router } = require("express");
const controller = require("./controller");
const router = Router();


router.get("/", async (req, res) => {
    const users = await controller.getAllUsers(req, res);
    res.json(users);
});

router.get("/:id", async (req, res) => {
    const user = await controller.getUserฺById(req, res);
    res.json(user);
});

    
router.post("/", async (req, res) => {
    const Newuser = await controller.addUser(req, res);
    res.json(Newuser);
});


router.delete("/:id", async (req, res) => {
    const user = await controller.reMoveUser(req, res);
    res.json(user);
});


module.exports = router;