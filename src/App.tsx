import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchCentreBotany from './components/Research/ResearchCentreBotany';
import ResearchCentreChemistry from './components/Research/ResearchCentreChemistry';
import ResearchCentreCommerce from './components/Research/ResearchCentreCommerce';
import ResearchCentreComputerScience from './components/Research/ResearchCentreComputerScience';
import ResearchCentreEconomics from './components/Research/ResearchCentreEconomics';
import ResearchCentreEnglish from './components/Research/ResearchCentreEnglish';
import ResearchCentreGeography from './components/Research/ResearchCentreGeography';
import ResearchCentreHindi from './components/Research/ResearchCentreHindi';
import ResearchCentreMathematics from './components/Research/ResearchCentreMathematics';
import ResearchCentrePhysics from './components/Research/ResearchCentrePhysics';
import ResearchCentrePsychology from './components/Research/ResearchCentrePsychology';
import ResearchPolicy from './components/Research/ResearchPolicy';
import ResearchPublicationsCommerce from './components/Research/Pages/ResearchPublicationsCommerce';
import ResearchPublicationsChemistry from './components/Research/Pages/ResearchPublicationChemistry';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/research/policy" element={<ResearchPolicy />} />
          <Route path="/research/ResearchPublicationsCommerce/chemisty" element={<ResearchPublicationsChemistry />} />
          <Route path="/research/ResearchPublicationsCommerce/commerce" element={<ResearchPublicationsCommerce />} />
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
          <Route path="*" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;