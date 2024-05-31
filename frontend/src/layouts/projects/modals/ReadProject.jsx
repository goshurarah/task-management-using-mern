import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Tag,
} from '@chakra-ui/react';
import { MdDelete } from "react-icons/md";
function ReadProjectModal({ isOpen, onClose }) {

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" closeOnOverlayClick={false} isCentered>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader>Read Project</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <div className='task-card-container'>
                        <p className='task-title'>Attend Nischal’s Birthday
                            Party</p>
                        <div className='task-desc-container'>
                            <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
                        </div>
                        <div className='task-card-footer-container'>
                            <div>
                                <Tag size='lg' colorScheme='red' borderRadius='full'>
                                    <p className='tag-text'>Most Important</p>
                                </Tag>
                            </div>
                            <div>
                                <div className='task-read'>
                                    <MdDelete  className='read-icon' />
                                </div>
                            </div>
                        </div>
                        <p className='created'>Created on: 20/06/2023</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant='solid' color="white" bg='darkcyan' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ReadProjectModal;
