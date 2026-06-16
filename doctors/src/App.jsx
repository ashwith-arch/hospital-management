import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Dashboard/Sidebar';
import Navbar from './Dashboard/Navbar';
import './Dashboard/Dashboard.css';
import Clinicaldashboard from './Dashboard/Clinicaldashboard';
import Appointments from './Appointments';
import Paitentrecords from './Dashboard/Paitentrecords';
import Emr from './Emr';
import Prescriptionmanagement from './Dashboard/Prescriptionmanagement';


function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <div className="main-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Clinicaldashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patients" element={<Paitentrecords />} />
            <Route path="/emr" element={<Emr/>} />
            <Route path="/prescriptions" element={<Prescriptionmanagement/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;