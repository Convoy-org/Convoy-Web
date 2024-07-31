import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const PasswordResetPage = () => {
  const { oobCode } = useParams(); // Firebase action code
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if the code is valid
    if (!oobCode) {
      setError('Invalid or expired link.');
    }
  }, [oobCode]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().confirmPasswordReset(oobCode, newPassword);
      setMessage('Password has been reset successfully!');
      setError('');
    } catch (err) {
      setError('Error resetting password. Please try again.');
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
