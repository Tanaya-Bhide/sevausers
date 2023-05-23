import React from "react";
import Layout from "./Layout";
import Layout2 from "./Layout2";
import Footer from "./Footer";
function Mission() {
  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout2 />
          <div className="introduction-container">
            <div className="ribbon">Mission</div>
            <div className="content">
              <div className="text-content">
                <h2>OUR MISSION</h2>
                <p>
                  “TO PROVIDE AFFORDABLE HEALTHCARE OF INTERNATIONAL STANDARD
                  WITH HUMAN CARE.”
                </p>

                <h2>OUR MOTTO</h2>
                <p>“MORE THAN HEALTHCARE, HUMAN CARE”</p>
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

export default Mission;
