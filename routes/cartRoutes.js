const express = require('express');
const router = express.Router();
const cartApi = require('../apis/cartApis');

// GET all cart items
router.get("/fetch", cartApi.fetchAllCartItems);

// POST a new cart item
router.post("/post", cartApi.insertCartItem);

// PUT update quantity of an existing cart item based on u_name and p_id
router.put("/:u_name/:p_id", cartApi.updateCartItem);

// DELETE a cart item based on u_name and p_id
router.delete("/delete/:u_name/:p_id", cartApi.deleteCartItem);

module.exports = router;
