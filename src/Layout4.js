import React from "react";
import { Link } from "react-router-dom";
import "./Layout4.css";

const Layout4 = () => {
  return (
    <div className="layout">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <table className="navigation">
        <tbody>
          <tr>
            <td>
              <Link to="/Ambulance">Ambulance</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Blood-Bank">Blood Bank</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/CentresofExcellence">Centres of Excellence</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/CriticalCare">Critical Care</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/DayCare">Day Care</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Diagnostics">Diagnostics</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Dialysis Centre">Dialysis Centre</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/InterventionalRadiology">
                Interventional Radiology
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/HealthCheckUp">Health Check Up</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Pharmacy">Pharmacy</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/SocialInitiatives">Social Initiatives</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/HydrotherapyCentre">Hydrotherapy Centre</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Emergency">Emergency/Trauma</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Emergency">Emergency/Trauma</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/InterventionalNeuroradiology">
                Interventional Neuroradiology
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Physiotherapy">Physiotherapy</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/OutPatient">Out Patient</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Visa Investigation">Visa Investigation</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="image">
        <img
          src="https://lilavatihospital.com/images/adv_service.jpg"
          alt="Sample Image"
        />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Layout4;
