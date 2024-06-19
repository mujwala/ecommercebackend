const express = require('express');
const router = express.Router();
const productApi = require('../apis/productApis');

router.get("/fetch", productApi.products_all);
router.post("/insert", productApi.insert_product);
router.put("/update", productApi.update_product);
router.delete("/delete", productApi.delete_product);

module.exports = router;
