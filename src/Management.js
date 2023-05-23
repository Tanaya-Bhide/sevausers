import React from "react";
import Layout from "./Layout";
import Layout2 from "./Layout2";
import Footer from "./Footer";
function Management() {
  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout2 />
          <div className="introduction-container">
            <div className="ribbon">Management</div>
            <div className="content">
              <div className="text-content">
                <div>
                  <h2>Lt. Gen. (Dr.) V Ravishankar, VSM (Retd.)</h2>
                  <h3>
                    Chief Operating Officer, Senior Consultant – Cardiothoracic
                    Surgery
                  </h3>
                  <img src="https://lilavatihospital.com/images/v_ravishankar.jpg" alt="Doctor's Profile" />

                  <h4>About</h4>
                  <p>
                    Lt Gen (Dr) V Ravishankar, VSM (Retd.) is a Cardiothoracic
                    surgeon having served in Armed Forces Medical Services for
                    close to 38 years and has assumed the appointment of Chief
                    Operating officer and Senior Consultant Cardiothoracic
                    Surgery at Lilavati Hospital in November, 2015. A graduate
                    of Maulana Azad Medical College, New Delhi, he did his MS,
                    DNB in General surgery and subsequently M.Ch (Cardiothoracic
                    surgery) from AFMC, under Pune University. He has been
                    trained abroad at St Vincent's Hospital, Portland, Oregon,
                    USA and also at Perth, Australia in adult cardiac surgery.
                  </p>

                  <h4>Experience</h4>
                  <p>
                    In a span of 38 yrs he held many specialist and
                    administrative appointments in Army Medical Corps having
                    worked at Military Hospital (Cardiothoracic Thoracic Centre)
                    Pune and the prestigious Army Hospital (Research & Referral)
                    New Delhi. He has been performing all adult and paediatric
                    cardiac surgery including complex congenital surgeries and
                    was designated professor and Head of Department at both
                    these institutions.
                  </p>

                  <h4>Awards and Recognition</h4>
                  <p>
                    He is examiner for DNB and M.Ch in his speciality and also
                    an assessor for DNB CT Surgery. His rich experience includes
                    administrative appointments as Director and Commandant of
                    Command Hospital Pune, the largest hospital in armed forces
                    with over 1000 beds and Commandant of Army Medical Corps
                    centre and College at Lucknow where over 5000 paramedics are
                    being trained and where all medical officers attend courses
                    at different phases in their career. For his distinguished
                    services to the Nation, he has been awarded Army commanders
                    commendation twice and Vishisht Seva Medal (VSM) by the
                    President of India. He has also received the Sakaal Times
                    award for outstanding contribution to society at Pune.
                  </p>

                  <h3>MR. RAJENDER PUROHIT</h3>
                  <h4>Director – Finance</h4>

                  <h3>DR. NIRAJ UTTAMANI</h3>
                  <h4>Medical Superintendent</h4>
                </div>
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

export default Management;
