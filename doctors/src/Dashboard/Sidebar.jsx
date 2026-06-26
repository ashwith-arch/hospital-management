import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { RxPeople } from "react-icons/rx";
import { CircleUser, HeartPulse, X } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { TestTube } from 'lucide-react';
import { RiAdminLine } from "react-icons/ri";
import { RiPulseFill } from "react-icons/ri";
import { PiLinkSimpleBreak } from "react-icons/pi";

const navItems = [
  { to: "/", label: "Dashboard", icon: <RiDashboardLine size={20} /> },
  { to: "/appointments", label: "My Appointements", icon: <MdOutlineBed size={20} /> },
  { to: "/patients", label: "Patient Records", icon: <RxPeople size={20} /> },
  { to: "/emr", label: "EMR", icon: <HeartPulse size={20} /> },
  { to: "/prescriptions", label: "Prescriptions", icon: <PiLinkSimpleBreak size={20} /> },
  { to: "/lab-orders", label: "Lab Orders", icon: <TestTube size={20} /> },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="header">
        <div className="header-content">
          <RiPulseFill style={{ color: "white", backgroundColor: "#00A6F4", fontSize: "20px", borderRadius: "5px" }} />
          <div className="medicare-data">MediCare HIS</div>
        </div>
        <div>
          <X className="wrong-content" size={20} />
        </div>
      </div>
      {navItems.map((item) => {
        const isActive = location.pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`text-decoration-none py-3 ${isActive ? "dashboard-item" : "sidebar-items text-secondary"}`}
          >
            <span className={isActive ? "dashboard" : "task"}>
              {item.icon}
              {item.icon && <>&nbsp;</>} {item.label}
            </span>
          </Link>
        );
      })}
      <div className="sidebar-footer">
        <div className="footer-admin">
          <CircleUser style={{ color: "#00BCFF" }} />
          <div>
            <p className="admin-name">Jennifer Thompson</p>
            <p className="admin-occ">Doctor</p>
          </div>
        </div>
        <div className="login-btn">
          <span className="logout-btn">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
