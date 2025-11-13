'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChatbotWidget } from '@/components/ChatbotWidget';

interface User {
   id: number;
   name: string;
   email?: string;
   role: string;
}

export default function DashboardPage() {
   const router = useRouter();
   const [user, setUser] = useState<User | null>(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      // Check authentication
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');

      if (!token || !userData) {
         router.push('/login');
         return;
      }

      try {
         setUser(JSON.parse(userData));
      } catch (error) {
         console.error('Error parsing user data:', error);
         router.push('/login');
      }
      setIsLoading(false);
   }, [router]);

   if (isLoading) {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
         </div>
      );
   }

   if (!user) {
      return null;
   }

   return (
      <div className="min-h-screen bg-gray-50">
         <Navbar />

         <main className="pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-7xl">
               {/* Welcome Section */}
               <div className="mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                     Welcome back, {user.name}! 👋
                  </h1>
                  <p className="text-gray-600">
                     Here's your health dashboard overview
                  </p>
               </div>

               {/* Stats Cards */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card>
                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                           Total Consultations
                        </CardTitle>
                        <svg
                           className="h-4 w-4 text-blue-500"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                           />
                        </svg>
                     </CardHeader>
                     <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-gray-500">No consultations yet</p>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                           AI Interactions
                        </CardTitle>
                        <svg
                           className="h-4 w-4 text-purple-500"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                           />
                        </svg>
                     </CardHeader>
                     <CardContent>
                        <div className="text-2xl font-bold">0</div>
                        <p className="text-xs text-gray-500">Start chatting with MediBot</p>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                           Health Score
                        </CardTitle>
                        <svg
                           className="h-4 w-4 text-green-500"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                           />
                        </svg>
                     </CardHeader>
                     <CardContent>
                        <div className="text-2xl font-bold">--</div>
                        <p className="text-xs text-gray-500">Complete a consultation</p>
                     </CardContent>
                  </Card>
               </div>

               {/* Quick Actions */}
               <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                     <CardHeader>
                        <CardTitle>Start New Consultation</CardTitle>
                        <CardDescription>
                           Get AI-powered health insights and recommendations
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                           Begin Consultation
                        </Button>
                     </CardContent>
                  </Card>

                  <Card>
                     <CardHeader>
                        <CardTitle>Chat with MediBot</CardTitle>
                        <CardDescription>
                           Ask health questions and get instant answers
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <Button variant="outline" className="w-full">
                           Open Chat
                        </Button>
                     </CardContent>
                  </Card>
               </div>

               {/* Recent Activity */}
               <Card>
                  <CardHeader>
                     <CardTitle>Recent Activity</CardTitle>
                     <CardDescription>Your latest health consultations</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <div className="text-center py-12 text-gray-500">
                        <svg
                           className="mx-auto h-12 w-12 text-gray-400 mb-4"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                           />
                        </svg>
                        <p>No recent activity</p>
                        <p className="text-sm mt-2">Start a consultation to see your activity here</p>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </main>

         <ChatbotWidget />
      </div>
   );
}
