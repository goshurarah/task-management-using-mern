import React, { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select,
} from '@chakra-ui/react';
import axios from 'axios';
import { useToast, Spinner } from '@chakra-ui/react';

function AddAttendanceModal({ isOpen, onClose }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [employeesData, setEmployeesData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [attendanceType, setAttendanceType] = useState('');

    const token = localStorage.getItem("tm_token");
    const axiosInstance = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    const getEmployees = async () => {
        try {
            const response = await axios.get('api/employees')
            setEmployeesData(response.data)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const getCurrentDate = () => {
        const date = new Date();
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        return formattedDate;
    };

    const getCurrentTime = () => {
        const date = new Date();
        const formattedTime = `${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
        return formattedTime;
    };
    useEffect(() => {
        getEmployees()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/attendance', {
                employeeId: selectedEmployee,
                day: getCurrentDate(),
                timeIn: attendanceType === 'time_in' ? getCurrentTime() : null,
                timeOut: attendanceType === 'time_out' ? getCurrentTime() : null,
            });
            let Message = response.data.message
            toast({
                title: Message,
                status: 'success',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
            onClose();
        } catch (error) {
            let Error = error.response.data.message
            toast({
                title: Error,
                status: 'error',
                position: 'top',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
        }
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false} isCentered>
            <ModalOverlay />
            <ModalContent >
                <form onSubmit={handleSubmit}>
                    <ModalHeader>Add Attendance</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Select mt={3} mb={3} placeholder='Employee' onChange={(e) => setSelectedEmployee(e.target.value)} required>
                            {employeesData.map(employee => (
                                <option key={employee._id} value={employee._id}>{`${employee.firstName} ${employee.lastName}`}</option>
                            ))}
                        </Select>
                        <Select mt={3} mb={3} placeholder='Attendance' onChange={(e) => setAttendanceType(e.target.value)} required>
                            <option value='time_in'>Time In</option>
                            <option value='time_out'>Time Out</option>
                        </Select>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='solid' color="white" bg='darkcyan' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='outline' type='submit'>{loading ? <Spinner color='green' /> : 'Add Attendance'}</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}

export default AddAttendanceModal;
