import React from "react";
import Layout from "./Layout";
import Footer from "./Footer";
import "./Founder.css";
import Layout2 from "./Layout2";

const Founder = () => {
  const founder = {
    name: "Late Shri Kirtilal Mehta",
    role: "Founder",
    vision: "To provide unmatched healthcare services to the common Man",
    image: "https://th.bing.com/th/id/R.69a3791715d4a42523b5972db4db1948?rik=1JHvKTEm9byBzA&riu=http%3a%2f%2fwww.lilavatihospital.com%2fimages%2ff_kirtilal.jpg&ehk=H2QNhK%2b32X5sF6A7ovHy17pWoB2Ri9C5oKh6sbKhS70%3d&risl=&pid=ImgRaw&r=0",
    bio: 'Born in the small town of Palanpur on February 07, 1907, Shri Mehta joined his family business in Rangoon, Burma. Having lost his father at a very young age, circumstances led him to be independent and responsible. As a young man with great ambition, Mr. Mehta setup an independent business in Mumbai under his own name. He had a keen eye on business opportunities and was able to spot the potential in exporting diamonds to Europe. He pioneered the entry of the Indian community in Antwerp, Belgium. His exploits in the world of business earned him a lot of recognition and awards which include the prestigious "Office of the Order" honour by His Majesty The King of Belgium in 1991, being the first ever Indian to receive it. Other notable awards include the Leading Exporter Award by the Government of India, Outstanding Exporter Award from the President of Israel, and Honour by King of Palanpur.',
    awards: [
      "Office of the Order honour by His Majesty The King of Belgium",
      "Leading Exporter Award by Government of India",
      "Outstanding Exporter Award from the President of Israel",
      "Honour by King of Palanpur",
    ],
  };

  const coFounder = {
    name: "Late Shrimati Lilavati Kirtilal Mehta",
    role: "Co-founder",
    vision: "To provide unmatched healthcare services to the common Man",
    image: "https://lilavatihospital.com/images/f_lilavati.jpg",
    bio: "A woman of compassion, Smt. Mehta was a key driving force in setting up Lilavati Hospital & Research Centre. People looked up to her with great respect and bestowed a lot of love upon her, as she always strived for the betterment of the underprivileged. Smt. Mehta strongly believed in Equality and that every child has a right to Education and Equal opportunity in life.",
  };

  return (
    <div>
      <Layout />
      <div className="Founder-container">
        <div className="content-container">
          <Layout2 />
          <div className="introduction-container">
            <div className="ribbon">FOUNDERS</div>
            <div className="content">
              <div className="text-content">
                <div className="founder-info">
                  <h2>{founder.name}</h2>
                  <h3>{founder.role}</h3>
                  <p>{founder.vision}</p>
                  <img src={founder.image} alt="Founder" />
                  <p>{founder.bio}</p>
                  <h4>Awards:</h4>
                  <ul>
                    {founder.awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                </div>
                <div className="co-founder-info">
                  <h2>{coFounder.name}</h2>
                  <h3>{coFounder.role}</h3>
                  <p>{coFounder.vision}</p>
                  <img src={coFounder.image} alt="Co-founder" />
                  <p>{coFounder.bio}</p>
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
};

export default Founder;
