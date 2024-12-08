import { useState } from 'react';

import { useSocialmediaStore } from '@/zustand/apis/SocialmediaStore';

export const useGoogleLogin = () => {
  const { google, setUser } = useSocialmediaStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginWithGoogle = async () => {
    setLoading(true);
    try {
      const user = await google();
      setUser(user); // Update the store state with the user info
      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      setError(err);
      console.error('Google login failed:', err);
    }
  };

  return {
    loginWithGoogle,
    loading,
    error,
  };
};
