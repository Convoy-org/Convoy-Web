import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { confirmPasswordReset } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const EmailChangePage = () => {
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
        <h2 className="text-2xl font-bold mb-4 text-white">Email Change</h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
         
           
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default EmailChangePage;
