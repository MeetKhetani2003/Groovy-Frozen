import { create } from 'zustand';

import axiosInstance from '../instences/axios';
import { States } from '../states/UserStates';

export const useSocialmediaStore = create((set) => ({
  user: States.user,
  setUser: (user) => set({ user }),

  google: async () => {
    try {
      const response = await axiosInstance.get('/users/google');
      set({ user: response.data });
      return response.data;
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    }
  },

  facebook: async () => {
    try {
      const response = await axiosInstance.get('/users/facebook');
      set({ user: response.data });
      return response.data;
    } catch (error) {
      console.error('Facebook login failed:', error);
      throw error;
    }
  },
}));
