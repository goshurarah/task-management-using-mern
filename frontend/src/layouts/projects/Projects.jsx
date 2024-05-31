import React, { useState } from 'react'
import Sidenav from '../../components/sidenav/Sidenav'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import "./projects.css"
import pending from '../../assets/tasks/Pending.png';
import complete from '../../assets/tasks/complete.png';
import book from '../../assets/tasks/Book.png';
import totaltasks from '../../assets/tasks/totaltasks.png';
import totalprogress from '../../assets/tasks/totalprogress.png';
import totalpending from '../../assets/tasks/totalpending.png';
import totalcomplete from '../../assets/tasks/totalcomplete.png';
import { IoReaderOutline } from "react-icons/io5";
import { FcStatistics } from "react-icons/fc";
import Navbar from '../../components/navbar/Navbar'
import {
  Tag,
} from '@chakra-ui/react'
import AddProjectModal from './modals/AddProject';
import ReadProjectModal from './modals/ReadProject';
import { IoMdAdd } from "react-icons/io";


function Projects() {
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isReadProjectModalOpen, setIsReadProjectModalOpen] = useState(false);

  const openAddProjectModal = () => {
    setIsAddProjectModalOpen(true);
  };
  const openReadProjectModal = () => {
    setIsReadProjectModalOpen(true);
  };

  const closeAddProjectModal = () => {
    setIsAddProjectModalOpen(false);
  };
  const closeReadProjectModal = () => {
    setIsReadProjectModalOpen(false);
  };

  return (
    <>
      <AddProjectModal isOpen={isAddProjectModalOpen} onClose={closeAddProjectModal} />
      <ReadProjectModal isOpen={isReadProjectModalOpen} onClose={closeReadProjectModal} />
      <div className='app-main-container'>
        <div className='app-main-left-container'><Sidenav /></div>
        <div className='app-main-right-container'>
          <Navbar />
          <div className='dashboard-main-container'>
            <div className='dashboard-main-left-container'>
              <div className='task-status-card-container'>
                <div className='add-task-inner-div'>
                  <FcStatistics className='task-stats' />
                  <p className='todo-text'>Projects Statistics</p>
                </div>
                <div className='stat-first-row'>
                  <div className='stats-container container-bg1'>
                    <img className='stats-icon' src={totaltasks} alt="totaltasks" />
                    <div>
                      <p className='stats-num'>1200</p>
                      <p className='stats-text'>Total Projects</p>
                    </div>
                  </div>
                  <div className='stats-container container-bg4'>
                    <img className='stats-icon' src={totalcomplete} alt="totalcomplete" />
                    <div>
                      <p className='stats-num'>1200</p>
                      <p className='stats-text'>Completed</p>
                    </div>
                  </div>
                </div>
                <div className='stat-second-row'>
                  <div className='stats-container container-bg2'>
                    <img className='stats-icon' src={totalprogress} alt="totalprogress" />
                    <div>
                      <p className='stats-num'>1200</p>
                      <p className='stats-text'>In Progress</p>
                    </div>
                  </div>
                  <div className='stats-container container-bg3'>
                    <img className='stats-icon' src={totalpending} alt="totalpending" />
                    <div>
                      <p className='stats-num'>1200</p>
                      <p className='stats-text'>Pending</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='add-task-main-container'>
                <div className='add-task-main-div'>
                  <div className='add-task-inner-div'>
                    <img src={pending} alt="pending" />
                    <p className='todo-text'>To-Do Projects</p>
                  </div>
                  <button className='table-btn-task' onClick={openAddProjectModal}><IoMdAdd />Add Project</button>

                </div>
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
                      <div className='task-read' onClick={openReadProjectModal}>
                        <IoReaderOutline className='read-icon' />
                      </div>
                    </div>
                  </div>
                  <p className='created'>Created on: 20/06/2023</p>
                </div>
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
                        <IoReaderOutline className='read-icon' />
                      </div>
                    </div>
                  </div>
                  <p className='created'>Created on: 20/06/2023</p>
                </div>
              </div>
            </div>

            <div className='dashboard-main-right-container'>
              <div className='task-status-card-container'>
                <div className='add-task-inner-div'>
                  <img src={complete} alt="complete" />
                  <p className='todo-text'>Projects Status</p>
                </div>
                <div className='task-status-progress-main-container'>
                  <div>
                    <CircularProgress value={80} color='#05A301' size={'100px'}>
                      <CircularProgressLabel>80%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='completed'>Completed</p>
                  </div>
                  <div>
                    <CircularProgress value={60} color='#0225FF' size={'100px'}>
                      <CircularProgressLabel>60%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='progress'>In Progress</p>

                  </div>
                  <div>
                    <CircularProgress value={40} color='orange' size={'100px'}>
                      <CircularProgressLabel>40%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='testing'>Testing</p>

                  </div>
                  <div>
                    <CircularProgress value={20} color='#F21E1E' size={'100px'}>
                      <CircularProgressLabel>20%</CircularProgressLabel>
                    </CircularProgress>
                    <p className='pending'>Pending</p>
                  </div>
                </div>
              </div>
              <div className='add-task-main-container'>
                <div className='add-task-main-div'>
                  <div className='add-task-inner-div'>
                    <img src={book} alt="Book" />
                    <p className='todo-text'>In Progress Projects</p>
                  </div>
                </div>
                <div className='task-card-container'>
                  <p className='task-title'>Attend Nischal’s Birthday
                    Party</p>
                  <div className='task-desc-container'>
                    <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
                  </div>
                  <div className='task-card-footer-container'>
                    <div>
                      <Tag size='lg' colorScheme='blue' borderRadius='full'>
                        <p className='tag-text'>In Progress</p>
                      </Tag>
                    </div>
                    <div>
                      <div className='task-read'>
                        <IoReaderOutline className='read-icon' />
                      </div>
                    </div>
                    <div>
                      <CircularProgress value={40} color='#0225FF'>
                        <CircularProgressLabel>40%</CircularProgressLabel>
                      </CircularProgress>
                    </div>
                  </div>
                </div>
              </div>
              <div className='add-task-main-container'>
                <div className='add-task-main-div'>
                  <div className='add-task-inner-div'>
                    <img src={book} alt="Book" />
                    <p className='todo-text'>Testing Projects</p>
                  </div>
                </div>
                <div className='task-card-container'>
                  <p className='task-title'>Attend Nischal’s Birthday
                    Party</p>
                  <div className='task-desc-container'>
                    <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
                  </div>
                  <div className='task-card-footer-container'>
                    <div>
                      <Tag size='lg' colorScheme='orange' borderRadius='full'>
                        <p className='tag-text'>Testing</p>
                      </Tag>
                    </div>
                    <div>
                      <div className='task-read'>
                        <IoReaderOutline className='read-icon' />
                      </div>
                    </div>
                    <div>
                      <CircularProgress value={40} color='orange'>
                        <CircularProgressLabel>40%</CircularProgressLabel>
                      </CircularProgress>
                    </div>
                  </div>
                </div>
              </div>
              <div className='add-task-main-container'>
                <div className='add-task-main-div'>
                  <div className='add-task-inner-div'>
                    <img src={book} alt="Book" />
                    <p className='todo-text'>Completed Projects</p>
                  </div>
                </div>
                <div className='task-card-container'>
                  <p className='task-title'>Attend Nischal’s Birthday
                    Party</p>
                  <div className='task-desc-container'>
                    <p className='task-desc'>Buy gifts on  way and pick up cake frothem the bakery. (6 PM | Fresh Elements).....n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | n  way and pick up cake frothem the bakery. (6 PM | </p>
                  </div>
                  <div className='task-card-footer-container'>
                    <div>
                      <Tag size='lg' colorScheme='green' borderRadius='full'>
                        <p className='tag-text'>Completed</p>
                      </Tag>
                    </div>
                    <div>
                      <div className='task-read'>
                        <IoReaderOutline className='read-icon' />
                      </div>
                    </div>
                  </div>
                  <p className='created'>Completed 2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects