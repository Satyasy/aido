import React from 'react';
import { Card } from '@/components/ui/card';

export const AIConsultationCard = () => {
   return (
      <section className="py-12 px-4">
         <div className="container mx-auto">
            <Card className="bg-gradient-to-r from-blue-300 to-blue-200 p-12 rounded-3xl">
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-lg">
                           <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                           </svg>
                        </div>
                        <div>
                           <h3 className="font-bold text-gray-900 mb-2">AI Consultation</h3>
                           <p className="text-sm text-gray-700">
                              Konsultasikan keluhan Anda kepada AI Medical Assistant kami yang canggih dan terpercaya.
                           </p>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-lg">
                           <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                           </svg>
                        </div>
                        <div>
                           <h3 className="font-bold text-gray-900 mb-2">MediBot Insight</h3>
                           <p className="text-sm text-gray-700">
                              Mendapat wawasan mendalam berdasarkan keluhan Anda dan saran yang sesuai.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-8 text-center">
                  <p className="text-sm text-gray-700 mb-4">
                     Periksa Kesehatan Anda<br />
                     Sekarang di ✓
                  </p>
                  <div className="flex justify-center gap-2">
                     <div className="w-12 h-12 rounded-full bg-white"></div>
                     <div className="w-12 h-12 rounded-full bg-white"></div>
                     <div className="w-12 h-12 rounded-full bg-white"></div>
                  </div>
               </div>
            </Card>
         </div>
      </section>
   );
};
