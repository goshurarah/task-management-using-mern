const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendances');

function convertTo24Hour(time12h) {
    const [time, period] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    if (period === 'PM' && hours < 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes}`;
}

function calculateDuration(timeIn, timeOut) {
    const timeInDate = new Date(`2000-01-01T${convertTo24Hour(timeIn)}`);
    const timeOutDate = new Date(`2000-01-01T${convertTo24Hour(timeOut)}`);

    const timeDiff = timeOutDate - timeInDate;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return { hours, minutes };
}

router.post('/attendance', async (req, res) => {
    try {
        const { employeeId, day, timeIn, timeOut } = req.body;

        let existingAttendance = await Attendance.findOne({ employee: employeeId, day: day });

        if (existingAttendance && timeOut && existingAttendance.timeIn) {

            const { hours, minutes } = calculateDuration(existingAttendance.timeIn, timeOut);
            // Update existing attendance record
            existingAttendance.timeOut = timeOut;
            existingAttendance.workingHours = `${hours} hour:${minutes} minutes`;
            await existingAttendance.save();
            res.status(200).json({ message: 'Time Out Marked Successfully' });
        } else if (timeIn) {
            if (!existingAttendance) {
                const newAttendance = new Attendance({
                    employee: employeeId,
                    day: day,
                    timeIn: timeIn,
                    timeOut: null,
                    workingHours: null,
                });
                await newAttendance.save();
                res.status(201).json({ message: 'Time In Marked Successfully' });
            } else {
                res.status(400).json({ message: 'TimeIn Is Already Exist In Attendance Sheet' });
            }
        } else {
            res.status(400).json({ message: 'TimeIn Is Missing' });
        }
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

module.exports = router;