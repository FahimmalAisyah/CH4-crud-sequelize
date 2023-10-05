const router = require("express").Router();

const Product = require("./ProductRouter");

router.use("/api/v1/", Product);

module.exports = router;

