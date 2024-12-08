import { useSignupStore } from '@/zustand/apis/SignupStore';

export const useSignup = () => {
  const { signup } = useSignupStore();

  const signupUser = async (data) => {
    try {
      const response = await signup(data);
      return response;
    } catch (error) {
      console.error('Error in useSignup hook:', error);
      throw error;
    }
  };

  return signupUser;
};
