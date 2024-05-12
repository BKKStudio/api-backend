const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", async (req, res) => {
    const products = await controller.getAllProduct(req, res);
    res.json(products);
});



module.exports = router;