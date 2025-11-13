'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { chatWithMediBot } from '@/lib/geminiService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
   role: 'user' | 'assistant';
   content: string;
   timestamp: Date;
}

export const ChatbotWidget = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [messages, setMessages] = useState<Message[]>([
      {
         role: 'assistant',
         content: 'Halo! Saya MediBot, asisten kesehatan AI Anda. Ada yang bisa saya bantu?',
         timestamp: new Date(),
      },
   ]);
   const [inputMessage, setInputMessage] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const messagesEndRef = useRef<HTMLDivElement>(null);

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
   };

   useEffect(() => {
      scrollToBottom();
   }, [messages]);

   const handleSendMessage = async () => {
      if (!inputMessage.trim() || isLoading) return;

      const userMessage: Message = {
         role: 'user',
         content: inputMessage,
         timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputMessage('');
      setIsLoading(true);

      try {
         // Get token from localStorage
         const token = localStorage.getItem('token') || '';

         // Check if user is logged in
         if (!token) {
            const errorMessage: Message = {
               role: 'assistant',
               content: 'Silakan login terlebih dahulu untuk menggunakan fitur chat.',
               timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
            setIsLoading(false);
            return;
         }

         const conversationHistory = messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
         }));

         const response = await chatWithMediBot(
            {
               message: inputMessage,
               conversationHistory,
            },
            token
         );

         const botMessage: Message = {
            role: 'assistant',
            content: response.response,
            timestamp: new Date(response.timestamp),
         };

         setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
         console.error('Error sending message:', error);
         const errorMessage: Message = {
            role: 'assistant',
            content: 'Maaf, terjadi kesalahan. Silakan coba lagi.',
            timestamp: new Date(),
         };
         setMessages((prev) => [...prev, errorMessage]);
      } finally {
         setIsLoading(false);
      }
   };

   const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSendMessage();
      }
   };

   return (
      <>
         {/* Floating Button */}
         {!isOpen && (
            <Button
               onClick={() => setIsOpen(true)}
               className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 z-50"
            >
               <svg
                  className="w-8 h-8 text-white"
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
            </Button>
         )}

         {/* Chat Window */}
         {isOpen && (
            <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
               {/* Header */}
               <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-t-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl">🤖</span>
                     </div>
                     <div>
                        <h3 className="font-bold">MediBot</h3>
                        <p className="text-xs opacity-90">Asisten Kesehatan AI</p>
                     </div>
                  </div>
                  <Button
                     variant="ghost"
                     size="sm"
                     onClick={() => setIsOpen(false)}
                     className="text-white hover:bg-white/20"
                  >
                     ✕
                  </Button>
               </div>

               {/* Messages */}
               <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message, index) => (
                     <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'
                           }`}
                     >
                        <div
                           className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user'
                              ? 'bg-blue-500 text-white'
                              : 'bg-white border border-gray-200'
                              }`}
                        >
                           {message.role === 'assistant' ? (
                              <div className="text-sm prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-strong:font-bold prose-em:text-gray-600 prose-ul:text-gray-700 prose-ol:text-gray-700">
                                 <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {message.content}
                                 </ReactMarkdown>
                              </div>
                           ) : (
                              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                           )}
                           <p
                              className={`text-xs mt-1 ${message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
                                 }`}
                           >
                              {message.timestamp.toLocaleTimeString('id-ID', {
                                 hour: '2-digit',
                                 minute: '2-digit',
                              })}
                           </p>
                        </div>
                     </div>
                  ))}
                  {isLoading && (
                     <div className="flex justify-start">
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                           <div className="flex gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div
                                 className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                 style={{ animationDelay: '0.1s' }}
                              ></div>
                              <div
                                 className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                 style={{ animationDelay: '0.2s' }}
                              ></div>
                           </div>
                        </div>
                     </div>
                  )}
                  <div ref={messagesEndRef} />
               </div>

               {/* Input */}
               <div className="p-4 border-t bg-white rounded-b-lg">
                  <div className="flex gap-2">
                     <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ketik pertanyaan Anda..."
                        disabled={isLoading}
                        className="flex-1"
                     />
                     <Button
                        onClick={handleSendMessage}
                        disabled={isLoading || !inputMessage.trim()}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                     >
                        <svg
                           className="w-5 h-5"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                           />
                        </svg>
                     </Button>
                  </div>
               </div>
            </Card>
         )}
      </>
   );
};
