const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Task = require('../models/tasks');


router.post('/task', async (req, res) => {
    try {
        const {
            title,
            description,
            assignTo,
            project,
            startDate,
            priority
        } = req.body;

        const newTask = new Task({
            title,
            description,
            assignTo,
            project,
            startDate,
            priority
        });

        await newTask.save();
        res.status(201).json({ message: 'Task added successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks)
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
module.exports = router