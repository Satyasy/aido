import React from 'react';

export const TechnologySection = () => {
   return (
      <section className="py-20 px-8 bg-gradient-to-b from-[rgba(221,180,246,0.2)] to-[rgba(221,180,246,0.2)] relative">
         <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center mb-4 font-['Poppins']">
               <span className="text-black">Rasakan </span>
               <span className="bg-gradient-to-r from-[#CC79FF] to-[#4FB9FF] bg-clip-text text-transparent">Fitur Kesehatan</span>
               <span className="text-black"> Lengkap dengan Teknologi Pintar dari </span>
               <span className="bg-gradient-to-r from-[#CC79FF] to-[#4FB9FF] bg-clip-text text-transparent">AIDOC</span>
               <span className="text-black"> Setiap Hari 🪄</span>
            </h2>

            <div className="grid grid-cols-3 gap-8 mt-16">
               <div className="relative">
                  <svg className="absolute inset-0" width="426" height="248" viewBox="0 0 426 248" fill="none">
                     <rect width="426" height="247.926" rx="30" fill="#E2B2FF" />
                     <path d="M117.069 247.926L290.725 12.2062C296.38 4.53094 305.345 0 314.878 0H426V217.926C426 234.495 412.568 247.926 396 247.926H117.069Z" fill="white" fillOpacity="0.3" />
                     <path d="M195.114 247.926L358.515 12.8761C364.122 4.80982 373.323 0 383.147 0H396C412.568 0 426 13.4315 426 30V217.926C426 234.495 412.568 247.926 396 247.926H195.114Z" fill="white" fillOpacity="0.2" />
                  </svg>
                  <div className="relative z-10 p-8">
                     <div className="w-[340px] h-[130px] rounded-[30px] bg-[rgba(255,255,255,0.6)] shadow-[0_4px_20px_0_#7D80DF] p-6 flex items-center gap-4">
                        <img src="https://api.builder.io/api/v1/image/assets/TEMP/870f0c6eb04cffc10854f17fec79811be16d845a" alt="" className="w-[84px] h-[84px]" />
                        <p className="text-sm font-light text-black font-['Poppins']">
                           Tim kami siap merespon keluhan kesehatan mu dengan cepat, 24/7 tanpa harus menunggu lama.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="relative">
                  <svg className="absolute inset-0" width="426" height="248" viewBox="0 0 426 248" fill="none">
                     <rect width="426" height="247.67" rx="30" fill="#E2B2FF" />
                     <path d="M117.069 247.67L290.725 12.1943C296.38 4.52602 305.341 0 314.869 0H426V217.67C426 234.239 412.568 247.67 396 247.67H117.069Z" fill="white" fillOpacity="0.3" />
                     <path d="M195.115 247.67L358.514 12.8642C364.122 4.80481 373.319 0 383.138 0H396C412.568 0 426 13.4315 426 30V217.67C426 234.239 412.569 247.67 396 247.67H195.115Z" fill="white" fillOpacity="0.2" />
                  </svg>
                  <div className="relative z-10 p-8">
                     <div className="w-[340px] h-[130px] rounded-[30px] bg-[rgba(255,255,255,0.6)] shadow-[0_4px_20px_0_#7D80DF] p-6 flex items-center gap-4">
                        <img src="https://api.builder.io/api/v1/image/assets/TEMP/2849fe3f7ce27e22d9ae5e6cbaf5cac548ef34c6" alt="" className="w-[85px] h-[85px]" />
                        <p className="text-sm font-light text-black font-['Poppins']">
                           Konsultasi kesehatan tersedia kapan pun, siap melayani kamu siang dan malam tanpa henti.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="relative">
                  <svg className="absolute inset-0" width="426" height="247" viewBox="0 0 426 248" fill="none">
                     <rect width="426" height="247.341" rx="30" fill="#E2B2FF" />
                     <path d="M117.069 247.341L290.724 12.1789C296.38 4.51964 305.336 0 314.857 0H426V217.341C426 233.909 412.568 247.341 396 247.341H117.069Z" fill="white" fillOpacity="0.3" />
                     <path d="M195.115 247.341L358.512 12.8488C364.122 4.79837 373.314 0 383.126 0H396C412.568 0 426 13.4315 426 30V217.341C426 233.909 412.569 247.341 396 247.341H195.115Z" fill="white" fillOpacity="0.2" />
                  </svg>
                  <div className="relative z-10 p-8">
                     <div className="w-[340px] h-[120px] rounded-[30px] bg-[rgba(255,255,255,0.6)] shadow-[0_4px_20px_0_#7D80DF] p-6 flex items-center gap-4">
                        <img src="https://api.builder.io/api/v1/image/assets/TEMP/1e6ed8a073700399778d7e267edf6b9fdd03007d" alt="" className="w-[108px] h-[108px]" />
                        <p className="text-sm font-light text-black font-['Poppins']">
                           Nikmati layanan konsultasi kesehatan tanpa biaya, langsung dari rumah kamu.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
