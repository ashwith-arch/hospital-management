import React from 'react'

function Appointments() {
  return (
    <div>
      <div className="Appointements-container">
        <div className="header-app">
          <h2 style={{ color: '#0F172B' }}>Appointments</h2>
          <p style={{ color: '#45556C' }}>Manage your consultation schedule</p>
        </div>

        <div className="patients-container">

          <div className="patient-1">
            <div className="patient-info">
              <h6 style={{ color: '#0F172B' }}> John Anderson</h6>
              <span style={{ paddingLeft: '40px' }}>PAT001</span>
            </div>
            <span style={{ color: '#A65F00', backgroundColor: '#FEF9C2', height: '26px', width: '60.19px' }}>waiting</span>
          </div>
          <p style={{ color: '#45556C' }}>09:00 | follow-up</p>

          <div className="patient-2">
            <div className="patient-info">
              <h6 style={{ color: '#0F172B' }}> Sarah Williams</h6>
              <span style={{ paddingLeft: '40px', backgroundColor: '#F1F5F9', color: '#314158', height: '18px', width: '39px' }}>PAT002</span>
            </div>
            <span style={{ color: '#A65F00', backgroundColor: '#FEF9C2', height: '26px', width: '70.19px', padding: '4px 10px 4px 10px' }}>scheduled</span>
          </div>
          <p style={{ color: '#45556C' }}>10:30 | consultation</p>

          <div className="patient-3">
            <div className="patient-info">
              <h6 style={{ color: '#0F172B' }}> Michael Chen</h6>
              <span style={{ paddingLeft: '40px' }}>PAT003</span>
            </div>
            <span style={{ color: '#A65F00', backgroundColor: '#FEF9C2', height: '26px', width: '70.19px', padding: '4px 10px 4px 10px' }}>scheduled</span>
          </div>
          <p style={{ color: '#45556C' }}>11:00 | consultation</p>

          <div className="patient-4">
            <div className="patient-info">
              <h6 style={{ color: '#0F172B' }}> Emily Davis</h6>
              <span style={{ paddingLeft: '40px' }}>PAT004</span>
            </div>
            <span style={{ color: '#A65F00', backgroundColor: '#FEF9C2', height: '26px', width: '70.19px', padding: '4px 10px 4px 10px' }}>scheduled</span>
          </div>
          <p style={{ color: '#45556C' }}>14:00 | follow-up</p>

          <div className="patient-5">
            <div className="patient-info">
              <h6 style={{ color: '#0F172B' }}> Robert Taylor</h6>
              <span style={{ paddingLeft: '40px' }}>PAT005</span>
            </div>
            <span style={{ color: '#A65F00', backgroundColor: '#FEF9C2', height: '26px', width: '70.19px', padding: '4px 10px 4px 10px' }}>scheduled</span>
          </div>
          <p style={{ color: '#45556C' }}>15:30 | consultation</p>

        </div>
      </div>
    </div>
  )
}

export default Appointments