import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import vector from "./Vector.png";
import taskimg from "./task.png";
import admin from "./admin.png";
import medicareicon from "./mediicon.png";
import wrong from "./wrong.png";
import { CiLogin } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { ImLab } from "react-icons/im";
import { RiAdminLine } from "react-icons/ri";
import { RiPulseFill } from "react-icons/ri";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">

      <div className="header">
        <div className="header-content">
        <RiPulseFill style={{color:'white',backgroundColor:'#00A6F4',fontSize:'20px',borderRadius:'5px'}} />
          <div className="medicare-data">MediCare HIS</div>
        </div>
        <div>
          <img src={wrong} className="wrong-content" width="20px" height="20px" alt="close" />
        </div>
      </div>

      <div className="dashboard-item">
        <Link to="/" className="text-decoration-none py-2">
          <span className={`dashboard ${location.pathname === '/' ? 'active' : ''}`}>
            <RiDashboardLine size={20} />
            &nbsp; Dashboard
          </span>
        </Link>
      </div>

      <Link to="/appointments" className="sidebar-items text-decoration-none text-secondary py-3">
        <span className="bed-management">
          <MdOutlineBed size={20} />
          &nbsp; My Appointements
        </span>
      </Link>

      <Link to="/patients" className="sidebar-items text-decoration-none text-secondary py-3">
        <span className="patient">
          <RxPeople size={20} />
          &nbsp; Patient Records
        </span>
      </Link>

      <Link to="/emr" className="sidebar-items text-decoration-none text-secondary py-3">
        <span className="vital">
          <img src={vector} width={20} height={20} alt="vitals" />
          &nbsp; EMR
        </span>
      </Link>

      <Link to="/prescriptions" className="sidebar-items text-decoration-none text-secondary py-3">
        <span className="task">
          <img src={taskimg} width={20} height={20} alt="tasks" />
          &nbsp; Prescriptions
        </span>
      </Link>
      <Link to="/lab-records" className="sidebar-items text-decoration-none text-secondary py-3">
        <span className="task">
          <ImLab  style={{height:'20px',width:'20px'}}/>
          &nbsp; Lab records
        </span>
      </Link>

      <div className="sidebar-footer">
        <div className="footer-admin">
        <RiAdminLine style={{color:'#00BCFF'}} />
          <div>
            <p className="admin-name">Jennifer Thompson</p>
            <p className="admin-occ">Doctor</p>
          </div>
        </div>
        <div className="login-btn">
          <CiLogin className="login-icon" />
          <span className="logout-btn">Logout</span>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;