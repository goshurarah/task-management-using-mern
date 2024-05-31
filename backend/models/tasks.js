const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    assignTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ['Most Important', 'Important', 'Least Important'],
        required: true,
    },
});

module.exports = mongoose.model('Task', taskSchema);
