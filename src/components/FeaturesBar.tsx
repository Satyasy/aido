import React from 'react';

export const FeaturesBar = () => {
   return (
      <section className="py-12 px-8 bg-gradient-to-r from-[#8DD0FC] to-[#DDB4F6] relative">
         <div className="container mx-auto">
            <div className="flex items-center justify-around gap-8 md:gap-12">
               {/* Feature 1: Layanan yang cepat */}
               <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[10px] border border-[#7D80DF] bg-transparent flex items-center justify-center">
                     <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                     </svg>
                  </div>
                  <span className="text-lg md:text-2xl font-semibold text-black">Layanan yang cepat</span>
               </div>

               {/* Feature 2: 24 Jam */}
               <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[10px] border border-[#7D80DF] bg-transparent flex items-center justify-center">
                     <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                     </svg>
                  </div>
                  <span className="text-lg md:text-2xl font-semibold text-black">24 Jam</span>
               </div>

               {/* Feature 3: Konsultasi Gratis */}
               <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-[10px] border border-[#7D80DF] bg-transparent flex items-center justify-center">
                     <svg className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="m19 8 2 2-2 2" />
                        <path d="m21 10-7.5 0" />
                     </svg>
                  </div>
                  <span className="text-lg md:text-2xl font-semibold text-black">Konsultasi Gratis</span>
               </div>
            </div>
         </div>
      </section>
   );
};
