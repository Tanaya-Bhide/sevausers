import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Chatbot from "./Chat";
import Layout from "./Layout";
import Footer from "./Footer";
function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlideIndex(next),
  };

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const [showAboutUsDropdown, setShowAboutUsDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showVisitorsDropdown, setShowVisitorsDropdown] = useState(false);
  const [showPatinetsDropdown, setShowPatinetsDropdown] = useState(false);
  const [showAcadamicsDropdown, setshowAcadamicsDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  const toggleAboutUsDropdown = () => {
    setShowAboutUsDropdown((prevState) => !prevState);
    setShowServicesDropdown(false);
    setShowVisitorsDropdown(false);
    setShowPatinetsDropdown(false);
    setshowAcadamicsDropdown(false);
  };
  const toggleAcadamicsDropdown = () => {
    setshowAcadamicsDropdown((prevState) => !prevState);
    setShowServicesDropdown(false);
    setShowVisitorsDropdown(false);
    setShowPatinetsDropdown(false);
    setShowAboutUsDropdown(false);
  };
  const toggleServicesDropdown = () => {
    setShowServicesDropdown((prevState) => !prevState);
    setShowAboutUsDropdown(false);
    setShowVisitorsDropdown(false);
    setShowPatinetsDropdown(false);
    setshowAcadamicsDropdown(false);
  };

  const toggleVisitorsDropdown = () => {
    setShowVisitorsDropdown((prevState) => !prevState);
    setShowAboutUsDropdown(false);
    setShowServicesDropdown(false);
    setShowPatinetsDropdown(false);
    setshowAcadamicsDropdown(false);
  };
  const togglePatientsDropdown = () => {
    setShowPatinetsDropdown((prevState) => !prevState);
    setShowAboutUsDropdown(false);
    setShowServicesDropdown(false);
    setShowVisitorsDropdown(false);
    setshowAcadamicsDropdown(false);
  };
  const toggleContactDropdown = () => {
    setShowContactDropdown((prevState) => !prevState);
    setShowAboutUsDropdown(false);
    setShowServicesDropdown(false);
    setShowVisitorsDropdown(false);
    setShowPatinetsDropdown(false);
    setshowAcadamicsDropdown(false);
  };
  return (
    <div className="homepage">
      {/* Contact Info */}
      <Layout />
      {/* Header */}

      <div className="header">
        <img alt="Hospital Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <div className="dropdown">
                <span
                  className="dropdown-label"
                  onClick={toggleAboutUsDropdown}
                >
                  About Us
                </span>
                {showAboutUsDropdown && (
                  <ul
                    className="dropdown-menu"
                    style={{ flexDirection: "column" }}
                  >
                    <li>
                      <Link to="/about">Introduction</Link>
                    </li>
                    <li>
                      <Link to="/Founders">Founders</Link>
                    </li>
                    <li>
                      <Link to="board">Board of Trusties</Link>
                    </li>
                    <li>
                      <Link to="/management">Management</Link>
                    </li>
                    <li>
                      <Link to="/mission">Mission and Motto</Link>
                    </li>
                    <li>
                      <Link to="/awards">AWARDS & ACCREDITATIONS</Link>
                    </li>
                    <li>
                      <Link to="/compliance">STATUTORY COMPLIANCE</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li>
              <div className="dropdown">
                <span
                  className="dropdown-label"
                  onClick={toggleServicesDropdown}
                >
                  Services
                </span>
                {showServicesDropdown && (
                  <ul
                    className="dropdown-menu"
                    style={{ flexDirection: "column" }}
                  >
                    <li>
                      <Link to="/Ambulance">Ambulance</Link>
                    </li>
                    <li>
                      <Link to="/Blood-Bank">Blood Bank</Link>
                    </li>
                    <li>
                      <Link to="/CentresofExcellence">
                        Centres of Excellence
                      </Link>
                    </li>
                    <li>
                      <Link to="/CriticalCare">Critical Care</Link>
                    </li>
                    <li>
                      <Link to="/DayCare">Day Care</Link>
                    </li>
                    <li>
                      <Link to="/Diagnostics">Diagnostics</Link>
                    </li>
                    <li>
                      <Link to="/Dialysis Centre">Dialysis Centre</Link>
                    </li>
                    <li>
                      <Link to="/InterventionalRadiology">
                        Interventional Radiology
                      </Link>
                    </li>
                    <li>
                      <Link to="/HealthCheckUp">Health Check Up</Link>
                    </li>
                    <li>
                      <Link to="/Pharmacy">Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="/SocialInitiatives">Social Initiatives</Link>
                    </li>
                    <li>
                      <Link to="/HydrotherapyCentre">Hydrotherapy Centre</Link>
                    </li>
                    <li>
                      <Link to="/Emergency">Emergency/Trauma</Link>
                    </li>
                    <li>
                      <Link to="/InterventionalNeuroradiology">
                        Interventional Neuroradiology
                      </Link>
                    </li>
                    <li>
                      <Link to="/Physiotherapy">Physiotherapy</Link>
                    </li>
                    <li>
                      <Link to="/OutPatient">Out Patient</Link>
                    </li>
                    <li>
                      <Link to="/Visa Investigation">Visa Investigation</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown">
                <span
                  className="dropdown-label"
                  onClick={toggleVisitorsDropdown}
                >
                  Visitors
                </span>
                {showVisitorsDropdown && (
                  <ul
                    className="dropdown-menu"
                    style={{ flexDirection: "column" }}
                  >
                    <li>
                      <Link to="/visitinghours">Visitoing Hours</Link>
                    </li>
                    <li>
                      <Link to="/convieneceandfacilities">
                        Convienece and facilities
                      </Link>
                    </li>
                    <li>
                      <Link to="/visitorspolicy">Visitors Policy</Link>
                    </li>
                    <li>
                      <Link to="/dosdonts">Dos and donts</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li>
              <div className="dropdown">
                <span
                  className="dropdown-label"
                  onClick={togglePatientsDropdown}
                >
                  Patients
                </span>
                {showPatinetsDropdown && (
                  <ul
                    className="dropdown-menu"
                    style={{ flexDirection: "column" }}
                  >
                    <li>
                      <Link to="/visitinghours">Visiting Hours</Link>
                    </li>
                    <li>
                      <Link to="/accommodation">Accommodation</Link>
                    </li>
                    <li>
                      <Link to="/empanelledinsurance">
                        Empanelled Insurance Co. & TPA's
                      </Link>
                    </li>
                    <li>
                      <Link to="/suggestionscomplaints">
                        Suggestions/Complaints
                      </Link>
                    </li>
                    <li>
                      <Link to="/floordirectory">Floor Directory</Link>
                    </li>
                    <li>
                      <Link to="/internationalpatients">
                        International Patients
                      </Link>
                    </li>
                    <li>
                      <Link to="/patientsrights">
                        Patients Rights & Responsibilities
                      </Link>
                    </li>
                    <li>
                      <Link to="/patientguide">Patient Guide</Link>
                    </li>
                    <li>
                      <Link to="/empanelledcorporates">
                        Empanelled Corporates
                      </Link>
                    </li>
                    <li>
                      <Link to="/feedback">Feedback</Link>
                    </li>
                    <li>
                      <Link to="/findadoctor">Find a Doctor</Link>
                    </li>
                    <li>
                      <Link to="/inpatients">Inpatients</Link>
                    </li>
                    <li>
                      <Link to="/patienteducation">
                        Patients Education Brochure
                      </Link>
                    </li>
                    <li>
                      <Link to="/tariff">Tariff</Link>
                    </li>
                    <li>
                      <Link to="/registrationform">
                        Download Registration Form
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>

            <li>
              <div className="dropdown">
                <span
                  className="dropdown-label"
                  onClick={toggleAcadamicsDropdown}
                >
                  Acadamics
                </span>
                {showAcadamicsDropdown && (
                  <ul
                    className="dropdown-menu"
                    style={{ flexDirection: "column" }}
                  >
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/cme">CME</Link>
                    </li>
                    <li>
                      <Link to="/dnb">DNB</Link>
                    </li>
                    <li>
                      <Link to="/lhmt">LHMT</Link>
                    </li>
                    <li>
                      <Link to="/muhsfellowship">MUHS Fellowship</Link>
                    </li>
                    <li>
                      <Link to="/muhsmandate">MUHS Mandate</Link>
                    </li>
                    <li>
                      <Link to="/nurses">Nurses</Link>
                    </li>
                    <li>
                      <Link to="/research">Research</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="dropdown">
                <span
                  className="dropdown-label"
                  onClick={toggleContactDropdown}
                >
                  Contact
                </span>
                {showContactDropdown && (
                  <ul
                    className="dropdown-menu"
                    style={{ flexDirection: "column" }}
                  >
                    <li>
                      <Link to="/contactus">Contact Us</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
          <Chatbot />
        </nav>
      </div>

      {/* Slider */}
      <div className="slider">
        <Slider {...sliderSettings}>
          {images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
        <ul className="slider-dots">
          {images.map((_, index) => (
            <li
              key={index}
              className={index === activeSlideIndex ? "active" : ""}
              onClick={() => setActiveSlideIndex(index)}
            ></li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default Home;
