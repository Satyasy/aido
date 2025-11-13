'use client';

import React, { useState, useEffect } from 'react';
import { Send, RefreshCw, ImageIcon, ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { chatWithAidoc, type ChatRequest } from '@/lib/geminiService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
   type: 'user' | 'bot';
   text: string;
   timestamp: Date;
}

const ConsultationPage = () => {
   const [currentPage, setCurrentPage] = useState('landing');
   const [messages, setMessages] = useState<Message[]>([]);
   const [inputValue, setInputValue] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [user, setUser] = useState<any>(null);

   useEffect(() => {
      // Get user data for personalized responses
      const userData = localStorage.getItem('user');
      if (userData) {
         try {
            setUser(JSON.parse(userData));
         } catch (error) {
            console.error('Error parsing user data:', error);
         }
      }
   }, []);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (inputValue.trim() && !isLoading) {
         // Add user message
         const userMessage: Message = {
            type: 'user',
            text: inputValue,
            timestamp: new Date()
         };

         setMessages(prev => [...prev, userMessage]);
         setInputValue('');
         setIsLoading(true);

         // Switch to chat view if on landing
         if (currentPage === 'landing') {
            setCurrentPage('chat');
         }

         try {
            // Get user token
            const token = localStorage.getItem('token') || '';

            // Prepare chat request
            const chatRequest: ChatRequest = {
               message: inputValue,
               conversationHistory: messages.map(msg => ({
                  role: msg.type === 'user' ? 'user' : 'assistant',
                  content: msg.text
               }))
            };

            // Get AI response using Gemini - don't pass token, let chatWithAidoc handle it
            const response = await chatWithAidoc(chatRequest);

            const botMessage: Message = {
               type: 'bot',
               text: response.response,
               timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
         } catch (error: any) {
            console.error('Error getting AI response:', error);

            let errorText = 'Maaf, terjadi kesalahan saat memproses pertanyaan Anda. Silakan coba lagi atau hubungi dokter jika gejala berlanjut.';
            
            if (error.message.includes('Authentication required') || error.message.includes('Session expired')) {
               errorText = 'Sesi Anda telah berakhir. Silakan login kembali untuk melanjutkan konsultasi.';
            }

            // Fallback response
            const errorMessage: Message = {
               type: 'bot',
               text: errorText,
               timestamp: new Date()
            };

            setMessages(prev => [...prev, errorMessage]);
         } finally {
            setIsLoading(false);
         }
      }
   };

   const handleStartChat = () => {
      setCurrentPage('chat');
   };

   const handleBackToLanding = () => {
      setCurrentPage('landing');
      setMessages([]);
      setInputValue('');
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
         <Navbar />

         <div className="pt-24">
            {/* Landing Page */}
            {currentPage === 'landing' && (
               <div className="max-w-6xl mx-auto px-6 py-20">
                  <div className="text-right mb-6">
                     <span className="text-gray-700 text-lg">Ayo mulai sekarang!</span>
                  </div>

                  <div className="text-center mb-12">
                     <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
                        Get trusted insights about your
                     </h2>
                     <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="text-black">symptoms with </span>
                        <span className="text-blue-400">AIDOC</span>
                     </h2>
                     <p className="text-xl text-gray-600 mb-8">
                        Describe what you're feeling, AIDOC will help decode it for you.
                     </p>

                     <div className="mb-8">
                        <span className="inline-block px-6 py-2 bg-white rounded-full shadow-sm text-gray-700">
                           Konsultasi Sekarang! ⭐ 9.10
                        </span>
                     </div>

                     <button
                        onClick={handleStartChat}
                        className="px-8 py-4 bg-white border-2 border-gray-300 rounded-full text-gray-700 font-medium hover:border-blue-400 hover:text-blue-400 transition-all inline-flex items-center gap-2"
                     >
                        Get Started →
                     </button>
                  </div>

                  {/* Input Form */}
                  <div className="max-w-4xl mx-auto">
                     <div className="relative">
                        <div className="bg-white rounded-3xl border-2 border-blue-200 p-6 shadow-lg">
                           <form onSubmit={handleSubmit}>
                              <input
                                 type="text"
                                 value={inputValue}
                                 onChange={(e) => setInputValue(e.target.value)}
                                 placeholder="Type your symptoms here..."
                                 className="w-full text-lg text-gray-700 placeholder-gray-400 outline-none mb-4"
                                 disabled={isLoading}
                              />
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-6">
                                    <button
                                       type="button"
                                       className="flex items-center gap-2 text-blue-400 hover:text-blue-500"
                                    >
                                       <RefreshCw size={20} />
                                       <span className="text-sm hidden md:inline">Identify your symptoms</span>
                                    </button>
                                    <button
                                       type="button"
                                       className="flex items-center gap-2 text-blue-400 hover:text-blue-500"
                                    >
                                       <ImageIcon size={20} />
                                       <span className="text-sm hidden md:inline">Consult by uploading a photo</span>
                                    </button>
                                 </div>
                                 <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="text-blue-400 hover:text-blue-500 disabled:opacity-50"
                                 >
                                    {isLoading ? (
                                       <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                                    ) : (
                                       <Send size={24} />
                                    )}
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {/* Chat Page */}
            {currentPage === 'chat' && (
               <div className="max-w-5xl mx-auto px-6 py-12">
                  {/* Back Button */}
                  <div className="mb-6">
                     <button
                        onClick={handleBackToLanding}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
                     >
                        <ArrowLeft size={20} />
                        <span>Back to Start</span>
                     </button>
                  </div>

                  {/* Messages */}
                  <div className="mb-8 space-y-4">
                     {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                           <div className={`${message.type === 'user'
                                 ? 'bg-blue-200 rounded-3xl rounded-tr-sm'
                                 : 'bg-purple-200 rounded-3xl rounded-tl-sm'
                              } px-6 py-4 max-w-2xl`}>
                              {message.type === 'bot' ? (
                                 <div className="text-gray-800 prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-strong:font-bold prose-em:text-purple-600 prose-ul:text-gray-800 prose-ol:text-gray-800 prose-li:text-gray-800 prose-li:marker:text-purple-400">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                       {message.text}
                                    </ReactMarkdown>
                                 </div>
                              ) : (
                                 <p className="text-gray-800 whitespace-pre-line">{message.text}</p>
                              )}
                              <p className="text-xs text-gray-500 mt-2">
                                 {message.timestamp.toLocaleTimeString()}
                              </p>
                           </div>
                        </div>
                     ))}

                     {isLoading && (
                        <div className="flex justify-start">
                           <div className="bg-purple-200 rounded-3xl rounded-tl-sm px-6 py-4">
                              <div className="flex items-center gap-2">
                                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
                                 <p className="text-gray-600">AIDOC is typing...</p>
                              </div>
                           </div>
                        </div>
                     )}

                     {messages.length === 0 && !isLoading && (
                        <div className="flex justify-start">
                           <div className="bg-purple-200 rounded-3xl rounded-tl-sm px-6 py-4 max-w-md">
                              <div className="text-gray-800 prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-strong:text-gray-900 prose-strong:font-bold prose-em:text-purple-600 prose-ul:text-gray-800 prose-ol:text-gray-800 prose-li:text-gray-800 prose-li:marker:text-purple-400">
                                 <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {`**Halo ${user?.name || 'Pengguna'}!** 👋

Saya **AIDOC**, siap membantu Anda dengan konsultasi kesehatan.

*Ceritakan gejala atau keluhan yang Anda rasakan, seperti:*
- Demam atau panas badan
- Sakit kepala atau pusing
- Batuk atau pilek
- Nyeri pada bagian tubuh tertentu

Saya akan memberikan **analisis** dan *rekomendasi* yang tepat! ✨`}
                                 </ReactMarkdown>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>

                  {/* Chat Input */}
                  <div className="max-w-4xl mx-auto">
                     <div className="relative">
                        <div className="bg-white rounded-3xl border-2 border-blue-200 p-6 shadow-lg">
                           <form onSubmit={handleSubmit}>
                              <input
                                 type="text"
                                 value={inputValue}
                                 onChange={(e) => setInputValue(e.target.value)}
                                 placeholder="Type your symptoms here..."
                                 className="w-full text-lg text-gray-700 placeholder-gray-400 outline-none mb-4"
                                 disabled={isLoading}
                              />
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-6">
                                    <button
                                       type="button"
                                       className="flex items-center gap-2 text-blue-400 hover:text-blue-500"
                                    >
                                       <RefreshCw size={20} />
                                       <span className="text-sm hidden md:inline">Identify your symptoms</span>
                                    </button>
                                    <button
                                       type="button"
                                       className="flex items-center gap-2 text-blue-400 hover:text-blue-500"
                                    >
                                       <ImageIcon size={20} />
                                       <span className="text-sm hidden md:inline">Consult by uploading a photo</span>
                                    </button>
                                 </div>
                                 <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="text-blue-400 hover:text-blue-500 disabled:opacity-50"
                                 >
                                    {isLoading ? (
                                       <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                                    ) : (
                                       <Send size={24} />
                                    )}
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default ConsultationPage;