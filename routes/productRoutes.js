const router = require("express").Router();

const Product = require("../controller/productController");

router.post("/product", Product.createProduct);

const uploader = required("../controller/productController");

module.exports = router;