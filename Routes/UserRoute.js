const express = require('express');
const { getAllUser } = require('../Controllers/UserController');

const router = express.Router();

router.get("/all", getAllUser)

module.exports = router;