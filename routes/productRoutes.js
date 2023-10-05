const router = require("express").Router();

const Product = require("../controller/productController");

router.post("/product", Product.createProduct);

module.exports = router;