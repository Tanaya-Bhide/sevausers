import React from "react";
import { Link } from "react-router-dom";
import "./Layout2.css";

const Layout2 = () => {
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
              <Link to="/about">Introduction</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Founders">Founders</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/board">Board of Trustees</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/management">Management</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/mission">Mission and Motto</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/awards">AWARDS & ACCREDITATIONS</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/compliance">STATUTORY COMPLIANCE</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="image">
        <img
          src="https://th.bing.com/th/id/OIP.-C1VJTe5kswL_LzIoOVZ7gHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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

export default Layout2;
