import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home.js';
import Appointment from './Appointment.js';
import Login from './Login.js';
import Patient from './Patient.js';
import Doctor from './Doctor.js';


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <h1>AIIMS</h1>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Appointment"
                >
                  Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Login"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Patient"
                >
                  Patient
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/Doctor"
                >
                  Doctor
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Patient" element={<Patient />} />
          <Route path="/Doctor" element={<Doctor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
