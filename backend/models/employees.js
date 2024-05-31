const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employee_id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, required: true },
    residentialAddress: { type: String, required: true },
    cnic: { type: String, unique: true, required: true },
    role: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    startDate: { type: Date, required: true },
    status: { type: String, required: true },
    gender: { type: String, required: true },
});

module.exports = mongoose.model('Employee', employeeSchema);
