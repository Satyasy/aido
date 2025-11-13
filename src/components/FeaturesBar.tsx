import React from 'react';
import { Card } from '@/components/ui/card';

export const FeaturesBar = () => {
   const features = [
      {
         icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
         ),
         title: 'Layanan yang cepat',
         bgColor: 'bg-blue-200'
      },
      {
         icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
         ),
         title: '24 Jam',
         bgColor: 'bg-purple-200'
      },
      {
         icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
         ),
         title: 'Konsultasi Gratis',
         bgColor: 'bg-pink-200'
      }
   ];

   return (
      <section className="py-8 px-4">
         <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {features.map((feature, index) => (
                  <Card key={index} className={`${feature.bgColor} p-6 rounded-2xl flex items-center gap-4`}>
                     <div className="text-white">
                        {feature.icon}
                     </div>
                     <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};
