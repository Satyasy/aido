import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const HeroSection = () => {
   return (
      <section className="relative pt-14 pb-20 px-4 overflow-hidden">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                  <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm">
                     Ayo mulai sekarang!
                  </div>

                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                     Lindungi Diri Anda<br />
                     Lindungi Keluarga
                  </h1>

                  <p className="text-gray-600 text-lg">
                     Konsultasikan Keluhan Kesehatan Anda<br />
                     Langsung dengan Dokter Terpercaya.
                  </p>

                  <Button variant="outline" className="rounded-full px-10 cursor-pointer from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 hover:ease-in-out transition">
                     <Link href="/chatbot">Chatbot</Link>
                  </Button>
                  <p className="text-sm text-gray-500">
                     Konsultasi Sekarang! @ 0.10
                  </p>
               </div>

               <div className="relative">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
                  <div className="relative z-10">
                     <Image
                        src="/img/hero.png"
                        alt="Doctor consultation"
                        width={500}
                        height={500}
                        className="w-full"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
