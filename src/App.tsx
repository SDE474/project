import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchCentreBotany from './components/Research/ResearchCentreBotany';
import ResearchCentreChemistry from './components/Research/ResearchCentreChemistry';
import ResearchCentreCommerce from './components/Research/ResearchCentreCommerce';
import ResearchCentreComputerScience from './components/Research/ResearchCentreComputerScience';
import ResearchCentreEconomics from './components/Research/ResearchCentreEconomics';
import ResearchCentreEnglish from './components/Research/ResearchCentreEnglish.tsx';
import ResearchCentreGeography from './components/Research/ResearchCentreGeography';
import ResearchCentreHindi from './components/Research/ResearchCentreHindi';
import ResearchCentreMathematics from './components/Research/ResearchCentreMathematics';
import ResearchCentrePhysics from './components/Research/ResearchCentrePhysics';
import ResearchCentrePsychology from './components/Research/ResearchCentrePsychology';
import ResearchPolicy from './components/Research/ResearchPolicy';

function App() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;

  const renderContent = () => {
    switch (pathname) {
      case '/research/policy':
        return <ResearchPolicy />;
      case '/research/centres/botany':
        return <ResearchCentreBotany />;
      case '/research/centres/chemistry':
        return <ResearchCentreChemistry />;
      case '/research/centres/commerce':
        return <ResearchCentreCommerce />;
      case '/research/centres/economics':
        return <ResearchCentreEconomics />;
      case '/research/centres/geography':
        return <ResearchCentreGeography />;
      case '/research/centres/english':
        return <ResearchCentreEnglish />;
      case '/research/centres/hindi':
        return <ResearchCentreHindi />;
      case '/research/centres/physics':
        return <ResearchCentrePhysics />;
      case '/research/centres/mathematics':
        return <ResearchCentreMathematics />;
      case '/research/centres/psychology':
        return <ResearchCentrePsychology />;
      case '/research/centres/computer-science':
        return <ResearchCentreComputerScience />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;