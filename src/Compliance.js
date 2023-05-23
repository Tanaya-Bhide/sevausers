import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import Layout2 from "./Layout2";
import { useState } from "react";
import "./Compliance.css"
function Compliance() {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "biomedical":
        return (
          <div>
            <div>
              <h2>BIOMEDICAL DEPARTMENT</h2>
              <ul>
                <li>
                  Yearly Quality Assurance testing for all X-ray based systems
                  installed at the hospital
                </li>
                <li>
                  AERB (Atomic Energy Regulatory Board) Licensing and
                  registration of all X-ray systems installed at the hospital
                </li>
                <li>
                  Radiation workers (technicians and professionals) – TLD badge,
                  Quarterly monitoring
                </li>
                <li>
                  Registration of workers in X-ray departments (technicians and
                  professionals)
                </li>
                <li>Yearly - Lead Apron Quality Assurance testing</li>
                <li>Bio Medical Waste Report March - 2023</li>
                <li>Bio Medical Waste Annual Report</li>
                <li>Jan To Dec 2018</li>
                <li>Jan To Dec 2019</li>
                <li>Jan To Dec 2020</li>
                <li>Jan To Dec 2021</li>
                <li>Jan To Dec 2022</li>
                <li>March 2023</li>
              </ul>
            </div>
          </div>
        );
      case "stentPriceList":
        return (
          <div>
            {" "}
            <div>
              <h2>Stent Price List</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name of the Stent</th>
                    <th>Company Name</th>
                    <th>Distributor Name</th>
                    <th>M.R.P (Inclusive of all Taxes)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PROMUS PREMIER</td>
                    <td>BOSTON SCIENTIFIC</td>
                    <td>RUSHABH BIOMED</td>
                    <td>Rs. 35834 /-</td>
                  </tr>
                  <tr>
                    <td>SYNERGY DES STENT</td>
                    <td>BOSTON SCIENTIFIC</td>
                    <td>RUSHABH BIOMED</td>
                    <td>Rs. 35834.54</td>
                  </tr>
                  <tr>
                    <td>YUKON CHOICE</td>
                    <td>TRANSLUMINIA</td>
                    <td>RIDDHI SIDDHI HEALTHCARE</td>
                    <td>Rs. 35834 /-</td>
                  </tr>
                  <tr>
                    <td>RESOLUTE - ONYX DES STENT</td>
                    <td>MEDTRONIC</td>
                    <td>INDIA MEDTRONIC</td>
                    <td>Rs. 35834.00 /-</td>
                  </tr>
                  <tr>
                    <td>ULTIMASTER TANSAI DES STENT</td>
                    <td>TERUMO</td>
                    <td>COSMOS ENTERPRISE</td>
                    <td>RS. 35834.54 /-</td>
                  </tr>
                  <tr>
                    <td>BIOMATRIX FLEX/NEOFLEX DES STENT</td>
                    <td>BIOSENSOR</td>
                    <td>T.A. TECHNOLOGIES</td>
                    <td>Rs. 35834.54 /-</td>
                  </tr>
                  <tr>
                    <td>BIOFREEDOM</td>
                    <td>BIOSENSOR</td>
                    <td>T A TECHNOLOGIES & HEALTHCARE</td>
                    <td>Rs. 35834 /-</td>
                  </tr>
                  <tr>
                    <td>ORSIRO DES STENT</td>
                    <td>BIOTRONIK</td>
                    <td>SHRIGUN PHARMACHEM PVT. LTD.</td>
                    <td>Rs. 35834.54 /-</td>
                  </tr>
                  <tr>
                    <td>XIENCE XPEDITION DES STENT</td>
                    <td>ABBOTT</td>
                    <td>SINO CARE SURGICALS PVT. LTD.</td>
                    <td>Rs. 35834.53 /-</td>
                  </tr>
                  <tr>
                    <td>COROFLEX -ISAR NEO DES STENT</td>
                    <td>B/BRAUN</td>
                    <td>SEVA MEDICAL EQUIPMENT PVT. LTD.</td>
                    <td>RS. 35834.54 /-</td>
                  </tr>
                  <tr>
                    <td>BMS - GRAFTMASTER STENT GRAFT</td>
                    <td>ABBOTT</td>
                    <td>SINO CARE SURGICALS PVT. LTD.</td>
                    <td>Rs. 9841.68 /-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case "covidNotifications":
        return (
          <div>
            {" "}
            <div>
              <h2>Notifications - COVID-19</h2>
              <ul>
                <li>
                  <a href="https://example.com/notification-rates-covid-patients">
                    Notification related to rates for COVID patients
                  </a>
                </li>
                <li>
                  <a href="https://example.com/bed-strength">Bed Strength</a>
                </li>
                <li>
                  <a href="https://example.com/govt-regulated-concesstional-beds">
                    Govt. Regulated Concesstional Beds
                  </a>
                </li>
                <li>
                  <a href="https://example.com/notification-covid-vaccination">
                    Notification related to COVID-19 Vaccination
                  </a>
                </li>
                <li>
                  <a href="https://example.com/notification-mucormycosis-patients">
                    Notification for Mucormycosis patients
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      case "reservedBeds":
        return (
          <div>
            <div>
              <h2>
                INFORMATION ABOUT HOSPITAL RESERVED BEDS UNDER SECTION 41AA
              </h2>
              <table>
                <tbody>
                  <tr>
                    <td>TOTAL NUMBER OF HOSPITAL OPERATIONAL BEDS</td>
                    <td>260</td>
                  </tr>
                  <tr>
                    <td>Tuesday, 23 May 2023</td>
                  </tr>
                  <tr>
                    <td>BEDS RESERVED FOR INDIGENT PATIENT</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>BEDS RESERVED FOR WEAKER SECTION PATIENTS</td>
                    <td>26</td>
                  </tr>
                  <tr>
                    <td>OCCUPIED BEDS</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>OCCUPIED BEDS</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>VACANT BEDS</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>VACANT BEDS</td>
                    <td>23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout2 />
          <div className="introduction-container">
            <div className="ribbon">STATUTORY COMPLIANCE</div>
            <div className="content">
              <div className="text-content">
                <nav>
                  <button onClick={() => handleSectionClick("biomedical")}>
                    BIOMEDICAL DEPARTMENT
                  </button>
                  <button onClick={() => handleSectionClick("stentPriceList")}>
                    STENT PRICE LIST
                  </button>
                  <button
                    onClick={() => handleSectionClick("covidNotifications")}
                  >
                    NOTIFICATIONS - COVID19
                  </button>
                  <button onClick={() => handleSectionClick("reservedBeds")}>
                    INFORMATION ABOUT HOSPITAL RESERVED BEDS UNDER SECTION 41AA
                  </button>
                </nav>
                <div>{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "250px", marginBottom: "50px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Compliance;
