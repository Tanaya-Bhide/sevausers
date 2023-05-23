import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import Layout2 from "./Layout2";
import "./Award.css";
import { useState } from "react";
const Card2 = ({
  title,
  images,
  showImages,
  toggleImageVisibility,
  information,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <button onClick={toggleImageVisibility}>
          {showImages ? "-" : "+"}
        </button>
      </div>
      {showImages && (
        <div className="card-body">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${title} Image ${index + 1}`} />
          ))}
          <p>{information}</p> {/* Render the information field */}
        </div>
      )}
    </div>
  );
};

const Card = ({ award, images, showImages, toggleImageVisibility }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{award}</h3>
        <button onClick={toggleImageVisibility}>
          {showImages ? "-" : "+"}
        </button>
      </div>
      {showImages && (
        <div className="card-body">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Award ${award} Image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
function Awards() {
  const [showImages, setShowImages] = useState({});

  const toggleImageVisibility = (index) => {
    setShowImages((prevState) => {
      const updatedShowImages = { ...prevState };
      updatedShowImages[index] = !prevState[index];
      return updatedShowImages;
    });
  };
  const accreditations = [
    {
      title:
        "National Accreditation Board for Hospitals & Healthcare Providers (NABH)",
      images: ["https://lilavatihospital.com/images/awards/8.jpg"],
      information: `NABH ACCREDITATION

NABH is an acronym for National Accreditation Board for Hospitals & Healthcare Providers. NABH is equivalent to JCI and other International standards including HAS: Haute Authorite de Sante, Australian Council on Healthcare Standards, the Japan Council for Quality in Health Care, and the National Committee for Quality Assurance in the United States. Its standards have been accredited by ISQUA*. The approval of ISQua authenticates that NABH standards are in consonance with the global benchmarks set by ISQua. Hence making NABH accreditation at par with the world’s most leading hospital accreditations.

NABH is a constituent Board of Quality Council of India (QCI), set up with co-operation of the Ministry of Health & Family Welfare, Government of India and the Indian Health Industry. This Board caters to the much desired needs of the consumers and has set standards for progress of the health industry. The board is set up to establish and operate accreditation programme for healthcare organizations. NABH have designed an exhaustive healthcare standard for hospitals and healthcare providers. This standard consists of stringent 600 plus objective elements for the hospital to achieve in order to get the NABH accreditation. These standards are divided between patient centered standards and organization centered standards. NABH accreditation helps planners to promote, implement, monitor and evaluate robust practice in order to ensure that it occupies a central place in the development of the health care system. Thus the objective of NABH accreditation is on continuous improvement in the organizational and clinical performance of health services, not just the achievement of a certificate or award or merely assuring compliance with minimum acceptable standards.

HOW DOES NABH ACCREDITATION HELP PATIENTS?

Patients Rights & Benefits
Patients Safety
Control & Prevention of infections
Practicing good patient care protocols
Better & controlled clinical outcome
Effectively, an NABH accreditation means that the hospital follows stringent standards and meets international benchmarks.`,
    },
    {
      title: "Joint Commission International (JCI)",
      images: [
        "https://th.bing.com/th/id/OIP.sk1AXgvOcAG8P3a5YYPRWgHaGe?pid=ImgDet&rs=1",
      ],
      information:
        `BLOOD BANK ACCREDITATION

        The National Accreditation Board for Hospitals and Healthcare Providers (NABH) has accredited the Blood Bank of Lilavati Hospital with a certificate that signifies excellence and quality in blood transfusion services provided to the patient as a part of the clinical care
        
        KEY OBJECTIVES OF ACCREDITATION
        
        Provide a framework for quality assurance and quality improvement
        Focus on patient safety and quality of patient care
        Set basic standards that the organisation must achieve
        BENEFITS OF ACCREDITATION
        
        Stimulates continuous improvement.
        Demonstrate commitment to quality.
        Opportunity to benchmark with the best.`,
    },
  ];

  const awards = [
    {
      name: "Ketto Ventures 2022-2023 Best Transplant Hospital in India",
      images: [
        "https://lilavatihospital.com/uploads/awards/imgAwards-133254327933888863.jpg",
      ],
    },
    {
      name: "Ketto Ventures 2022-2023 Contribution to Rare Disease Patient Care",
      images: [
        "https://lilavatihospital.com/uploads/awards/imgAwards-133254327793195810.jpg",
      ],
    },
    {
      name: "All India Multispeciality Hospitals Ranking Survey - 2023",
      images: [
        "https://lilavatihospital.com/uploads/awards/imgAwards-133228153799439609.jpeg",
      ],
    },
    {
      name: "Best Hospital for Obstetrics & Gyneacology, Paediatrics, Urology and Orthopedic by Economic Times Healthcare Awards 2022",
      images: [
        "https://lilavatihospital.com/uploads/awards/imgAwards-133145212098452006.jpg",
      ],
    },
    {
      name: "Top Hospitals In India - The Week Hansa Research Best Hospital Survey 2022",
      images: [
        "https://lilavatihospital.com/uploads/awards/imgAwards-133145209564713309.jpeg",
      ],
    },
  ];

  return (
    <div>
      <Layout />
      <div className="about-container">
        <div className="content-container">
          <Layout2 />
          <div className="introduction-container">
            <div className="ribbon">Awards</div>
            <div className="content">
              <div className="text-content">
                <h2>
                  {" "}
                  “Efforts and hardwork put in by team Lilavati Hospital has
                  resulted in various awards and accolades”
                </h2>
                <img src="https://lilavatihospital.com/uploads/home_banner/Horizontal%20award%20pic.jpg" alt="Image description" className="imageofawards" />
                <div>
                  <div>
                    <h2>AWARDS</h2>
                  </div>
                  <div>
                    {awards.map((award, index) => (
                      <Card
                        key={index}
                        award={award.name}
                        images={award.images}
                        showImages={showImages[index]}
                        toggleImageVisibility={() =>
                          toggleImageVisibility(index)
                        }
                      />
                    ))}
                  </div>
                  <div>
                    <h2>ACCREDITATIONS</h2>
                  </div>
                  <div>
                    {accreditations.map((accreditation, index) => (
                      <Card2
                        key={index}
                        title={accreditation.title}
                        images={accreditation.images}
                        showImages={showImages[index + awards.length]}
                        toggleImageVisibility={() =>
                          toggleImageVisibility(index + awards.length)
                        }
                        information={accreditation.information} // Add this line
                      >
                        <p>{accreditation.information}</p>
                      </Card2>
                    ))}
                  </div>
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

export default Awards;
