import React from 'react';
import { Card } from '@/components/ui/card';

export const MedibotFeatures = () => {
   return (
      <section className="py-16 px-4">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
                  <div className="relative z-10">
                     <Card className="bg-gradient-to-br from-pink-200 to-purple-200 p-8 rounded-3xl">
                        <div className="bg-white p-4 rounded-2xl inline-block mb-4">
                           <span className="text-4xl">💊</span>
                        </div>
                        <div className="bg-white/50 backdrop-blur p-4 rounded-2xl">
                           <p className="font-semibold text-purple-700">Identification</p>
                        </div>
                     </Card>

                     <Card className="bg-blue-100 p-6 rounded-2xl mt-6">
                        <p className="text-sm text-gray-700">
                           <span className="font-semibold">AI healthcare tech</span><br />
                           Menyarankan obat
                        </p>
                     </Card>
                  </div>
               </div>

               <div className="space-y-6">
                  <div>
                     <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Penggiat Medibot 👨‍⚕️
                     </h3>
                     <p className="text-gray-600">
                        Fitur Notification via Medibot berfungsi untuk memberikan notifikasi secara otomatis sesuai waktu yang telah ditentukan kepada Anda untuk mengingatkan Anda tentang kesehatan Anda
                     </p>
                  </div>

                  <div>
                     <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Dapat bertanya Medibot
                     </h3>
                     <p className="text-gray-600">
                        Dengan fitur medibot otomatis, Medibot selalu siap memberikan edukasi medis serta panduan untuk memahami kondisi kesehatan Anda dengan baik hingga detail tahun 2025 nanti
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
