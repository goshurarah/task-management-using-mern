import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidenav from '../../components/sidenav/Sidenav'
import "./timesheets.css"
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

import totaltasks from '../../assets/tasks/totaltasks.png';
import totalprogress from '../../assets/tasks/totalprogress.png';
import totalpending from '../../assets/tasks/totalpending.png';
import totalcomplete from '../../assets/tasks/totalcomplete.png';
import { FcStatistics } from "react-icons/fc";
import AddTimesheetModal from './modals/AddTimesheet';
import axios from 'axios';

function Timesheets() {
  const [isAddTimesheetModalOpen, setIsAddTimesheetModalOpen] = useState(false);
  const [timesheetsData, setTimesheetsData] = useState([]);
  const [timesheetsStats, setTimesheetsStats] = useState({
    totalTimesheets: 0,
    developmentType: 0,
    testType: 0,
    otherType: 0,
  });
  const openAddTimesheetModal = () => {
    setIsAddTimesheetModalOpen(true);
  };

  const closeAddTimesheetModal = () => {
    setIsAddTimesheetModalOpen(false);
  };

  const getTimesheets = async () => {
    try {
      const response = await axios.get('api/timesheets')
      setTimesheetsData(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const getTimesheetsStats = async () => {
    try {
      const response = await axios.get('api/timesheets-stats')
      setTimesheetsStats(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    getTimesheets()
    getTimesheetsStats()
  }, [])
  return (
    <>
      <AddTimesheetModal isOpen={isAddTimesheetModalOpen} onClose={closeAddTimesheetModal} />
      <div className='app-main-container'>
        <div className='app-main-left-container'><Sidenav /></div>
        <div className='app-main-right-container'>
          <Navbar />
          <div className='task-status-card-container'>
            <div className='add-task-inner-div'>
              <FcStatistics className='task-stats' />
              <p className='todo-text'>Timesheets Statistics</p>
            </div>
            <div className='stat-first-row'>
              <div className='stats-container container-bg1'>
                <img className='stats-icon' src={totaltasks} alt="totaltasks" />
                <div>
                  <p className='stats-num'>{timesheetsStats.totalTimesheets}</p>
                  <p className='stats-text'>Total Timesheets</p>
                </div>
              </div>
              <div className='stats-container container-bg4'>
                <img className='stats-icon' src={totalcomplete} alt="totalcomplete" />
                <div>
                  <p className='stats-num'>{timesheetsStats.developmentType}</p>
                  <p className='stats-text'>Development Type</p>
                </div>
              </div>
            </div>
            <div className='stat-second-row'>
              <div className='stats-container container-bg2'>
                <img className='stats-icon' src={totalpending} alt="totalpending" />
                <div>
                  <p className='stats-num'>{timesheetsStats.testType}</p>
                  <p className='stats-text'>Testing Type</p>
                </div>
              </div>
              <div className='stats-container container-bg3'>
                <img className='stats-icon' src={totalprogress} alt="totalprogress" />
                <div>
                  <p className='stats-num'>{timesheetsStats.otherType}</p>
                  <p className='stats-text'>Other Type</p>
                </div>
              </div>
            </div>
          </div>
          <div className='table-main-header'>
            <p className='table-header-text'>Timesheets</p>
            <button className='table-btn' onClick={openAddTimesheetModal}><IoMdAdd />Add Timesheet</button>
          </div>
          <TableContainer className='table-main-container'>

            <Table variant='striped' colorScheme='teal'>
              <Thead>
                <Tr>
                  <Th>Notes</Th>
                  <Th>Employee</Th>
                  <Th>Project</Th>
                  <Th>Task</Th>
                  <Th>Progress</Th>
                  <Th>Time Spent</Th>
                  <Th>Created Date</Th>
                  <Th>Type</Th>
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

export default Timesheets