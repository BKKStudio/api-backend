const { Router } = require("express");
const controller = require("./controller");
const router = Router();

router.get("/", async (req, res) => {
    const product = await controller.getAllProduct(req, res);
    res.json(product);
});


router.get("/:id", async (req, res) => {
    const Product = await controller.getฺProductById (req, res);
    res.json(Product);
});

router.post("/", controller.AddProduct);

router.delete("/:id",controller.removeProduct)

router.put("/:id", controller.editProduct);

module.exports = router;