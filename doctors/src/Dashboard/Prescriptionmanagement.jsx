import React from 'react'

function Prescriptionmanagement() {
  return (
    <div className="prescription-manager">
      <div className="prescription-header">
        <h2 className="prescription-title">Prescription Management</h2>
        <p className="prescription-subtitle">View and manage prescriptions</p>
      </div>
      <div className="prescription-empty-state">
        Recent prescriptions will appear here...
      </div>
    </div>
  )
}

export default Prescriptionmanagement