const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    clientName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['On Hold', 'In Progress', 'Testing', 'Completed'],
        required: true,
    },
    priority: {
        type: String,
        enum: ['Most Important', 'Important', 'Least Important'],
        required: true,
    },
});

module.exports = mongoose.model('Project', projectSchema);
