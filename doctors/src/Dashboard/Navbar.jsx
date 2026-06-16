import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='navbar-top'>
      <div className='navbar-top-inner'>
        <input type='search' placeholder='Search Patients, ID, Phone' className='search-input'/>
        <div className='nav-inner'>
          <span className='home-btn'><CiHome size={16}/>&nbsp;Main Campus</span>
          <div className='bell-btn'>
            <IoIosNotificationsOutline size={24}/>
            <span className='red-dot'></span>
          </div>
          <div className='admin-section'>
            <span className='admin-data1'>Jennifer Thompson</span>
            <span className='admin-data2'>ICU Ward</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar