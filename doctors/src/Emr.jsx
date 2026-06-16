import React, { useState } from 'react'
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { FaFlask } from "react-icons/fa";
import { LuPill } from "react-icons/lu";
import { BsCalendar2Check } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { TbSend } from "react-icons/tb";
import { RiAlertLine } from "react-icons/ri";
import { BsCalendarCheck } from "react-icons/bs";

function EMR() {
  const [soap, setSoap] = useState({
    subjective: '',
    objective: '',
    assessment: '',
    plan: ''
  });

 
  const [showLabModal, setShowLabModal] = useState(false);
  const [showMedModal, setShowMedModal] = useState(false);
  const [showFollowModal, setShowFollowModal] = useState(false);

 
  const [labForm, setLabForm] = useState({
    test: '', urgency: 'Routine', notes: ''
  });

  
  const [medForm, setMedForm] = useState({
    name: '', dosage: '', frequency: '', duration: '', instructions: ''
  });


  const [followForm, setFollowForm] = useState({
    appointmentType: '', date: '', time: '', reason: ''
  });

  const handleChange = (e) => {
    setSoap({ ...soap, [e.target.name]: e.target.value });
  };

  const handleLabChange = (e) => {
    setLabForm({ ...labForm, [e.target.name]: e.target.value });
  };

  const handleMedChange = (e) => {
    setMedForm({ ...medForm, [e.target.name]: e.target.value });
  };

  const handleFollowChange = (e) => {
    setFollowForm({ ...followForm, [e.target.name]: e.target.value });
  };

  const closeAll = () => {
    setShowLabModal(false);
    setShowMedModal(false);
    setShowFollowModal(false);
  };

  const inputStyle = {
    width: '100%', padding: '10px 14px', borderRadius: '8px',
    border: '1px solid #E2E8F0', fontSize: '14px', outline: 'none',
    boxSizing: 'border-box', color: '#0F172B', fontFamily: 'inherit'
  };

  const labelStyle = {
    fontWeight: '500', fontSize: '14px', color: '#0F172B',
    display: 'block', marginBottom: '6px'
  };

  return (
    <div className="main-container">
      <div className="emr-interface">

        {/* ---- Header ---- */}
        <div className="headcontainer">
          <div className="head-left">
            <h4>Electronic Medical Record</h4>
            <p>Clinical documentation and patient management</p>
          </div>
          <div className="head-right">
            <button className="voice-btn">
              <MdOutlineKeyboardVoice style={{ fontSize: '18px' }} />
              Voice Input
            </button>
            <button className="save-btn">
              <IoIosDocument style={{ fontSize: '18px' }} />
              Save Record
            </button>
          </div>
        </div>

        {/* ---- Patient Info Bar ---- */}
        <div className="patient-info-bar">
          <div className="patient-avatar">JA</div>
          <div className="patient-meta">
            <h5>John Anderson</h5>
            <p>PAT001 &nbsp;|&nbsp; 45yr &nbsp;|&nbsp; Male &nbsp;|&nbsp; O+</p>
          </div>
          <div className="active-conditions">
            <span className="condition-label">Active Conditions:</span>
            <span className="condition-tag">Hypertension, Type 2 Diabetes</span>
          </div>
          <div className="ai-badge">
            <LuBrain style={{ fontSize: '16px', color: '#9810FA' }} />
            <span>AI Summary Available</span>
          </div>
        </div>

       \
        <div className="quick-actions">

          <div className="action-card" onClick={() => setShowLabModal(true)}>
            <div className="action-icon flask">
              <FaFlask style={{ fontSize: '18px', color: '#0084D1' }} />
            </div>
            <div>
              <p className="action-title">Order Lab Tests</p>
              <p className="action-sub">Request laboratory investigations</p>
            </div>
          </div>

          <div className="action-card" onClick={() => setShowMedModal(true)}>
            <div className="action-icon pill">
              <LuPill style={{ fontSize: '18px', color: '#00A63E' }} />
            </div>
            <div>
              <p className="action-title">Prescribe Medication</p>
              <p className="action-sub">Create digital prescription</p>
            </div>
          </div>

          <div className="action-card" onClick={() => setShowFollowModal(true)}>
            <div className="action-icon calendar">
              <BsCalendar2Check style={{ fontSize: '18px', color: '#9810FA' }} />
            </div>
            <div>
              <p className="action-title">Schedule Follow-Up</p>
              <p className="action-sub">Book next appointment</p>
            </div>
          </div>

        </div>

  
        <div className="soap-container">
          <h5 className="soap-title">SOAP Notes</h5>

          <div className="soap-field">
            <label>Subjective (Chief Complaint & History)</label>
            <textarea name="subjective" value={soap.subjective} onChange={handleChange}
              placeholder="Patient reports..." rows={3} />
          </div>

          <div className="soap-field">
            <label>Objective (Physical Examination & Vitals)</label>
            <textarea name="objective" value={soap.objective} onChange={handleChange}
              placeholder="Vitals: BP 122/80, HR 72, Temp 98.6°F..." rows={3} />
          </div>

          <div className="soap-field">
            <label>Assessment (Diagnosis & Clinical Impression)</label>
            <textarea name="assessment" value={soap.assessment} onChange={handleChange}
              placeholder="Diagnosis..." rows={3} />
          </div>

          <div className="soap-field">
            <label>Plan (Treatment & Management)</label>
            <textarea name="plan" value={soap.plan} onChange={handleChange}
              placeholder="Treatment plan..." rows={3} />
          </div>
        </div>

      </div>

      {/* ======== MODAL OVERLAY ======== */}
      {(showLabModal || showMedModal || showFollowModal) && (
        <div onClick={closeAll} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>

          {/* ======== ORDER LAB TESTS MODAL ======== */}
          {showLabModal && (
            <div onClick={(e) => e.stopPropagation()} style={{
              backgroundColor: '#fff', borderRadius: '16px', padding: '28px',
              width: '500px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <div>
                  <h5 style={{ margin: 0, fontWeight: '600', fontSize: '18px', color: '#0F172B' }}>Order Lab Tests</h5>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#45556C' }}>Patient: John Anderson</p>
                </div>
                <button onClick={() => setShowLabModal(false)} style={{
                  background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#94A3B8'
                }}>✕</button>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '16px 0' }} />

              <div style={{ marginBottom: '18px' }}>
                <label style={labelStyle}>Select Test <span style={{ color: '#E7000B' }}>*</span></label>
                <input name="test" value={labForm.test} onChange={handleLabChange}
                  type="text" placeholder="e.g. CBC, HbA1c, Lipid Panel..." style={inputStyle} />
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={labelStyle}>Urgency Level <span style={{ color: '#E7000B' }}>*</span></label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['STAT', 'Urgent', 'Routine'].map((level) => (
                    <button key={level} onClick={() => setLabForm({ ...labForm, urgency: level })} style={{
                      flex: 1, padding: '9px 0', borderRadius: '8px', fontSize: '14px',
                      fontWeight: '500', cursor: 'pointer',
                      border: labForm.urgency === level ? '2px solid #0084D1' : '1px solid #E2E8F0',
                      backgroundColor: labForm.urgency === level ? '#EFF8FF' : '#fff',
                      color: labForm.urgency === level ? '#0084D1' : '#45556C'
                    }}>{level}</button>
                  ))}
                </div>
                <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#45556C' }}>
                  <span style={{ color: '#0084D1', marginRight: '4px' }}>●</span>
                  {labForm.urgency} - {
                    labForm.urgency === 'STAT' ? 'Immediate processing' :
                    labForm.urgency === 'Urgent' ? 'Priority processing' : 'Standard processing'
                  }
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={labelStyle}>Clinical Notes</label>
                <textarea name="notes" value={labForm.notes} onChange={handleLabChange}
                  placeholder="Clinical indication or special instructions..." rows={4}
                  style={{ ...inputStyle, resize: 'none' }} />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => { setShowLabModal(false); setLabForm({ test: '', urgency: 'Routine', notes: '' }); }}
                  style={{
                    flex: 1, padding: '12px', borderRadius: '8px', border: 'none',
                    backgroundColor: '#0084D1', color: '#fff', fontWeight: '600',
                    fontSize: '14px', cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', gap: '8px'
                  }}>
                  <TbSend style={{ fontSize: '16px' }} /> Submit Order to Lab
                </button>
                <button onClick={() => setShowLabModal(false)} style={{
                  padding: '12px 24px', borderRadius: '8px', border: '1px solid #E2E8F0',
                  backgroundColor: '#fff', fontWeight: '600', fontSize: '14px',
                  cursor: 'pointer', color: '#0F172B'
                }}>Cancel</button>
              </div>
            </div>
          )}

          {/* ======== PRESCRIBE MEDICATION MODAL ======== */}
          {showMedModal && (
            <div onClick={(e) => e.stopPropagation()} style={{
              backgroundColor: '#fff', borderRadius: '16px', padding: '28px',
              width: '500px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <div>
                  <h5 style={{ margin: 0, fontWeight: '600', fontSize: '18px', color: '#0F172B' }}>Prescribe Medication</h5>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#45556C' }}>Patient: John Anderson</p>
                </div>
                <button onClick={() => setShowMedModal(false)} style={{
                  background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#94A3B8'
                }}>✕</button>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '16px 0' }} />

              {/* Patient Allergies Alert */}
              <div style={{
                backgroundColor: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '8px',
                padding: '10px 14px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                <RiAlertLine style={{ color: '#E7000B', fontSize: '18px', flexShrink: 0 }} />
                <span style={{ color: '#BE123C', fontSize: '13px', fontWeight: '500' }}>
                  Patient Allergies: Penicillin
                </span>
              </div>

              {/* Medication Name */}
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Medication Name <span style={{ color: '#E7000B' }}>*</span></label>
                <input name="name" value={medForm.name} onChange={handleMedChange}
                  type="text" placeholder="e.g., Amoxicillin" style={inputStyle} />
              </div>

              {/* Dosage & Frequency */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Dosage <span style={{ color: '#E7000B' }}>*</span></label>
                  <input name="dosage" value={medForm.dosage} onChange={handleMedChange}
                    type="text" placeholder="e.g., 500mg" style={inputStyle} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Frequency <span style={{ color: '#E7000B' }}>*</span></label>
                  <input name="frequency" value={medForm.frequency} onChange={handleMedChange}
                    type="text" placeholder="e.g., Twice daily" style={inputStyle} />
                </div>
              </div>

              {/* Duration */}
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Duration <span style={{ color: '#E7000B' }}>*</span></label>
                <input name="duration" value={medForm.duration} onChange={handleMedChange}
                  type="text" placeholder="e.g., 7 days" style={inputStyle} />
              </div>

              {/* Instructions */}
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Instructions</label>
                <textarea name="instructions" value={medForm.instructions} onChange={handleMedChange}
                  placeholder="e.g., Take with food. Complete full course." rows={3}
                  style={{ ...inputStyle, resize: 'none' }} />
              </div>

              {/* Drug Interaction Check */}
              <div style={{
                backgroundColor: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '8px',
                padding: '10px 14px', marginBottom: '24px', display: 'flex', alignItems: 'flex-start', gap: '8px'
              }}>
                <RiAlertLine style={{ color: '#EA7C0A', fontSize: '18px', flexShrink: 0, marginTop: '1px' }} />
                <div>
                  <p style={{ margin: 0, color: '#C2410C', fontSize: '13px', fontWeight: '500' }}>Drug Interaction Check</p>
                  <p style={{ margin: '2px 0 0 0', color: '#EA580C', fontSize: '12px' }}>
                    No known interactions with current medications.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => { setShowMedModal(false); setMedForm({ name: '', dosage: '', frequency: '', duration: '', instructions: '' }); }}
                  style={{
                    flex: 1, padding: '12px', borderRadius: '8px', border: 'none',
                    backgroundColor: '#0084D1', color: '#fff', fontWeight: '600',
                    fontSize: '14px', cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', gap: '8px'
                  }}>
                  <LuPill style={{ fontSize: '16px' }} /> Generate Prescription
                </button>
                <button onClick={() => setShowMedModal(false)} style={{
                  padding: '12px 24px', borderRadius: '8px', border: '1px solid #E2E8F0',
                  backgroundColor: '#fff', fontWeight: '600', fontSize: '14px',
                  cursor: 'pointer', color: '#0F172B'
                }}>Cancel</button>
              </div>
            </div>
          )}

          {/* ======== SCHEDULE FOLLOW-UP MODAL ======== */}
          {showFollowModal && (
            <div onClick={(e) => e.stopPropagation()} style={{
              backgroundColor: '#fff', borderRadius: '16px', padding: '28px',
              width: '500px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                <div>
                  <h5 style={{ margin: 0, fontWeight: '600', fontSize: '18px', color: '#0F172B' }}>Schedule Follow-Up</h5>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#45556C' }}>Patient: John Anderson</p>
                </div>
                <button onClick={() => setShowFollowModal(false)} style={{
                  background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#94A3B8'
                }}>✕</button>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '16px 0' }} />

              {/* Appointment Type */}
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Appointment Type <span style={{ color: '#E7000B' }}>*</span></label>
                <select name="appointmentType" value={followForm.appointmentType} onChange={handleFollowChange}
                  style={{ ...inputStyle, backgroundColor: '#fff' }}>
                  <option value="">Select type</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Lab Review">Lab Review</option>
                  <option value="Post-Surgery">Post-Surgery</option>
                  <option value="Medication Review">Medication Review</option>
                  <option value="Specialist Referral">Specialist Referral</option>
                </select>
              </div>

              {/* Date & Time */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Date <span style={{ color: '#E7000B' }}>*</span></label>
                  <input name="date" value={followForm.date} onChange={handleFollowChange}
                    type="date" style={inputStyle} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Time <span style={{ color: '#E7000B' }}>*</span></label>
                  <input name="time" value={followForm.time} onChange={handleFollowChange}
                    type="time" style={inputStyle} />
                </div>
              </div>

              {/* Reason */}
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Reason for Follow-up <span style={{ color: '#E7000B' }}>*</span></label>
                <textarea name="reason" value={followForm.reason} onChange={handleFollowChange}
                  placeholder="e.g., Review lab results, assess treatment response..." rows={3}
                  style={{ ...inputStyle, resize: 'none' }} />
              </div>

              {/* Patient Notification Info */}
              <div style={{
                backgroundColor: '#EFF8FF', border: '1px solid #BAE6FD', borderRadius: '8px',
                padding: '10px 14px', marginBottom: '24px', display: 'flex', alignItems: 'flex-start', gap: '8px'
              }}>
                <BsCalendarCheck style={{ color: '#0084D1', fontSize: '16px', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ margin: 0, color: '#0369A1', fontSize: '13px', fontWeight: '500' }}>Patient Notification</p>
                  <p style={{ margin: '2px 0 0 0', color: '#0284C7', fontSize: '12px' }}>
                    Patient will receive SMS and email confirmation upon booking.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => { setShowFollowModal(false); setFollowForm({ appointmentType: '', date: '', time: '', reason: '' }); }}
                  style={{
                    flex: 1, padding: '12px', borderRadius: '8px', border: 'none',
                    backgroundColor: '#0084D1', color: '#fff', fontWeight: '600',
                    fontSize: '14px', cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', gap: '8px'
                  }}>
                  <BsCalendarCheck style={{ fontSize: '16px' }} /> Schedule Appointment
                </button>
                <button onClick={() => setShowFollowModal(false)} style={{
                  padding: '12px 24px', borderRadius: '8px', border: '1px solid #E2E8F0',
                  backgroundColor: '#fff', fontWeight: '600', fontSize: '14px',
                  cursor: 'pointer', color: '#0F172B'
                }}>Cancel</button>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default EMR