import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { confirmPasswordReset } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const PasswordResetPage = () => {
  const location = useLocation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
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

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage("Password has been reset successfully!");
      setError("");
    } catch (err) {
      console.error("Error resetting password:", err);
      setError(`Error resetting password: ${err.message}`);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-4 text-white">Password Reset</h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="new-password"
              className="bg-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your new password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          </div>
          <input
            type="password"
            id="confirm-password"
            className="bg-gray-50 border border-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-zinc-900 dark:text-white dark:border-gray-400 dark:hover:bg-zinc-700 dark:hover:border-zinc-600 dark:focus:ring-gray-700"
          >
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordResetPage;
