'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
   const router = useRouter();
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: 'patient',
      agreeToTerms: false
   });
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e?: React.FormEvent) => {
      if (e) e.preventDefault();

      if (formData.password !== formData.confirmPassword) {
         setError('Password tidak cocok!');
         return;
      }
      if (!formData.agreeToTerms) {
         setError('Harap setujui Terms dan Privacy Policies');
         return;
      }

      setIsLoading(true);
      setError('');

      try {
         const response = await fetch('/api/v1/auth/register', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               name: formData.username,
               email: formData.email,
               password: formData.password,
               role: formData.accountType,
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
      <div className="min-h-screen flex" style={{ background: 'linear-gradient(135deg, #fce4ec 0%, #e1f5fe 100%)' }}>
         {/* Left Side - Register Form */}
         <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <div className="bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md">
               <h1 className="text-4xl font-bold text-gray-800 mb-2">Sign up</h1>
               <p className="text-gray-500 mb-8">Let's get you all set up so you can access your personal AIDOC account.</p>

               <div>
                  {error && (
                     <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6">
                        {error}
                     </div>
                  )}

                  <form onSubmit={handleSubmit}>
                     {/* Username Field */}
                     <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
                        <input
                           type="text"
                           value={formData.username}
                           onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                           placeholder="johndoe"
                           required
                           disabled={isLoading}
                        />
                     </div>

                     {/* Email Field */}
                     <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                        <input
                           type="email"
                           value={formData.email}
                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                           placeholder="john.doe@gmail.com"
                           required
                           disabled={isLoading}
                        />
                     </div>

                     {/* Account Type */}
                     <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Account Type</label>
                        <select
                           value={formData.accountType}
                           onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
                           disabled={isLoading}
                        >
                           <option value="patient">Patient</option>
                           <option value="admin">Admin</option>
                        </select>
                     </div>

                     {/* Password Field */}
                     <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                           <input
                              type={showPassword ? "text" : "password"}
                              value={formData.password}
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                              placeholder="••••••••••••••••••••"
                              required
                              disabled={isLoading}
                           />
                           <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                           >
                              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                           </button>
                        </div>
                     </div>

                     {/* Confirm Password Field */}
                     <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                        <div className="relative">
                           <input
                              type={showConfirmPassword ? "text" : "password"}
                              value={formData.confirmPassword}
                              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                              placeholder="••••••••••••••••••••"
                              required
                              disabled={isLoading}
                           />
                           <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                           >
                              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                           </button>
                        </div>
                     </div>

                     {/* Terms Checkbox */}
                     <div className="mb-8">
                        <label className="flex items-start cursor-pointer">
                           <input
                              type="checkbox"
                              checked={formData.agreeToTerms}
                              onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                              className="w-4 h-4 mt-1 text-indigo-500 border-gray-300 rounded focus:ring-indigo-400"
                              disabled={isLoading}
                           />
                           <span className="ml-2 text-sm text-gray-700">
                              I agree to all the{' '}
                              <button type="button" className="text-pink-400 hover:text-pink-500 font-medium">Terms</button>
                              {' '}and{' '}
                              <button type="button" className="text-pink-400 hover:text-pink-500 font-medium">Privacy Policies</button>
                           </span>
                        </label>
                     </div>

                     {/* Create Account Button */}
                     <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition duration-200 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        {isLoading ? 'Creating account...' : 'Create account'}
                     </button>
                  </form>

                  {/* Login Link */}
                  <p className="text-center text-gray-600 text-sm mb-8">
                     Already have an account?{' '}
                     <Link
                        href="/login"
                        className="text-pink-400 hover:text-pink-500 font-medium"
                     >
                        Login
                     </Link>
                  </p>

                  {/* Divider */}
                  <div className="relative mb-8">
                     <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                     </div>
                     <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Or Sign up with</span>
                     </div>
                  </div>

                  {/* Social Sign Up Buttons */}
                  <div className="grid grid-cols-3 gap-4">
                     <button
                        type="button"
                        className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                     >
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                           <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                     </button>
                     <button
                        type="button"
                        className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                     >
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                           <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                           <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                           <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                           <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                     </button>
                     <button
                        type="button"
                        className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                     >
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                           <path fill="#000000" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Right Side - Mascot */}
         <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12">
            <div className="relative">
               <div className="absolute inset-0 bg-purple-300 rounded-full opacity-40 blur-3xl" style={{ width: '500px', height: '500px' }}></div>
               <div className="absolute inset-0 bg-blue-300 rounded-full opacity-40 blur-3xl" style={{ width: '450px', height: '450px', top: '50px', left: '50px' }}></div>
               <img
                  src="/img/maskot.png"
                  alt="AIDOC Mascot"
                  className="relative z-10 w-96 h-96 object-contain drop-shadow-2xl"
               />
            </div>
         </div>
      </div>
   );
}
