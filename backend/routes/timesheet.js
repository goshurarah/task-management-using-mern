const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Timesheet = require('../models/timesheets');


router.post('/timesheet', async (req, res) => {
    try {
        const { notes, employee, project, task, progress, timeSpent, date, type } = req.body;

        const newTimesheet = new Timesheet({ notes, employee, project, task, progress, timeSpent, date, type });

        await newTimesheet.save();
        res.status(201).json({ message: 'Timesheet added successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/timesheets', async (req, res) => {
    try {
        const timesheets = await Timesheet.find();
        res.send(timesheets)
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/timesheets-stats', async (req, res) => {
    try {
        const totalTimesheets = await Timesheet.countDocuments();
        const developmentType = await Timesheet.countDocuments({ type: 'Development' });
        const testType = await Timesheet.countDocuments({ type: 'Testing' });
        const otherType = await Timesheet.countDocuments({ type: 'Other' });

        const timesheetsStats = {
            totalTimesheets,
            developmentType,
            testType,
            otherType,
        };

        res.status(200).json(timesheetsStats);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
module.exports = router