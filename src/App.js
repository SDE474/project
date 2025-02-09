import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Hero, {}) }), _jsx(Route, { path: "/research/policy", element: _jsx(ResearchPolicy, {}) }), _jsx(Route, { path: "/research/ResearchPublicationsCommerce/chemisty", element: _jsx(ResearchPublicationsChemistry, {}) }), _jsx(Route, { path: "/research/ResearchPublicationsCommerce/commerce", element: _jsx(ResearchPublicationsCommerce, {}) }), _jsx(Route, { path: "/research/centres/botany", element: _jsx(ResearchCentreBotany, {}) }), _jsx(Route, { path: "/research/centres/chemistry", element: _jsx(ResearchCentreChemistry, {}) }), _jsx(Route, { path: "/research/centres/commerce", element: _jsx(ResearchCentreCommerce, {}) }), _jsx(Route, { path: "/research/centres/economics", element: _jsx(ResearchCentreEconomics, {}) }), _jsx(Route, { path: "/research/centres/geography", element: _jsx(ResearchCentreGeography, {}) }), _jsx(Route, { path: "/research/centres/english", element: _jsx(ResearchCentreEnglish, {}) }), _jsx(Route, { path: "/research/centres/hindi", element: _jsx(ResearchCentreHindi, {}) }), _jsx(Route, { path: "/research/centres/physics", element: _jsx(ResearchCentrePhysics, {}) }), _jsx(Route, { path: "/research/centres/mathematics", element: _jsx(ResearchCentreMathematics, {}) }), _jsx(Route, { path: "/research/centres/psychology", element: _jsx(ResearchCentrePsychology, {}) }), _jsx(Route, { path: "/research/centres/computer-science", element: _jsx(ResearchCentreComputerScience, {}) }), _jsx(Route, { path: "*", element: _jsx(Hero, {}) })] }), _jsx(Footer, {})] }) }));
}
export default App;
