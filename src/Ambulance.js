import React from 'react'
import Layout4 from './Layout4'
import Layout from './Layout'
import Footer from './Footer'
function Ambulance() {
  return (
<div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout4 />
          <div className="introduction-container">
            <div className="ribbon">INTRODUCTION</div>
            <div className="content">
              <div className="text-content">
                <h3>SEVASADAN HOSPITAL</h3>
                <p>
                  Sevasadan Hospital is a leading healthcare facility in Sangli,
                  committed to providing high-quality medical services to the
                  community. With a focus on patient care and advanced medical
                  treatments, we have earned a reputation for excellence and
                  compassion. Our dedicated team of doctors, nurses, and support
                  staff work tirelessly to ensure the well-being of our patients.
                </p>
                {/* Rest of the introduction content */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "250px", marginBottom: "50px" }}>
        <Footer />
      </div>
    </div>
  )
}

export default Ambulance