import React from "react";
import Layout3 from "./Layout3";
import Layout from "./Layout";
import Footer from "./Footer";
function VisitingHours() {
  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout3/>
          <div className="introduction-container">
            <div className="ribbon">INTRODUCTION</div>
            <div className="content">
              <div className="text-content">
              <img src="https://lilavatihospital.com/uploads/home_banner/InnerBanner-0053-6346-5169.jpg" alt="Image" />
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

export default VisitingHours;
