import React from 'react'
import { HomeScreen } from "@/screens/HomeScreen";
import { ChatbotWidget } from '@/components/ChatbotWidget';

export default function Page() {
  return (
    <div>
      <HomeScreen />
      <ChatbotWidget />
      {/* Additional content can be added here */}
    </div>
  )
}
