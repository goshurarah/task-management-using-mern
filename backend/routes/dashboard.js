const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const User = require('../models/users');


router.get('/dashboard', async (req, res) => {
    try {
        const existingUser = await User.find();
        res.send(existingUser)
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

module.exports = router