import React from 'react'
import { useApp } from '../context/AppContext'

const Header = () => {
  const { user, logout } = useApp()

  return (
    <header className="header-glass px-3 py-2">
      <div className="d-flex align-items-center justify-content-between">

        {/* Nav */}
        <ul className="nav d-none d-md-flex gap-2 mb-0">
          <li><span className="nav-link header-link">Dashboard</span></li>
          <li><span className="nav-link header-link">Tasks</span></li>
          <li><span className="nav-link header-link">Events</span></li>
          <li><span className="nav-link header-link">Hackathons</span></li>
        </ul>

        {/* Right */}
        <div className="d-flex align-items-center gap-2">

          {/* Search */}
          <input
            type="search"
            placeholder="Search..."
            className="form-control search-box-small"
          />

          {/* User */}
          <div className="dropdown">
            <img
              src="https://github.com/mdo.png"
              alt="user"
              width="32"
              height="32"
              className="rounded-circle dropdown-toggle cursor-pointer"
              data-bs-toggle="dropdown"
            />

            <ul className="dropdown-menu dropdown-menu-end shadow-sm">
              <li className="dropdown-item-text fw-bold">
                {user?.name || "User"}
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item">Profile</button></li>
              <li><button className="dropdown-item">Settings</button></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button className="dropdown-item text-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header