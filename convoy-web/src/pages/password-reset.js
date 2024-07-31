import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { confirmPasswordReset } from 'firebase/auth';

const PasswordResetPage = () => {
  const location = useLocation();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [oobCode, setOobCode] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('oobCode');
    if (code) {
      setOobCode(code);
    } else {
      setError('Invalid or expired link.');
    }
  }, [location]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage('Password has been reset successfully!');
      setError('');
    } catch (err) {
      console.error('Error resetting password:', err);
      setError(`Error resetting password: ${err.message}`);
      setMessage('');
    }
  };

  return (
    <div className="password-reset-container">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PasswordResetPage;
