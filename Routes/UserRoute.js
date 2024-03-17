const express = require('express');
const { getAllUser, addUser } = require('../Controllers/UserController');

const router = express.Router();

router.get("/all", getAllUser)
    .post("/", addUser)

module.exports = router;