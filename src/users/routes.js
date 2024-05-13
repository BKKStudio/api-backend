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

    
router.post("/", controller.addUser);


router.delete("/:id",  controller.reMoveUser);
   


module.exports = router;