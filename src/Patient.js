// import React, { Component } from "react";
// import Card from 'react-bootstrap/Card';

// export default class Patient extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Patient: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchPatient();
//   }

//   fetchPatient() {
//     fetch("https://localhost:7205/api/Patient")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ Patient: data });
//       });
//   }

//   render() {
//     const { Patient } = this.state;
//     return (
//       <div>
//         <h1>Patients</h1>
//         <div className="row">
//           {Patient.map((item) => (
//                 <div className="col-md-4" key={item.patient_ID}>
//                   <Card>
//                     <Card.Body>
//                       <Card.Title>Patient Details</Card.Title>
//                       <Card.Text>
//                         <strong>Patient ID:</strong> {item.patient_ID}
//                         <br />
//                         <strong>Patient Name:</strong> {item.patient_Name}
//                         <br />
//                         <strong>Age:</strong> {item.age}
//                         <br />
//                         <strong>Gender:</strong> {item.gender}
//                         <br />
//                         <strong>Blood Group:</strong> {item.bloodGroup}
//                         <br />
//                         <strong>Address:</strong> {item.patient_Address}
//                         <br />
//                         <strong>Phone:</strong> {item.patient_Phone}
//                         <br />
//                         <strong>Email:</strong> {item.patient_Email}
//                         <br />
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                   <br />
//                 </div>
//               ))}
//             </div>
//           </div>
//            );
//           }
//         }
import React, { Component } from "react";

export  class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Patient: [],
      patient_ID: 0,
      patient_Name: " ",
      age: 0,
      gender: " ",
      bloodGroup: " ",
      patient_Address: " ",
      patient_Phone: 0,
      patient_Email: " ",
      patient_UserName: " ",
      password:"",
      selectedPatient: null,
    
    };
  }

  componentDidMount() {
    this.fetchPatient();
  }

  fetchPatient() {
    fetch("https://localhost:7205/api/Patient")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Patient: data });
      })
      .catch((error) => {
        console.error("Error fetching Patient data:", error);
      });
  }

  CreatePatient = () => {
    const {
      patient_Name,
      age,
      gender,
      bloodGroup,
      patient_Address,
      patient_Phone,
      patient_Email,
      patient_UserName,
      password
    } = this.state;
    const newPatient = {
      patient_Name: patient_Name,
      age: age,
      gender: gender,
      bloodGroup: bloodGroup,
      patient_Address: patient_Address,
      patient_Phone: patient_Phone,
      patient_Email: patient_Email,
      patient_UserName: patient_UserName,
      password: password
    };

    fetch("https://localhost:7205/api/Patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPatient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Patient is created ", data);
        this.setState({
          patient_Name: "",
          age: 0,
          gender: "",
          bloodGroup: "",
          patient_Address: "",
          patient_Phone: 0,
          patient_Email: "",
          patient_UserName: "",
          password: "",
          selectedPatient: null,
        });
        // Fetch the updated list of patients
        this.fetchPatient();
      })
      .catch((error) => {
        console.error("Error creating Patient:", error);
      });
  };


  updatePatient = () => {
    const {
      selectedPatient,
      patient_Name,
      age,
      gender,
      bloodGroup,
      patient_Address,
      patient_Phone,
      patient_Email,
      patient_UserName,
      password
    } = this.state;
  
    if (!selectedPatient) {
      return;
    }
  
    const updatedPatient = {
      ...selectedPatient,
      patient_Name: patient_Name,
      age: age,
      gender: gender,
      bloodGroup: bloodGroup,
      patient_Address: patient_Address,
      patient_Phone: patient_Phone,
      patient_Email: patient_Email,
      patient_UserName: patient_UserName,
      password:password,
      
    };
  
    fetch(`https://localhost:7205/api/Patient?id=+ ${selectedPatient.patient_ID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPatient),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Patient is updated ", data);
        this.setState({
          selectedPatient: null,
          patient_Name: "",
          age: 0,
          gender: "",
          bloodGroup: "",
          patient_Address: "",
          patient_Phone: 0,
          patient_Email: "",
          patient_UserName: "",
          password: "",
          
        });
        // Fetch the updated list of patients
        this.fetchPatient();
      })
      .catch((error) => {
        console.error("Error updating Patient:", error);
      });
  };
  
  handlenameInputChange = (event) => {
    this.setState({ patient_Name: event.target.value });
  };

  handleageInputChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handlegenderInputChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handlebloodGroupInputChange = (event) => {
    this.setState({ bloodGroup: event.target.value });
  };
  handlepatientAddressInputChange = (event) => {
    this.setState({ patient_Address: event.target.value });
  };
  handlepatientPhoneInputChange = (event) => {
    this.setState({ patient_Phone: event.target.value });
  };
  handlepatientEmailInputChange = (event) => {
    this.setState({ patient_Email: event.target.value });
  };
  handlepatientUserNameInputChange = (event) => {
    this.setState({ patient_UserName: event.target.value });
  };
  handlePasswordInputChange = (event) => {
    this.setState({ password: event.target.value });
  };

  selectPatientForUpdate = (Patient) => {
    this.setState({
      selectedPatient: Patient,
      patient_Name: Patient.patient_Name,
      age: Patient.age,
      gender: Patient.gender,
      bloodGroup: Patient.bloodGroup,
      patient_Address: Patient.patient_Address,
      patient_Phone: Patient.patient_Phone,
      patient_Email: Patient.patient_Email,
      patient_UserName: Patient.patient_UserName,
      password: Patient.password,
      
    });
  };

  render() {
    const {
      Patient,
      selectedPatient,
      patient_Name,
      age,
      gender,
      bloodGroup,
      patient_Address,
      patient_Phone,
      patient_Email,
      patient_UserName,
      password,
      
    } = this.state;
    return (
      <div className="container-fluid">
        <h1>Room</h1>

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={patient_Name}
              onChange={this.handlenameInputChange}
              placeholder="patient_Name"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={this.handleageInputChange}
              placeholder=" age"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={gender}
              onChange={this.handlegenderInputChange}
              placeholder="gender"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={bloodGroup}
              onChange={this.handlebloodGroupInputChange}
              placeholder="blood"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={patient_Address}
              onChange={this.handlepatientAddressInputChange}
              placeholder="address"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={patient_Phone}
              onChange={this.handlepatientPhoneInputChange}
              placeholder="phone"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={patient_Email}
              onChange={this.handlepatientEmailInputChange}
              placeholder="email"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={patient_UserName}
              onChange={this.handlepatientUserNameInputChange}
              placeholder="username"
            />
          </div>
          
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={this.handlePasswordInputChange}
              placeholder="password"
            />
          </div>

          <div className="col">
            {selectedPatient ? (
              <button className="btn btn-primary" onClick={this.updatePatient}>
                Save
              </button>
            ) : (
              <button className="btn btn-primary" onClick={this.CreatePatient}>
                Create
              </button>
            )}
          </div>
        </div>
        <div className="table-responsive mt-3">
          <table className="table table-hover ">
            <tbody>
              {Patient.map((item) => (
                <tr key={item.rid}>
                  <td>
                    <strong>Patient ID:</strong> {item.patient_ID}
                    <br />
                    <strong>Patient Name:</strong> {item.patient_Name}
                    <br />
                    <strong>Age:</strong> {item.age}
                    <br />
                    <strong>Gender:</strong> {item.gender}
                    <br />
                    <strong>Blood Group:</strong> {item.bloodGroup}
                    <br />
                    <strong>Address:</strong> {item.patient_Address}
                    <br />
                    <strong>Phone:</strong> {item.patient_Phone}
                    <br />
                    <strong>Email:</strong> {item.patient_Email}
                    <br />
                  </td>
                  
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deletePatient(item.patient_ID)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary ml-2"
                      onClick={() => this.selectPatientForUpdate(item)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Patient;
// import React, { useState } from 'react';
// import axios from 'axios';
//  const Patient = () => {
//   const [patientData, setPatientData] = useState({
//     patient: {
//       patient_Name: '',
//       age: 0,
//       gender: '',
//       bloodGroup: '',
//       patient_Address: '',
//       patient_Phone: 0,
//       patient_Email: '',
//       patient_UserName: '',
//       Patient_HashedPassword:'pass'
//     },
//     password: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPatientData((prevState) => ({
//       ...prevState,
//       patient: {
//         ...prevState.patient,
//         [name]: value,
//       },
//     }));
//   };

//   const handlePasswordChange = (e) => {
//     setPatientData((prevState) => ({
//       ...prevState,
//       password: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("https://localhost:7205/api/Patient", patientData);
//       console.log(response.data);
//       // Handle successful patient addition
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="patient_Name"
//         value={patientData.patient.patient_Name}
//         onChange={handleInputChange}
//         placeholder="Name"
//       />

//       <input
//         type="number"
//         name="age"
//         value={patientData.patient.age}
//         onChange={handleInputChange}
//         placeholder="Age"
//       />

//       <input
//         type="text"
//         name="gender"
//         value={patientData.patient.gender}
//         onChange={handleInputChange}
//         placeholder="Gender"
//       />

//       <input
//         type="text"
//         name="bloodGroup"
//         value={patientData.patient.bloodGroup}
//         onChange={handleInputChange}
//         placeholder="Blood Group"
//       />

//       <input
//         type="text"
//         name="patient_Address"
//         value={patientData.patient.patient_Address}
//         onChange={handleInputChange}
//         placeholder="Address"
//       />

//       <input
//         type="number"
//         name="patient_Phone"
//         value={patientData.patient.patient_Phone}
//         onChange={handleInputChange}
//         placeholder="Phone"
//       />

//       <input
//         type="email"
//         name="patient_Email"
//         value={patientData.patient.patient_Email}
//         onChange={handleInputChange}
//         placeholder="Email"
//       />

//       <input
//         type="text"
//         name="patient_UserName"
//         value={patientData.patient.patient_UserName}
//         onChange={handleInputChange}
//         placeholder="Username"
//       />

//       <input
//         type="password"
//         name="password"
//         value={patientData.password}
//         onChange={handlePasswordChange}
//         placeholder="Password"
//       />

//       <button type="submit">Add Patient</button>
//     </form>
//   );
// };
// export default Patient;
