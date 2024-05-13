const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", async (req, res) => {
    const product = await controller.getAllProduct(req, res);
    res.json(product);
});


router.get("/:id", async (req, res) => {
    const user = await controller.getฺProductById (req, res);
    res.json(user);
});

module.exports = router;