import * as React from 'react';
import "./navbar.css";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
function Navbar() {
    return (
        <div className='nav-main-container'>
            <div><p className='nav-main-text'>Dash<span>Board</span></p></div>
            <div className='nav-search-container'>
                <input placeholder='Search your task here...' />
                <div className='task-read'>
                    <IoIosSearch className='read-icon' />
                </div>
            </div>
            <div className='nav-notification-container'>
                <div className='task-read'>
                    <IoIosNotifications  className='read-icon' />
                </div>
                <div>
                    <p className='nav-day-text'>Tuesday</p>
                    <p className='nav-date-text'>20/06/2023</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar