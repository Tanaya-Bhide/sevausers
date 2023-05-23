import React from "react";
import Layout3 from "./Layout3";
import Layout from "./Layout";
import Footer from "./Footer";
function Dos() {
  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout3 />
          <div className="introduction-container">
            <div className="ribbon">INTRODUCTION</div>
            <div className="content">
              <div className="text-content">
                <div>
                  <h1>Visiting Guidelines</h1>

                  <img
                    src="https://lilavatihospital.com/uploads/home_banner/DefaultInnerImage.jpg"
                    alt="hospital"
                  />
                  <h2>DO's and Don'ts</h2>
                  <ul>
                    <li>
                      Ask your patient's permission to visit before you arrive.
                    </li>
                    <li>
                      Wash your hands and sanitize them before you touch the
                      patient or hand the patient something you've been
                      touching.
                    </li>
                    <li>
                      Turn off your cell phone, or at least turn the ringer off.
                    </li>
                    <li>
                      Leave the room if the doctor or provider arrives to
                      examine or talk to the patient.
                    </li>
                  </ul>

                  <h2>DON'Ts</h2>
                  <ul>
                    <li>
                      Do not enter the hospital if you have any symptoms that
                      could be contagious.
                    </li>
                    <li>
                      Don't stay with the patient for a long time. Keep the
                      visit short.
                    </li>
                    <li>
                      Don't bring outside food/fruits inside the hospital for
                      patients/patient's attendants. The hospital serves
                      well-balanced vegetarian meals.
                    </li>
                    <li>
                      Do not smoke, consume alcohol, and non-vegetarian food in
                      the hospital premises.
                    </li>
                    <li>Don't bring flowers or bouquets for the patient.</li>
                    <li>
                      Don't attempt photography or video shoot in the hospital
                      premises.
                    </li>
                  </ul>
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

export default Dos;
