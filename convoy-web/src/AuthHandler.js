// AuthHandler.js
import { confirmPasswordReset, applyActionCode } from 'firebase/auth';
import { auth } from './firebase'; // Adjust the import based on your Firebase setup

export async function handleAuthAction(oobCode, newPassword) {
  try {
    if (newPassword) {
      // Handling password reset
      await confirmPasswordReset(auth, oobCode, newPassword);
      return { success: true };
    } else {
      // Handling email verification
      await applyActionCode(auth, oobCode);
      return { success: true };
    }
  } catch (error) {
    console.error('Error handling action:', error);
    return { success: false, message: error.message };
  }
}
