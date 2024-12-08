import { useState } from 'react';

import { useSocialmediaStore } from '@/zustand/apis/SocialmediaStore';

export const useFacebookLogin = () => {
  const { facebook, setUser } = useSocialmediaStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginWithFacebook = async () => {
    setLoading(true);
    try {
      const user = await facebook();
      setUser(user);
      setLoading(false);
      return user;
    } catch (err) {
      setLoading(false);
      setError(err);
      console.error('Facebook login failed:', err);
    }
  };

  return {
    loginWithFacebook,
    loading,
    error,
  };
};
