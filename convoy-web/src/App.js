import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import PasswordResetPage from './pages/password-reset';
import EmailChangePage from './pages/email-change';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
        <Route path="/email-change" element={<EmailChangePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
