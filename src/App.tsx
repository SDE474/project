import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Research Components
import ResearchCentreBotany from "./components/Research/ResearchCentreBotany";
import ResearchCentreChemistry from "./components/Research/ResearchCentreChemistry";
import ResearchCentreCommerce from "./components/Research/ResearchCentreCommerce";
import ResearchCentreComputerScience from "./components/Research/ResearchCentreComputerScience";
import ResearchCentreEconomics from "./components/Research/ResearchCentreEconomics";
import ResearchCentreEnglish from "./components/Research/ResearchCentreEnglish";
import ResearchCentreGeography from "./components/Research/ResearchCentreGeography";
import ResearchCentreHindi from "./components/Research/ResearchCentreHindi";
import ResearchCentreMathematics from "./components/Research/ResearchCentreMathematics";
import ResearchCentrePhysics from "./components/Research/ResearchCentrePhysics";
import ResearchCentrePsychology from "./components/Research/ResearchCentrePsychology";
import ResearchPolicy from "./components/Research/ResearchPolicy";
import ResearchPublicationsCommerce from "./components/Research/Pages/ResearchPublicationsCommerce";
import ResearchPublicationsChemistry from "./components/Research/Pages/ResearchPublicationChemistry";

// Pages Components
import Academic from "./components/Academics/Academic";
import Admission from "./components/Academics/Admission";
import CurriculumDelivery from "./components/Academics/CurriculumDelivery";
import FeeRefundPolicy from "./components/Academics/FeeRefundPolicy";
import Mentor from "./components/Academics/Mentor";
import PhysicalAcademicFacility from "./components/Academics/PhysicalAcademicFacility";
import ProspectivePlan from "./components/Academics/ProspectivePlan";
import ShortTermCourses from "./components/Academics/ShortTermCourses";

// Auth Components
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Hero />} />

          {/* Academic & Policies */}
          <Route path="/academic" element={<Academic />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/curriculum-delivery" element={<CurriculumDelivery />} />
          <Route path="/fee-refund-policy" element={<FeeRefundPolicy />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/physical-academic-facility" element={<PhysicalAcademicFacility />} />
          <Route path="/prospective-plan" element={<ProspectivePlan />} />
          <Route path="/short-term-courses" element={<ShortTermCourses />} />

          {/* Research Section */}
          <Route path="/research/policy" element={<ResearchPolicy />} />
          <Route path="/research/publications/commerce" element={<ResearchPublicationsCommerce />} />
          <Route path="/research/publications/chemistry" element={<ResearchPublicationsChemistry />} />
          <Route path="/research/centres/botany" element={<ResearchCentreBotany />} />
          <Route path="/research/centres/chemistry" element={<ResearchCentreChemistry />} />
          <Route path="/research/centres/commerce" element={<ResearchCentreCommerce />} />
          <Route path="/research/centres/economics" element={<ResearchCentreEconomics />} />
          <Route path="/research/centres/geography" element={<ResearchCentreGeography />} />
          <Route path="/research/centres/english" element={<ResearchCentreEnglish />} />
          <Route path="/research/centres/hindi" element={<ResearchCentreHindi />} />
          <Route path="/research/centres/physics" element={<ResearchCentrePhysics />} />
          <Route path="/research/centres/mathematics" element={<ResearchCentreMathematics />} />
          <Route path="/research/centres/psychology" element={<ResearchCentrePsychology />} />
          <Route path="/research/centres/computer-science" element={<ResearchCentreComputerScience />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          {/* Redirect Unknown Routes to Homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
