import React from 'react'
import { useApp } from '../context/AppContext'

const Events = () => {

 const { user, events, setEvents, addPoints, showToast } = useApp()
  return (
        <div className="container py-4">

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded-pill px-4 py-2"
          placeholder="🔍 Search events..."
        />
      </div>

      {/* Filters */}
      <div className="d-flex gap-2 mb-4">
        <button className="btn btn-primary rounded-pill px-4">All</button>
        {/* <button className="btn btn-outline-secondary rounded-pill px-4">Upcoming</button>
        <button className="btn btn-outline-secondary rounded-pill px-4">Past</button>
        <button className="btn btn-outline-secondary rounded-pill px-4">Joined</button> */}
      </div>

      {/* Event Card */}
      <div className="card shadow-sm border-0 rounded-4 p-3">
        
        <div className="d-flex justify-content-between align-items-start">
          <h4 className="fw-bold">Annual Science Fair</h4>
          <span className="badge bg-light text-dark border rounded-pill px-3">
            Past
          </span>
        </div>

        {/* Details */}
        <div className="d-flex flex-wrap gap-3 text-muted mt-2">
          <span>📅 10 Jul 2025</span>
          <span>📍 Main Hall</span>
          <span>👥 0 registered</span>
        </div>

        {/* Status */}
        <p className="text-muted mt-3 mb-0">Event has ended</p>
      </div>

    </div>
   
  )
}

export default Events
