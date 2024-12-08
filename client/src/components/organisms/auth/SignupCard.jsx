import { FacebookIcon } from 'lucide-react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

import Input from '@/components/atoms/Input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useFacebookLogin } from '@/hooks/facebookLogin';

const SignupCard = ({ submitFunc }) => {
  const { loginWithFacebook } = useFacebookLogin();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitFunc) {
      submitFunc(formData);
    }
    navigate('/auth/login');
  };

  const handleFbLogin = () => {
    loginWithFacebook();
  };
  return (
    <Card className="max-w-md mx-auto bg-[#ffffff] rounded-xl shadow-lg border-2 border-[#EE7301]">
      <CardHeader className="text-center py-6">
        <CardTitle className="text-3xl font-semibold text-[#EE7301]">
          Sign Up
        </CardTitle>
        <CardDescription className="text-base text-[#6F0DA6] mt-2">
          Create an account to start shopping for premium frozen food.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Full Name"
            value={formData.username}
            onChange={handleChange}
            className="p-4 rounded-lg border-2 border-[#6F0DA6] focus:ring-2 focus:ring-[#EE7301]"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg border-2 border-[#6F0DA6] focus:ring-2 focus:ring-[#EE7301]"
          />
          <Input
            type="password"
            name="password"
            placeholder="Create a Password"
            value={formData.password}
            onChange={handleChange}
            className="p-4 rounded-lg border-2 border-[#6F0DA6] focus:ring-2 focus:ring-[#EE7301]"
          />

          <Button
            type="submit"
            className="mt-6 p-4 rounded-full bg-[#EE7301] text-[#ffffff] font-semibold hover:bg-[#6F0DA6] transition-all duration-200"
          >
            Sign Up
          </Button>

          <Separator className="bg-orange-500" />
          <div className="mt-6 space-y-4 flex flex-col gap-4">
            <Button
              onClick={handleFbLogin}
              className="p-4 rounded-full bg-[#3b5998] hover:bg-[#2d4373] text-[#ffffff] font-semibold flex items-center justify-center gap-3 transition-all duration-300"
            >
              <FacebookIcon className="h-5 w-5" alt="Facebook Logo" />
              <span>Sign Up with Facebook</span>
            </Button>

            <Button
              onClick={() => alert('Google SignUp')}
              className="p-4 rounded-full hover:bg-[#d9d9d9] bg-[#c6c5c5] text-main font-semibold flex items-center justify-center gap-3 transition-all duration-300"
            >
              <FcGoogle className="h-5 w-5" alt="Google Logo" />
              <span>Sign Up with Google</span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupCard;
