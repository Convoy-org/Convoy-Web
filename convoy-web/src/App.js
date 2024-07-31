import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import PasswordResetPage from './pages/password-reset';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
