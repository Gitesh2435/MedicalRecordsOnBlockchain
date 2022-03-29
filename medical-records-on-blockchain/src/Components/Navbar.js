import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Medicon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mx-3 active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/records">Records</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/login">SignIn</Link>
              </li>
              <li className="nav-item">
                <Link className="auth-btn btn mx-3" to="/signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar fixed-top navbar-expand-md navbar-dark navbar-custom align-items-center">
        <a className="navbar-brand" href="/">Medicon</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" id="burger">
          <span className="navbar-toggler-icon" style={{ stroke: 'white' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link mx-3 " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/zone">Records</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" to="/login">SignIn</Link>
            </li> */}
      {/* <li className={`${loggedIn ? "nav-item" : "d-none "}`}>
              <Link className={`nav-link mx-3 ${location.pathname === "/profile" ? "active" : ""}`} to="/profile">Profile</Link>
            </li> */}
      {/* <li className="nav-item mx-3 text-center">
              <Link className="btn px-3" id="auth-btn" to="/login">Signup</Link>
            </li> */}
      {/* <li className={`${loggedIn ? "nav-item mx-3 text-center" : "d-none"}`}>
              <Link className={`btn px-3`} id="auth-btn" onClick={handleLogout} to="/">Logout</Link>
            </li> */}
      {/* </ul>
        </div>
      </nav> */}
    </div>
  )
}
