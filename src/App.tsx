import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CompusLife from './components/CompusLife'; // Correct import of CampusLife

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />
      <CampusLife /> {/* Add CampusLife component here */}
      <Footer />
    </div>
  );
}

export default App;
