import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/landing-page'; // Ensure this matches your component name
import PasswordResetPage from './pages/password-reset'; // Ensure this matches your component name

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Default route */}
        <Route path="/landingpage" element={<LandingPage />} /> {/* Additional route if needed */}
        <Route path="/reset-password/:oobCode" element={<PasswordResetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
