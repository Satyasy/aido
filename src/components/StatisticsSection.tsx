import React from 'react';
import { Card } from '@/components/ui/card';

export const StatisticsSection = () => {
   return (
      <section className="py-16 px-4">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="space-y-8">
                  <div className="flex items-start gap-6">
                     <div className="bg-blue-100 p-4 rounded-full">
                        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                     </div>

                     <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Mengapa harus MediBot?</h3>
                        <p className="text-gray-600 mb-4">
                           Dengan aplikasi ini, masyarakat dapat dengan mudah berkonsultasi dengan ahli kesehatan
                        </p>

                        <ul className="space-y-2 text-gray-700">
                           <li className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>Layanan selama 24 jam dan setiap tempat dengan cepat</span>
                           </li>
                           <li className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span>Konsultasi gratis oleh tenaga profesional medis</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="space-y-8">
                  <Card className="bg-blue-50 p-8 rounded-2xl">
                     <div className="text-6xl font-bold text-blue-500 mb-2">33%</div>
                     <p className="text-sm text-gray-600">
                        <span className="font-semibold">penderitaan</span>
                     </p>
                     <p className="text-sm text-gray-600 mt-4">
                        Di antara pasien dengan penyakit kronis, setidaknya 30% tidak tingkat fungsi kesehatan. Sedangkan pada pasien kronis serius, <span className="text-blue-500 font-semibold">~30% memiliki literasi kesehatan yang sangat terbatas</span>
                     </p>
                  </Card>

                  <Card className="bg-blue-50 p-8 rounded-2xl">
                     <div className="text-6xl font-bold text-blue-500 mb-2">26%</div>
                     <p className="text-sm text-gray-600 mb-4">
                        <span className="font-semibold">low health literacy</span>
                     </p>
                     <p className="text-sm text-gray-600">
                        Mudah dan beragam kategori Mudah kategori jelas rata-rata 96% di India ketahui dapat tentang kesehatan mereka dengan MediBot
                     </p>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   );
};
