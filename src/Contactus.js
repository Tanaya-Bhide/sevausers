import "./contactus.css";
function Contactus() {
  const GoogleMap = () => {
    return (
      <div>
        <h1>Google Map</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.787162687325!2d74.62800667507034!3d16.836911583959452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12250e5bfa4a5%3A0xe9ab0b5a9b10d5e3!2sSevasadan%20Lifeline%20Superspeciality%20Hospital!5e0!3m2!1sen!2sin!4v1684851859096!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    );
  };
  return (
    <div className="contactus">
      <h2>HOW TO REACH US</h2>
      <div>
        <GoogleMap />
      </div>
      <p>
        Lilavati Hospital & Research Centre
        <br />
        A-791, Bandra Reclamation, Bandra (W),
        <br />
        Mumbai - 400050. India.
      </p>

      <h2>IMPORTANT CONTACT NUMBERS</h2>
      <ul>
        <li>Ambulance: +91 9769250010</li>
        <li>
          Boardline: 022-69318000 / 69301000 / 022-50598000 / 022-50591000
        </li>
        <li>Emergency/ Casualty: 022-69318063 / 69318064 / +91 8657907754</li>
        <li>Admission Department: 8080/ 8081/ 8082</li>
        <li>Appointment - OPD: 8657907751 / 8657907752 / 8657907753</li>
        <li>Billing - Inpatient: 1586</li>
        <li>Billing - OPD: 8052</li>
        <li>Blood Bank: 8215</li>
        <li>Cardiology: 8236</li>
        <li>CT Scan Department: 8044</li>
        <li>Dental: 8020</li>
        <li>Dermatology: 8021</li>
        <li>EMG/ EEG: 8249</li>
        <li>Endoscopy: 8057</li>
        <li>ENT/ Audiometry: 8232</li>
        <li>Health Check-up Department: 8657896447</li>
        <li>
          Home Sample Collection (Monday to Saturday: 8am - 6pm): 8686094646
        </li>
        <li>Hospital Fax: + 91 (22) 2640 7655</li>
        <li>IVF: 8226</li>
        <li>MRI Department: 8066</li>
        <li>Nuclear Medicine: 8092</li>
        <li>Ophthalmology: 8229</li>
        <li>Physiotherapy: 1536</li>
        <li>Report Dispatch Counter: 1620</li>
        <li>Sample Collection Room: 8028</li>
        <li>TPA Cell: 8089</li>
        <li>X-Ray, Sonography Department: 8030/8038</li>
        <li>
          Visa Section: 8248 / 8244 / 8657907756 (12noon to 4pm, Mon to Sat)
        </li>
      </ul>

      <h2>EMAIL ADDRESS</h2>
      <ul>
        <li>For feedback/suggestions: feedback@lilavatihospital.com</li>
        <li>For grievances: complaints@lilavatihospital.com</li>
        <li>For any other queries: info@lilavatihospital.com</li>
      </ul>
    </div>
  );
}

export default Contactus;
