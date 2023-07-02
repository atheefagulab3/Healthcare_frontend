import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Appointment() {
  return (
    <div className="container">
      <header className="text-center">Registration Form</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required className="form-control" />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" required className="form-control" />
        </div>

        <div className="row">
          <div className="col">
            <div className="input-box">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter phone number" required className="form-control" />
            </div>
          </div>
          <div className="col">
            <div className="input-box">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required className="form-control" />
            </div>
          </div>
        </div>

        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="form-check">
              <input type="radio" id="check-male" name="gender" className="form-check-input" checked />
              <label htmlFor="check-male" className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input type="radio" id="check-female" name="gender" className="form-check-input" />
              <label htmlFor="check-female" className="form-check-label">Female</label>
            </div>
            <div className="form-check">
              <input type="radio" id="check-other" name="gender" className="form-check-input" />
              <label htmlFor="check-other" className="form-check-label">Prefer not to say</label>
            </div>
          </div>
        </div>

        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required className="form-control" />
          <input type="text" placeholder="Enter street address line 2" required className="form-control" />
          <div className="row">
            <div className="col">
              <div className="select-box">
                <select className="form-control">
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
              </div>
            </div>
            <div className="col">
              <input type="text" placeholder="Enter your city" required className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input type="text" placeholder="Enter your region" required className="form-control" />
            </div>
            <div className="col">
              <input type="number" placeholder="Enter postal code" required className="form-control" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
