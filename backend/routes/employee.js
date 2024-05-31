const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Employee = require('../models/employees');


router.post('/employee', authMiddleware, async (req, res) => {
    try {
        const {
            employee_id,
            firstName,
            lastName,
            email,
            phone,
            residentialAddress,
            cnic,
            role,
            dateOfBirth,
            startDate,
            status,
            gender
        } = req.body;
        const existingEmployeeByEmail = await Employee.findOne({ email });
        if (existingEmployeeByEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const existingEmployeeByCnic = await Employee.findOne({ cnic });
        if (existingEmployeeByCnic) {
            return res.status(400).json({ message: 'CNIC already exists' });
        }

        const newEmployee = new Employee({
            employee_id,
            firstName,
            lastName,
            email,
            phone,
            residentialAddress,
            cnic,
            role,
            dateOfBirth,
            startDate,
            status,
            gender
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee added successfully' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.send(employees)
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/employees-stats', async (req, res) => {
    try {
        const totalEmployees = await Employee.countDocuments();
        const activeEmployees = await Employee.countDocuments({ status: 'Active' });
        const inActiveEmployees = await Employee.countDocuments({ status: 'In Active' });
        const terminatedEmployees = await Employee.countDocuments({ status: 'Terminated' });

        const employeesStats = {
            totalEmployees,
            activeEmployees,
            inActiveEmployees,
            terminatedEmployees,
        };

        res.status(200).json(employeesStats);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});
module.exports = router