'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function RegisterPage() {
   const router = useRouter();
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'patient',
   });
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
      setError('');
   };

   const handleRoleChange = (value: string) => {
      setFormData({
         ...formData,
         role: value,
      });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      // Validation
      if (formData.password !== formData.confirmPassword) {
         setError('Passwords do not match');
         setIsLoading(false);
         return;
      }

      if (formData.password.length < 6) {
         setError('Password must be at least 6 characters');
         setIsLoading(false);
         return;
      }

      try {
         const response = await fetch('/api/v1/auth/register', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               name: formData.name,
               email: formData.email,
               password: formData.password,
               role: formData.role,
            }),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || 'Registration failed');
         }

         // Save token to localStorage
         localStorage.setItem('token', data.token);
         localStorage.setItem('user', JSON.stringify(data.user));

         // Redirect based on role
         if (data.user.role === 'admin') {
            router.push('/admin/dashboard');
         } else {
            router.push('/dashboard');
         }
      } catch (err: any) {
         setError(err.message || 'An error occurred during registration');
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
         <Card className="w-full max-w-md shadow-2xl">
            <CardHeader className="space-y-1">
               <div className="flex justify-center mb-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                     AIDOC
                  </div>
               </div>
               <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
               <CardDescription className="text-center">
                  Sign up to start your health journey
               </CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                     <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                     </Alert>
                  )}

                  <div className="space-y-2">
                     <Label htmlFor="name">Username</Label>
                     <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your username"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                     />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                     />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="password">Password</Label>
                     <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Create a password (min. 6 characters)"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                     />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="confirmPassword">Confirm Password</Label>
                     <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                     />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="role">Account Type</Label>
                     <Select value={formData.role} onValueChange={handleRoleChange}>
                        <SelectTrigger>
                           <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="patient">Patient</SelectItem>
                           <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>

                  <Button
                     type="submit"
                     className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                     disabled={isLoading}
                  >
                     {isLoading ? 'Creating account...' : 'Sign Up'}
                  </Button>
               </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
               <div className="text-sm text-center text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
                     Sign in
                  </Link>
               </div>
               <div className="text-sm text-center">
                  <Link href="/" className="text-gray-500 hover:text-gray-700">
                     ← Back to Home
                  </Link>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
}
