import React from 'react'
import './PilotCard.css'

const PilotCard = ({ pilot, onEdit, onRemove }) => {
  return (
    <div className="pilot-card">
      <h2>{pilot.name}</h2>
      <p><strong>License Number:</strong> {pilot.licenseNumber}</p>
      <p><strong>Certificates:</strong> {pilot.certificates.join(', ')}</p>
      <p><strong>Flight Hours:</strong> {pilot.flightHours}</p>
      <p><strong>Experience Level:</strong> {pilot.experienceLevel}</p>
      <p><strong>Contact:</strong> {pilot.contact}</p>
      <div className="pilot-card-actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  )
}

export default PilotCard