import React from 'react';

export const StatisticsSection = () => {
   return (
      <section className="py-20 px-8 relative">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
               <div className="space-y-8 relative">
                  <div className="w-[354px] h-[513px] rounded-[30px] bg-[rgba(141,208,252,0.2)] absolute left-16 top-96"></div>
                  <div className="w-[354px] h-[235px] rounded-[30px] bg-[#8DD0FC] blur-[100px] absolute left-80 top-[520px]"></div>
                  
                  <div className="relative z-10 flex items-start gap-8 pt-96">
                     <div className="flex flex-col items-center">
                        <div className="w-[100px] h-[100px] rotate-[43.915deg] rounded-[20px] bg-[#8DD0FC] shadow-[4px_4px_10px_0_#B4E1FF]"></div>
                        <div className="w-[10px] h-[269px] relative mt-4">
                           <svg width="10" height="272" viewBox="0 0 10 272" fill="none">
                              <path d="M5 1.5L5 270.5" stroke="#8DD0FC" strokeWidth="3" strokeLinecap="round"/>
                              <circle cx="5" cy="118.169" r="4.5" fill="#8DD0FC" stroke="#8DD0FC"/>
                           </svg>
                        </div>
                     </div>
                     
                     <div className="space-y-6 pt-32">
                        <div className="flex items-center gap-4">
                           <div className="flex -space-x-3">
                              <img src="https://api.builder.io/api/v1/image/assets/TEMP/7051c19b7448c3c390275f0f30a8a2af65b68dc5" alt="" className="w-[60px] h-[60px] rounded-full border-2 border-white" />
                              <img src="https://api.builder.io/api/v1/image/assets/TEMP/3f79257a82ad3c363e88274d7368606ce0653473" alt="" className="w-[60px] h-[60px] rounded-full border-2 border-white" />
                              <img src="https://api.builder.io/api/v1/image/assets/TEMP/df10de1ed4094db30e9bb2efa786187ece1c12e4" alt="" className="w-[60px] h-[60px] rounded-full border-2 border-white" />
                              <img src="https://api.builder.io/api/v1/image/assets/TEMP/b894719d98fbbb27872be8bcd8b64bb0d1f3046f" alt="" className="w-[60px] h-[60px] rounded-full border-2 border-white" />
                              <img src="https://api.builder.io/api/v1/image/assets/TEMP/129bb9ed44bac93cb0e4123b3c384bb071182eff" alt="" className="w-[60px] h-[60px] rounded-full border-2 border-white" />
                              <div className="w-[60px] h-[60px] rounded-full bg-[#D9D9D9] flex items-center justify-center border-2 border-white">
                                 <span className="text-xl font-normal font-['Poppins']">100+</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-12 pt-32">
                  <div>
                     <h3 className="text-6xl font-semibold bg-gradient-to-r from-[#43B3FC] to-[#43B3FC] bg-clip-text text-transparent font-['Poppins'] mb-2">33 %</h3>
                     <p className="text-2xl font-medium text-[#43B3FC] font-['Poppins'] mb-4">kesehatan problematic</p>
                     <p className="text-xl font-light text-black font-['Poppins']">
                        Di antara pasien dengan penyakit kronis, sekitar 33 % menunjukkan tingkat literasi kesehatan problematic dan 16,2 % berada pada kategori inadequate, sehingga total ~49 % memiliki literasi kesehatan yang kurang memadai.
                     </p>
                  </div>

                  <div>
                     <h3 className="text-6xl font-semibold bg-gradient-to-r from-[#43B3FC] to-[#43B3FC] bg-clip-text text-transparent font-['Poppins'] mb-2">26 %</h3>
                     <p className="text-2xl font-medium text-[#43B3FC] font-['Poppins'] mb-4">low health literacy</p>
                     <p className="text-xl font-light text-black font-['Poppins']">
                        Analisis dari berbagai kategori menunjukkan bahwa rata-rata 26 % populasi memiliki low health literacy, dengan marginal literacy juga signifikan.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
