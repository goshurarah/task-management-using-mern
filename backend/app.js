const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');



// Routes Imports
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');
const employeeRoute = require('./routes/employee');
const projectRoute = require('./routes/project');
const taskRoute = require('./routes/task');
const timesheetRoute = require('./routes/timesheet');
const attendanceRoute = require('./routes/attendance');

const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API's
app.use('/api', authRoute);
app.use('/api', dashboardRoute);
app.use('/api', employeeRoute);
app.use('/api', projectRoute);
app.use('/api', taskRoute);
app.use('/api', timesheetRoute);
app.use('/api', attendanceRoute);

// Server Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
