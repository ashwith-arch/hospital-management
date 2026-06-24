import React from 'react'

function Paitenetmediaclhistory({ patient, onClose }) {
  if (!patient) return null

    
  return (
    <div>
        <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="modal-header">
          <div>
            <h3>Patient Medical History</h3>
            <p>{patient.name} ({patient.id})</p>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Basic Info */}
        <div className="modal-basic-info">
          <div>
            <span className="info-label">Age / Gender</span>
            <p>{patient.age}yr / {patient.gender}</p>
          </div>
          <div>
            <span className="info-label">Blood Group</span>
            <p>{patient.blood}</p>
          </div>
          <div>
            <span className="info-label">Contact</span>
            <p>+1 234 567 8900</p>
          </div>
        </div>

        {/* Active Conditions */}
        <div className="modal-section">
          <h5>Active Conditions</h5>
          <div className="modal-tags">
            {patient.tags.length > 0
              ? patient.tags.map(tag => <span className="tag-red" key={tag}>{tag}</span>)
              : <span className="no-data">None</span>}
          </div>
        </div>

        {/* Allergies */}
        <div className="modal-section">
          <h5>Allergies</h5>
          <span className="tag-red">Penicillin</span>
        </div>

        {/* Recent Visits */}
        <div className="modal-section">
          <h5>Recent Visits</h5>
          <div className="visit-item">
            <div>
              <p className="visit-title">General Checkup</p>
              <p className="visit-sub">Dr. James Wilson | General Medicine</p>
              <p className="visit-note">Routine checkup. Patient stable. Continue current medications.</p>
            </div>
            <span className="visit-date">2025-12-15</span>
          </div>
          <div className="visit-item">
            <div>
              <p className="visit-title">Follow-up - Hypertension</p>
              <p className="visit-sub">Dr. Sarah Johnson | Cardiology</p>
              <p className="visit-note">BP 130/85. Medication adjusted. Follow-up in 3 months.</p>
            </div>
            <span className="visit-date">2025-11-20</span>
          </div>
        </div>

        {/* Lab Results */}
        <div className="modal-section">
          <h5>Recent Lab Results</h5>
          <table className="lab-table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Result</th>
                <th>Reference Range</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HbA1c</td>
                <td>6.2%</td>
                <td>4.0–5.6%</td>
                <td>2025-12-15</td>
              </tr>
              <tr>
                <td>Total Cholesterol</td>
                <td>195 mg/dL</td>
                <td>&lt;200 mg/dL</td>
                <td>2025-12-15</td>
              </tr>
              <tr>
                <td>Creatinine</td>
                <td>0.9 mg/dL</td>
                <td>0.6–1.2 mg/dL</td>
                <td>2025-11-20</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Documents */}
        <div className="modal-section">
          <h5>Uploaded Documents & Scans</h5>
          <div className="doc-item">
            <span className="doc-icon">📄</span>
            <div>
              <p className="doc-name">chest_xray_dec_2025.pdf</p>
              <p className="doc-meta">Scan Ray · Uploaded 2025-12-18 · By John Anderson (Patient)</p>
            </div>
            <div className="doc-actions">
              <button>👁 View</button>
              <button>⬇</button>
            </div>
          </div>
          <div className="doc-item">
            <span className="doc-icon">📄</span>
            <div>
              <p className="doc-name">blood_test_report_nov_2025.pdf</p>
              <p className="doc-meta">Lab Report · Uploaded 2025-11-22 · By John Anderson (Patient)</p>
            </div>
            <div className="doc-actions">
              <button>👁 View</button>
              <button>⬇</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn-full-emr">View Full EMR</button>
          <button className="btn-close-modal" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>

    </div>
  )
}

export default Paitenetmediaclhistory


