const router = require("express").Router();
const path = require("path");

// const rootDir = require("../utils/path");
const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getAddProducts);

router.get("/products", adminController.getProducts);

router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:id", adminController.getEditProduct);

router.post("/edit-product", adminController.postEditProduct);

module.exports = router;
