const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", async (req, res) => {
    const product = await controller.getAllProduct(req, res);
    res.json(product);
});



module.exports = router;