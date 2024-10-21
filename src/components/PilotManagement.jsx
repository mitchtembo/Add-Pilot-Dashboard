import React, { useState } from 'react'
import PilotCard from './PilotCard'
import PilotForm from './PilotForm'
import './PilotManagement.css'

const initialPilots = [
  {
    id: 1,
    name: "John Doe",
    licenseNumber: "DRL123456",
    certificates: ["Basic", "Advanced"],
    flightHours: 150,
    experienceLevel: "Intermediate",
    contact: "john.doe@email.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    licenseNumber: "DRL789012",
    certificates: ["Basic", "Night Flying"],
    flightHours: 80,
    experienceLevel: "Beginner",
    contact: "jane.smith@email.com"
  }
]

const PilotManagement = () => {
  const [pilots, setPilots] = useState(initialPilots)
  const [editingPilot, setEditingPilot] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addPilot = (pilot) => {
    setPilots([...pilots, { ...pilot, id: Date.now() }])
    setIsModalOpen(false)
  }

  const updatePilot = (updatedPilot) => {
    setPilots(pilots.map(p => p.id === updatedPilot.id ? updatedPilot : p))
    setEditingPilot(null)
    setIsModalOpen(false)
  }

  const removePilot = (id) => {
    setPilots(pilots.filter(p => p.id !== id))
  }

  const startEditing = (pilot) => {
    setEditingPilot(pilot)
    setIsModalOpen(true)
  }

  return (
    <div className="pilot-management">
      <button className="add-pilot-btn" onClick={() => setIsModalOpen(true)}>Add Pilot</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <PilotForm 
              onSubmit={editingPilot ? updatePilot : addPilot} 
              initialData={editingPilot}
              onCancel={() => {
                setEditingPilot(null)
                setIsModalOpen(false)
              }}
            />
          </div>
        </div>
      )}
      <div className="pilot-list">
        {pilots.map(pilot => (
          <PilotCard 
            key={pilot.id} 
            pilot={pilot} 
            onEdit={() => startEditing(pilot)}
            onRemove={() => removePilot(pilot.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default PilotManagement