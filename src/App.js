import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModernTireLandingPage from './components/ModernTireLandingPage';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModernTireLandingPage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}

export default App;