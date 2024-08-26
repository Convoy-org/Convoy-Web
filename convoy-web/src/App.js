import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import PasswordResetPage from './pages/ios/password-reset';
import EmailChangePage from './pages/ios/email-change';
import AboutPage from "./pages/about"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reset-password" element={<PasswordResetPage />} />
        <Route path="/email-change" element={<EmailChangePage />} />
        <Route path="/action" element={<AuthActionHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

const AuthActionHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const oobCode = queryParams.get('oobCode');
  const mode = queryParams.get('mode'); // 'resetPassword' or 'verifyEmail'

  React.useEffect(() => {
    if (oobCode) {
      if (mode === 'resetPassword') {
        navigate(`/reset-password?oobCode=${oobCode}`);
      } else if (mode === 'verifyEmail') {
        navigate(`/email-change?oobCode=${oobCode}`);
      } else {
        // Handle invalid mode
        console.error('Invalid mode');
        navigate('/'); // Redirect to a default or error page
      }
    } else {
      // Handle missing oobCode
      console.error('No action code found');
      navigate('/'); // Redirect to a default or error page
    }
  }, [oobCode, mode, navigate]);

  return <div>Redirecting...</div>;
};

export default App;
