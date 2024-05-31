import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidenav from '../../components/sidenav/Sidenav'
import "./attendance.css"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { IoMdAdd } from "react-icons/io";

// import totaltasks from '../../assets/tasks/totaltasks.png';
// import totalprogress from '../../assets/tasks/totalprogress.png';
// import totalpending from '../../assets/tasks/totalpending.png';
// import totalcomplete from '../../assets/tasks/totalcomplete.png';
// import { FcStatistics } from "react-icons/fc";
import AddAttendanceModal from './modals/AddAttendance';

function Attendance() {
  const [isAddAttendanceModalOpen, setIsAddAttendanceModalOpen] = useState(false);
  const openAddAttendanceModal = () => {
    setIsAddAttendanceModalOpen(true);
  };

  const closeAddAttendanceModal = () => {
    setIsAddAttendanceModalOpen(false);
  };

  return (
    <>
      <AddAttendanceModal isOpen={isAddAttendanceModalOpen} onClose={closeAddAttendanceModal} />
      <div className='app-main-container'>
        <div className='app-main-left-container'><Sidenav /></div>
        <div className='app-main-right-container'>
          <Navbar />
          {/* <div className='task-status-card-container'>
            <div className='add-task-inner-div'>
              <FcStatistics className='task-stats' />
              <p className='todo-text'>Attendance Statistics</p>
            </div>
            <div className='stat-first-row'>
              <div className='stats-container container-bg1'>
                <img className='stats-icon' src={totaltasks} alt="totaltasks" />
                <div>
                  <p className='stats-num'>1200</p>
                  <p className='stats-text'>Total Timesheets</p>
                </div>
              </div>
              <div className='stats-container container-bg4'>
                <img className='stats-icon' src={totalcomplete} alt="totalcomplete" />
                <div>
                  <p className='stats-num'>1200</p>
                  <p className='stats-text'>Development Type</p>
                </div>
              </div>
            </div>
            <div className='stat-second-row'>
              <div className='stats-container container-bg2'>
                <img className='stats-icon' src={totalpending} alt="totalpending" />
                <div>
                  <p className='stats-num'>1200</p>
                  <p className='stats-text'>Testing Type</p>
                </div>
              </div>
              <div className='stats-container container-bg3'>
                <img className='stats-icon' src={totalprogress} alt="totalprogress" />
                <div>
                  <p className='stats-num'>1200</p>
                  <p className='stats-text'>Other Type</p>
                </div>
              </div>
            </div>
          </div> */}
          <div className='table-main-header'>
            <p className='table-header-text'>Attendance</p>
            <button className='table-btn' onClick={openAddAttendanceModal}><IoMdAdd />Add Attendance</button>
          </div>
          <TableContainer className='table-main-container'>

            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th>Day</Th>
                  <Th>Time In</Th>
                  <Th>Time Out</Th>
                  <Th>Mark Attendance</Th>
                  <Th>Working Hours</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                </Tr>
                <Tr>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                  <Td>inches</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>


    </>
  )
}

export default Attendance