import React from "react";
import { Link } from "react-router-dom";
import "./Layout3.css";

const Layout3 = () => {
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
              <Link to="/visitinghours">Visitoing Hours</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/convieneceandfacilities"> Convienece and facilities</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/visitorspolicy">Visitors Policy</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/dosdonts">Dos and donts</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="image">
        <img
          src="https://lilavatihospital.com/images/ad_img.jpg"
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

export default Layout3;
