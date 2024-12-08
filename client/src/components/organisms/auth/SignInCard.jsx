import { useState } from 'react';
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

const SigninCard = ({ submitFunc }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value })); // Update the correct field in formData
  };

  const handleSubmit = () => {
    try {
      if (submitFunc) {
        submitFunc(formData);
      }
      navigate('/auth/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Card className="shadow-[0px_15px_35px_-5px_rgba(0,_0,_0,_0.1)]">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Fill out the form below to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SigninCard;
