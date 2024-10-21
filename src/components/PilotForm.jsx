import React, { useState, useEffect } from 'react'
import './PilotForm.css'

const initialPilotState = {
  name: '',
  licenseNumber: '',
  certificates: [],
  flightHours: 0,
  experienceLevel: 'Beginner',
  contact: ''
}

const PilotForm = ({ onSubmit, initialData, onCancel }) => {
  const [pilot, setPilot] = useState(initialPilotState)

  useEffect(() => {
    if (initialData) {
      setPilot(initialData)
    } else {
      setPilot(initialPilotState)
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPilot(prev => ({ ...prev, [name]: name === 'flightHours' ? parseInt(value) : value }))
  }

  const handleCertificatesChange = (e) => {
    const certificates = e.target.value.split(',').map(cert => cert.trim())
    setPilot(prev => ({ ...prev, certificates }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(pilot)
    setPilot(initialPilotState)
  }

  return (
    <form className="pilot-form" onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit Pilot' : 'Add New Pilot'}</h2>
      <input
        name="name"
        value={pilot.name}
        onChange={handleChange}
        placeholder="Pilot Name"
        required
      />
      <input
        name="licenseNumber"
        value={pilot.licenseNumber}
        onChange={handleChange}
        placeholder="License Number"
        required
      />
      <input
        name="certificates"
        value={pilot.certificates.join(', ')}
        onChange={handleCertificatesChange}
        placeholder="Certificates (comma-separated)"
      />
      <input
        type="number"
        name="flightHours"
        value={pilot.flightHours}
        onChange={handleChange}
        placeholder="Flight Hours"
        required
      />
      <select
        name="experienceLevel"
        value={pilot.experienceLevel}
        onChange={handleChange}
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Expert">Expert</option>
      </select>
      <input
        name="contact"
        value={pilot.contact}
        onChange={handleChange}
        placeholder="Contact Information"
        required
      />
      <div className="form-actions">
        <button type="submit">{initialData ? 'Update' : 'Add'} Pilot</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default PilotForm