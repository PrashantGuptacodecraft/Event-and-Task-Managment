import React from 'react'
import { useApp } from '../context/AppContext'

const Sidebar = ({ currentPage, setPage }) => {
  const { user, logout } = useApp()

  const userLinks = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'tasks', label: 'Tasks' },
    { id: 'events', label: 'Events' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'qna', label: 'Q&A' },
    { id: 'notes', label: 'Notes' },
    { id: 'profile', label: 'Profile' },
  ]

  const adminLinks = [
    { id: 'admin', label: 'Admin Dashboard' },
    { id: 'events', label: 'Manage Events' },
    { id: 'hackathons', label: 'Manage Hackathons' },
  ]

  const links = user?.role === 'admin' ? adminLinks : userLinks

  return (
    <div
      className="d-flex flex-column p-3 text-white"
      style={{
        width: "260px",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2, #ff6a00)",
        backgroundSize: "300% 300%",
        animation: "gradientMove 8s ease infinite",
        backdropFilter: "blur(10px)"
      }}
    >
      {/* Logo */}
      <h3 className="text-center mb-4 fw-bold">🚀 UniPortal</h3>

      <hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />

      {/* Links */}
      <div className="d-flex flex-column gap-2 flex-grow-1">
        {links.map(link => (
          <button
            key={link.id}
            onClick={() => setPage(link.id)}
            className={`sidebar-btn ${
              currentPage === link.id ? 'active' : ''
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="mt-auto pt-3 border-top" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
        <button onClick={logout} className="sidebar-btn logout-btn">
          🚪 Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar