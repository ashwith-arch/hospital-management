import React, { useState } from 'react'
import './Dashboard.css'

const patients = [
  {
    id: 'PAT001', name: 'John Anderson', age: 45, gender: 'Male', blood: 'O+',
    contact: '', tags: ['Hypertension', 'Type 2 Diabetes'],
    allergies: ['Penicillin'],
    visits: [
      { title: 'General Checkup', doctor: 'Dr. James Wilson | General Medicine', note: 'Routine checkup. Patient stable. Continue current medications.', date: '2025-12-15' },
      { title: 'Follow-up - Hypertension', doctor: 'Dr. Sarah Johnson | Cardiology', note: 'BP 130/85. Medication adjusted. Follow-up in 3 months.', date: '2025-11-20' },
    ],
    labs: [
      { test: 'HbA1c', result: '6.2%', range: '4.0–5.6%', date: '2025-12-15' },
      { test: 'Total Cholesterol', result: '195 mg/dL', range: '<200 mg/dL', date: '2025-12-15' },
      { test: 'Creatinine', result: '0.9 mg/dL', range: '0.6–1.2 mg/dL', date: '2025-11-20' },
    ],
    documents: [
      { name: 'chest_xray_dec_2025.pdf', meta: 'Scan Ray · Uploaded 2025-12-18 · By John Anderson (Patient)' },
      { name: 'blood_test_report_nov_2025.pdf', meta: 'Lab Report · Uploaded 2025-11-22 · By John Anderson (Patient)' },
    ],
  },
  {
    id: 'PAT002', name: 'Sarah Williams', age: 32, gender: 'Female', blood: 'A+',
    contact: '', tags: [],
    allergies: [],
    visits: [
      { title: 'Annual Wellness Visit', doctor: 'Dr. James Wilson | General Medicine', note: 'No concerns reported. All vitals normal.', date: '2025-12-10' },
    ],
    labs: [
      { test: 'CBC', result: 'Normal', range: 'Normal range', date: '2025-12-10' },
      { test: 'Vitamin D', result: '32 ng/mL', range: '30–100 ng/mL', date: '2025-12-10' },
    ],
    documents: [
      { name: 'annual_checkup_dec_2025.pdf', meta: 'Visit Summary · Uploaded 2025-12-10 · By Sarah Williams (Patient)' },
    ],
  },
  {
    id: 'PAT003', name: 'Michael Chen', age: 28, gender: 'Male', blood: 'B+',
    contact: '', tags: [],
    allergies: ['Sulfa drugs'],
    visits: [
      { title: 'Sports Injury Consultation', doctor: 'Dr. Sarah Johnson | Orthopedics', note: 'Mild ankle sprain. Rest and ice recommended. Review in 2 weeks.', date: '2025-12-05' },
    ],
    labs: [
      { test: 'X-Ray Ankle', result: 'No fracture', range: '-', date: '2025-12-05' },
    ],
    documents: [
      { name: 'ankle_xray_dec_2025.pdf', meta: 'Scan Ray · Uploaded 2025-12-05 · By Michael Chen (Patient)' },
    ],
  },
  {
    id: 'PAT004', name: 'Emily Davis', age: 55, gender: 'Female', blood: 'AB+',
    contact: '', tags: ['Asthma', 'Migraine'],
    allergies: ['Aspirin', 'Latex'],
    visits: [
      { title: 'Follow-up - Asthma Management', doctor: 'Dr. James Wilson | Pulmonology', note: 'Symptoms well controlled. Continue current inhaler regimen.', date: '2025-12-12' },
      { title: 'Neurology Consultation', doctor: 'Dr. Sarah Johnson | Neurology', note: 'Migraine frequency reduced with new medication. Continue monitoring.', date: '2025-11-18' },
    ],
    labs: [
      { test: 'Spirometry (FEV1)', result: '85% predicted', range: '>80% predicted', date: '2025-12-12' },
      { test: 'CBC', result: 'Normal', range: 'Normal range', date: '2025-11-18' },
    ],
    documents: [
      { name: 'spirometry_report_dec_2025.pdf', meta: 'Lung Function Test · Uploaded 2025-12-12 · By Emily Davis (Patient)' },
    ],
  },
  {
    id: 'PAT005', name: 'Robert Taylor', age: 67, gender: 'Male', blood: 'O-',
    contact: '', tags: ['CAD', 'COPD', 'Hypertension'],
    allergies: ['Penicillin', 'Iodine contrast'],
    visits: [
      { title: 'Cardiology Follow-up', doctor: 'Dr. Sarah Johnson | Cardiology', note: 'Stable angina. Continue beta-blocker. ECG unchanged from baseline.', date: '2025-12-08' },
      { title: 'Pulmonology Review', doctor: 'Dr. James Wilson | Pulmonology', note: 'COPD exacerbation resolved. Inhaler technique reviewed.', date: '2025-11-25' },
    ],
    labs: [
      { test: 'Troponin', result: '0.01 ng/mL', range: '<0.04 ng/mL', date: '2025-12-08' },
      { test: 'BNP', result: '110 pg/mL', range: '<100 pg/mL', date: '2025-12-08' },
      { test: 'Spirometry (FEV1)', result: '58% predicted', range: '>80% predicted', date: '2025-11-25' },
    ],
    documents: [
      { name: 'ecg_report_dec_2025.pdf', meta: 'ECG · Uploaded 2025-12-08 · By Robert Taylor (Patient)' },
      { name: 'chest_xray_nov_2025.pdf', meta: 'Scan Ray · Uploaded 2025-11-25 · By Robert Taylor (Patient)' },
    ],
  },
]

// ── Modal ────────────────────────────────────────────────
function PatientHistoryModal({ patient, onClose }) {
  if (!patient) return null

  return (
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
            <p>{patient.contact}</p>
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
          <div className="modal-tags">
            {patient.allergies.length > 0
              ? patient.allergies.map(a => <span className="tag-red" key={a}>{a}</span>)
              : <span className="no-data">None known</span>}
          </div>
        </div>

        {/* Recent Visits */}
        <div className="modal-section">
          <h5>Recent Visits</h5>
          {patient.visits.length > 0
            ? patient.visits.map((visit, i) => (
              <div className="visit-item" key={i}>
                <div>
                  <p className="visit-title">{visit.title}</p>
                  <p className="visit-sub">{visit.doctor}</p>
                  <p className="visit-note">{visit.note}</p>
                </div>
                <span className="visit-date">{visit.date}</span>
              </div>
            ))
            : <span className="no-data">No recent visits</span>}
        </div>

        {/* Lab Results */}
        <div className="modal-section">
          <h5>Recent Lab Results</h5>
          {patient.labs.length > 0 ? (
            <table className="lab-table">
              <thead>
                <tr>
                  <th>Test</th><th>Result</th><th>Reference Range</th><th>Date</th>
                </tr>
              </thead>
              <tbody>
                {patient.labs.map((lab, i) => (
                  <tr key={i}>
                    <td>{lab.test}</td>
                    <td>{lab.result}</td>
                    <td>{lab.range}</td>
                    <td>{lab.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <span className="no-data">No lab results</span>}
        </div>

        {/* Documents */}
        <div className="modal-section">
          <h5>Uploaded Documents & Scans</h5>
          {patient.documents.length > 0
            ? patient.documents.map((doc, i) => (
              <div className="doc-item" key={i}>
                <span className="doc-icon">📄</span>
                <div>
                  <p className="doc-name">{doc.name}</p>
                  <p className="doc-meta">{doc.meta}</p>
                </div>
                <div className="doc-actions">
                  <button>👁 View</button>
                  <button>⬇</button>
                </div>
              </div>
            ))
            : <span className="no-data">No documents uploaded</span>}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn-full-emr">View Full EMR</button>
          <button className="btn-close-modal" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────
function PatientRecords() {
  const [search, setSearch] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="pr-container">
      <div className="pr-header">
        <div>
          <h2>Patient Records</h2>
          <p>Access patient medical records</p>
        </div>
        <input
          type="search"
          placeholder="Search patients..."
          className="pr-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="pr-list">
        {filtered.map(patient => (
          <div className="pr-card" key={patient.id}>
            <div className="pr-avatar">{patient.name.charAt(0)}</div>
            <div className="pr-info">
              <div className="pr-name-row">
                <h4>{patient.name}</h4>
                <span className="pr-id">{patient.id}</span>
              </div>
              <p>Age: {patient.age}yr | {patient.gender}</p>
              <div className="pr-tags">
                {patient.tags.map(tag => (
                  <span className="pr-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="pr-blood">Blood Group: {patient.blood}</div>
            <div className="pr-contact">Contact: {patient.contact}</div>
            <button
              className="pr-btn"
              onClick={() => setSelectedPatient(patient)}
            >
              👁 View Full Record
            </button>
          </div>  
        ))}
      </div>

      {/* Modal */}
      <PatientHistoryModal
        patient={selectedPatient}
        onClose={() => setSelectedPatient(null)}
      />
    </div>
  )
}

export default PatientRecords