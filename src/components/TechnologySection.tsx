import React from 'react';
import { Card } from '@/components/ui/card';

export const TechnologySection = () => {
   const features = [
      {
         icon: '🔬',
         title: 'AI Consultation',
         description: 'Konsultasikan keluhan Anda kepada AI Medical Assistant kami yang canggih dan terpercaya'
      },
      {
         icon: '📊',
         title: 'Data Analysis',
         description: 'Lihat dan analisir data kesehatan Anda dengan mudah menggunai sistem yang terorganisir'
      },
      {
         icon: '💊',
         title: 'Medicine Recommendation',
         description: 'Dapatkan rekomendasi obat yang tepat berdasarkan kondisi kesehatan Anda'
      }
   ];

   return (
      <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
         <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
               Rasakan <span className="text-pink-400">Fitur Kesehatan</span> Lengkap dengan
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
               Teknologi Pintar dari <span className="text-purple-400">MediBot</span> Setiap Hari ✓
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
               {features.map((feature, index) => (
                  <Card key={index} className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-3xl hover:shadow-lg transition">
                     <div className="text-5xl mb-4">{feature.icon}</div>
                     <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                     <p className="text-gray-700">{feature.description}</p>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};
