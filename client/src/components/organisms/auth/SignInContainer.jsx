import { useSignup } from '@/hooks/signpHooks';

import SigninCard from './SignInCard';

const SigninContainer = () => {
  const signupFunc = useSignup();
  const handleSignin = async (data) => {
    try {
      const response = await signupFunc(data);
      console.log('Signup successful:', response);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <SigninCard submitFunc={handleSignin} />
    </div>
  );
};

export default SigninContainer;
