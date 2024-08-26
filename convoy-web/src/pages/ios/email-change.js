import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAuth, applyActionCode } from "firebase/auth";

const EmailChangePage = () => {
  const location = useLocation();
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [oobCode, setOobCode] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("oobCode");
    if (code) {
      setOobCode(code);
    } else {
      setError("Invalid or expired link.");
    }
  }, [location]);

  const handleChangeEmail = async (e) => {
    e.preventDefault();

    if (newEmail !== confirmEmail) {
      setError("Emails do not match.");
      return;
    }

    try {
      const auth = getAuth();
      await applyActionCode(auth, oobCode);
      const user = auth.currentUser;

      if (user) {
        await user.updateEmail(newEmail);
        setMessage("Email has been updated successfully!");
        setError("");
      } else {
        setError("No user is currently signed in.");
      }
    } catch (err) {
      console.error("Error changing email:", err);
      setError(`Error changing email: ${err.message}`);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-4">Change Email</h2>
        <form onSubmit={handleChangeEmail} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="newEmail" className="block text-gray-700">New Email</label>
            <input
              id="newEmail"
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmEmail" className="block text-gray-700">Confirm New Email</label>
            <input
              id="confirmEmail"
              type="email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Change Email
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default EmailChangePage;
