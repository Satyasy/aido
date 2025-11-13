'use client';

import { useEffect, useState } from 'react';
import { ChatbotWidget } from './ChatbotWidget';

export const ClientChatbot = () => {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return <ChatbotWidget />;
};