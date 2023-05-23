import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import Layout3 from "./Layout2";
function Convinience() {
  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout3 />
          <div className="introduction-container">
            <div className="ribbon">CONVENIENCE & FACILITIES</div>
            <div className="content">
              <div className="text-content">
                <img
                  src="https://lilavatihospital.com/uploads/home_banner/DefaultInnerImage.jpg"
                  alt="Image"
                />
                <div>
                  <h1>Hospital Facilities</h1>

                  <h2>Cafeteria</h2>
                  <p>
                    Our cafeteria is located on the 2nd Floor. The meals served
                    here are delicious. It is a convenient option for all
                    visitors to have refreshment within hospital premises at a
                    nominal rate.
                  </p>
                  <p>Cafeteria Timing: 7.30 AM to 9.30 PM.</p>

                  <h2>Telephone</h2>
                  <p>Available in the patient room</p>
                  <ul>
                    <li>
                      1st to 9th Floor: Dial 26758 or 26568 followed by bed no.
                      e.g. bed no. 924; Dial 26758924 or 26568924
                    </li>
                    <li>
                      10th and 11th Floor: Dial 2675 or 2656 followed by bed no.
                      e.g. bed no. 1104; Dial 26751104 or 26561104)
                    </li>
                  </ul>

                  <h2>Bank</h2>
                  <p>
                    We have an extension counter of the Union Bank within our
                    premises. This makes it more convenient for you to make
                    financial transactions.
                  </p>

                  <h2>ATM</h2>
                  <p>
                    For your convenience, we have an ATM located at the ground
                    floor near Gate No.2.
                  </p>

                  <h2>Dining Area</h2>
                  <p>
                    For visitors who carry home-cooked food, we have a dining
                    area besides the hospital’s pharmacy shop.
                  </p>

                  <h2>Parking</h2>
                  <p>
                    A Pay & Park facility run by MCGM is available close to the
                    hospital.
                  </p>
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

export default Convinience;
