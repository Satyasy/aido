import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const HealthInfoSection = () => {
   return (
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <Card className="bg-blue-100 p-8 rounded-3xl">
                     <div className="space-y-4">
                        <div className="bg-white p-4 rounded-2xl">
                           <p className="text-sm font-semibold text-gray-700">Medibot</p>
                           <div className="mt-2 space-y-2">
                              <div className="bg-gray-100 h-3 rounded-full w-3/4"></div>
                              <div className="bg-gray-100 h-3 rounded-full w-1/2"></div>
                           </div>
                        </div>

                        <div className="flex gap-4">
                           <div className="bg-white px-4 py-2 rounded-full text-sm">Hemo</div>
                           <div className="bg-white px-4 py-2 rounded-full text-sm">Hepatitis</div>
                        </div>
                     </div>
                  </Card>
               </div>

               <div className="space-y-6">
                  <div className="bg-purple-100 p-8 rounded-3xl">
                     <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        Informasi Tepat<br />
                        Untuk <span className="text-purple-600">Hidup Sehat</span>
                     </h3>
                     <p className="text-gray-700 mb-6">
                        Dengan MediBot, kami untuk mendukung kesehatn dimana saja di Indonesia
                     </p>
                     <Button className="bg-white text-purple-600 hover:bg-purple-50 rounded-full px-8">
                        Article
                     </Button>
                  </div>

                  <p className="text-center text-gray-600">
                     Cara lebih <span className="font-semibold">baik untuk belajar</span><br />
                     <span className="font-bold text-purple-600">soal kesehatan, setiap hari</span>
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};
