'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function LoginPage() {
   const router = useRouter();
   const [formData, setFormData] = useState({
      name: '',
      password: '',
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

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');

      try {
         const response = await fetch('/api/v1/auth/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || 'Login failed');
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
         setError(err.message || 'An error occurred during login');
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
               <CardTitle className="text-2xl font-bold text-center">Welcome Back!</CardTitle>
               <CardDescription className="text-center">
                  Sign in to your account to continue
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
                     <Label htmlFor="password">Password</Label>
                     <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                     />
                  </div>

                  <Button
                     type="submit"
                     className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                     disabled={isLoading}
                  >
                     {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
               </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
               <div className="text-sm text-center text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/register" className="text-blue-500 hover:text-blue-600 font-semibold">
                     Sign up
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
