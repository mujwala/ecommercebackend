const express = require('express');
const router = express.Router();
const userApis = require('../apis/userApis');

router.post("/fetch", userApis.auth_user);
router.post("/insert", userApis.user_inserted);
router.put("/update", userApis.update_user);
router.delete("/delete", userApis.delete_user);
module.exports = router;