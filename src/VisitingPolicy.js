import React from "react";
import Layout3 from "./Layout3";
import Layout from "./Layout";
import Footer from "./Footer";
function VisitingPolicy() {
  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout3 />
          <div className="introduction-container">
            <div className="ribbon">Visiting Policy</div>
            <div className="content">
              <div className="text-content">
                <div>
 
                  <img src="https://lilavatihospital.com/uploads/home_banner/DefaultInnerImage.jpg" alt="hospital" />

                  <table>
                    <thead>
                      <tr>
                        <th>Class</th>
                        <th>Attendant Pass</th>
                        <th>Visitors Pass</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Executive Suite</td>
                        <td>2</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Super Deluxe</td>
                        <td>1</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Deluxe</td>
                        <td>1</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Special</td>
                        <td>1</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Twin Sharing</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Economy</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Common</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>ICU's</td>
                        <td>1</td>
                        <td>NIL</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    No pass for children below 10 years except between 6:30 pm
                    to 7:00 pm only for 1/2 hours. A surgery pass is issued half
                    an hour before the scheduled time of surgery and is valid
                    till the end of surgery. Pass issued for CABG surgery is
                    valid until 8:00 AM the next day. Only one attendant is
                    permitted to stay with the patients round the clock (except
                    in Executive, Super Deluxe and Pediatric Rooms.) The
                    attendant pass is valid up to the date of discharge. The
                    attendant of the patient admitted in ICUs will remain in the
                    hospital in the attended waiting area on the same floor.
                    He/She is permitted to spend the night in the prescribed
                    area where bunker beds are provided. Passes can be renewed
                    at the Reception/Admission counter. Patients/Relatives who
                    require the authentication (seal) on hospital documents or
                    Mediclaim papers shall be issued a pass for MRD between 9:00
                    AM and 4:30 PM on all days except Sunday & Public Holidays.
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

export default VisitingPolicy;
