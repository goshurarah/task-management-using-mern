import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import axios from 'axios';
import { useToast, Spinner } from '@chakra-ui/react';

function AddProjectModal({ isOpen, onClose }) {
    const toast = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        clientName: '',
        startDate: '',
        status: 'On Hold',
        priority: 'Most Important'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleStatusClick = (status) => {
        setFormData({ ...formData, status });
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/project', formData);
            setFormData({
                title: '',
                description: '',
                clientName: '',
                startDate: '',
                status: 'On Hold',
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
                    <ModalHeader>Add Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input mt={3} mb={3} placeholder='Title' type='text' name='title' value={formData.title} onChange={handleChange} required/>
                        <Textarea rows={7} mt={3} mb={3} placeholder='Description' type='text' name='description' value={formData.description} onChange={handleChange} required/>
                        <Input mt={3} mb={3} placeholder='Client Name' type='text' name='clientName' value={formData.clientName} onChange={handleChange} required />
                        <Input mt={3} mb={3} placeholder="Start Date" type="date" name='startDate' value={formData.startDate} onChange={handleChange} required />

                        <div className='priority-container'>
                            <p>Status: </p>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.status === 'On Hold' ? 'red' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleStatusClick('On Hold')}
                            >
                                <p className='tag-text'>On Hold</p>
                            </Tag>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.status === 'In Progress' ? 'blue' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleStatusClick('In Progress')}
                            >
                                <p className='tag-text'>In Progress</p>
                            </Tag>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.status === 'Testing' ? 'yellow' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleStatusClick('Testing')}
                            >
                                <p className='tag-text'>Testing</p>
                            </Tag>
                            <Tag
                                size='lg'
                                cursor={'pointer'}
                                colorScheme={formData.status === 'Completed' ? 'green' : 'gray'}
                                borderRadius='full'
                                onClick={() => handleStatusClick('Completed')}
                            >
                                <p className='tag-text'>Completed</p>
                            </Tag>
                        </div>
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
                        <Button variant='outline' type='submit'>{loading ? <Spinner color='green' /> : 'Add Project'}</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    );
}

export default AddProjectModal;
