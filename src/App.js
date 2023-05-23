import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"; // Import React
import Home from "./Home"; // Make sure you import the component correctly
import Chatbot from "./Chat";
import "./App.css";
import About from "./About";
import Founder from "./Founder";
import Board from "./Board";
import Management from "./Management";
import Mission from "./Mission";
import Awards from "./Awards";
import Compliance from "./Compliance";
import VisitingHours from "./VisitingHours";
import VisitingPolicy from "./VisitingPolicy";
import Dos from "./Dos";
import Convinience from "./Convinience";
import Contactus from "./Contactus";
import Ambulance from "./Ambulance";
import Criticalcare from "./Criticalcare";
import DayCare from "./DayCare";
import BloodBank from "./BloodBank"; 
import Center from "./Center";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Founders" element={<Founder/>} />
        <Route path="/board" element={<Board/>} />
        <Route path="/management" element={<Management/>} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/awards" element={<Awards/>} />
        <Route path="/compliance" element={<Compliance/>} />
        <Route path="/visitinghours" element={<VisitingHours/>} />
        <Route path="/convieneceandfacilities" element={<Convinience/>} />
        <Route path="/visitorspolicy" element={<VisitingPolicy/>} />
        <Route path="/dosdonts" element={<Dos/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/Ambulance" element={<Ambulance/>} />
        <Route path="/Blood-Bank" element={<BloodBank/>} />
        <Route path="/CentresofExcellence" element={<Center/>} />
        <Route path="/CriticalCare" element={<Criticalcare/>} />
        <Route path="/DayCare" element={<Contactus/>} />
      
        
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
