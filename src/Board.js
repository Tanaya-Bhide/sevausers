import React from "react";
import Layout from "./Layout";
import Layout2 from "./Layout2";
import Footer from "./Footer";
function Board() {
  const trustees = [
    "Shri Kishor K. Mehta",
    "Shri Rashmi K. Mehta",
    "Smt. Sushila V. Mehta",
    "Smt. Charu K.Mehta",
    "Shri Dilip Shanghvi",
    "Shri Niket V. Mehta",
    "Shri Chetan P. Mehta",
    "Shri Bhavin R. Mehta",
    "Shri Nimish H. Sheth",
    "Shri Ayushman C.Mehta",
    "Shri S.Lakshminarayanan , IAS (Retd.) - Principal Advisor to the Board of Trustees",
  ];
  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout2 />
          <div className="introduction-container">
            <div className="ribbon">Board of Trustees</div>
            <div className="content">
              <div className="text-content">
                <h3>
                  The Lilavati Kirtilal Mehta Medical Trust is being managed and
                  administered by the below Board of Trustees:
                </h3>
                <ul>
                  {trustees.map((trustee, index) => (
                    <li key={index}>{trustee}</li>
                  ))}
                </ul>
                <h3>
                  Shri S.Lakshminarayanan , IAS (Retd.) - Principal Advisor to
                  the Board of Trustees
                </h3>
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

export default Board;
