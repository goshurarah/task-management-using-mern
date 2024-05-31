const mongoose = require('mongoose');

const timesheetSchema = new mongoose.Schema({
    notes: {
        type: String,
        required: true,
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
    },
    progress: {
        type: Number,
        required: true,
    },
    timeSpent: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        enum: ['Development', 'Testing', 'Other'],
        required: true,
    }
});

module.exports = mongoose.model('Timesheet', timesheetSchema);
