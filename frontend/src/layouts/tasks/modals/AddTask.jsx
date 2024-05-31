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
    Input,
    Textarea,
    Tag,
    Select,
} from '@chakra-ui/react';
import axios from 'axios';
import { useToast, Spinner } from '@chakra-ui/react';

function AddTaskModal({ isOpen, onClose }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [employeesData, setEmployeesData] = useState([]);
    const [projectsData, setProjectsData] = useState([]);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        assignTo: '',
        project: '',
        startDate: '',
        priority: 'Most Important'
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleTagClick = (priority) => {
        setFormData({ ...formData, priority });
    };

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
    const getProjects = async () => {
        try {
            const response = await axios.get('api/projects')
            setProjectsData(response.data)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        getEmployees()
        getProjects()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/task', formData);
            setFormData({
                title: '',
                description: '',
                assignTo: '',
                project: '',
                startDate: '',
                priority: 'Most Important'
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
                    <ModalHeader>Add Task</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input mt={3} mb={3} placeholder='Title' type='text' required name='title' value={formData.title} onChange={handleChange} />
                        <Textarea rows={7} mt={3} mb={3} placeholder='Description' type='text' required name='description' value={formData.description} onChange={handleChange} />
                        <Select mt={3} mb={3} placeholder='Assign To (Employee)' required name='assignTo' value={formData.assignTo} onChange={handleChange}>
                            {employeesData.map(employee => (
                                <option key={employee._id} value={employee._id}>{`${employee.firstName} ${employee.lastName}`}</option>
                            ))}
                        </Select>
                        <Select mt={3} mb={3} placeholder='Project' required name='project' value={formData.project} onChange={handleChange}>
                            {projectsData.map(project => (
                                <option key={project._id} value={project._id}>{project.title}</option>
                            ))}
                        </Select>
                        <Input mt={3} mb={3} placeholder='Start Date' type='date' required name='startDate' value={formData.startDate} onChange={handleChange} />

                        <div className='priority-container'>
                            <p>Priority: </p>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.priority === 'Most Important' ? 'red' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleTagClick('Most Important')}
                            >
                                <p className='tag-text'>Most Important</p>
                            </Tag>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.priority === 'Important' ? 'yellow' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleTagClick('Important')}
                            >
                                <p className='tag-text'>Important</p>
                            </Tag>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.priority === 'Least Important' ? 'green' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleTagClick('Least Important')}
                            >
                                <p className='tag-text'>Least Important</p>
                            </Tag>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='solid' color="white" bg='darkcyan' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='outline' type='submit'>{loading ? <Spinner color='green' /> : 'Add Task'}</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}

export default AddTaskModal;
