import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const HeroSection = () => {
   return (
      <section className="relative pt-28 pb-20 px-8 overflow-hidden">
         <div className="absolute top-40 left-0 w-[409px] h-[409px] rounded-full bg-[#E2B2FF] blur-[300px] opacity-60"></div>

         <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
               <div className="space-y-8">
                  <h1 className="text-5xl font-semibold text-black leading-tight">
                     Lindungi Diri Anda<br />
                     Lindungi Keluarga
                  </h1>

                  <p className="text-2xl font-light text-black">
                     Konsultasikan Keluhan Kesehatan Anda Langsung, dengan Dokter Terpercaya.
                  </p>

                  <Link
                     href="/dashboard"
                     className="inline-flex items-center gap-4 px-8 py-4 rounded-[20px] border border-black shadow-[0_4px_4px_0_rgba(141,208,252,0.5)] hover:shadow-[0_6px_6px_0_rgba(141,208,252,0.7)] transition group"
                  >
                     <span className="text-2xl font-normal text-black">ChatBot</span>
                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <path
                           fillRule="evenodd"
                           clipRule="evenodd"
                           d="M18.8876 7.62656C19.0691 7.6914 19.2174 7.82562 19.3 7.99974C19.3826 8.17385 19.3926 8.37363 19.328 8.55518L16.5646 16.3044C16.535 16.3975 16.487 16.4837 16.4235 16.5578C16.3599 16.632 16.2821 16.6925 16.1946 16.7359C16.1071 16.7793 16.0118 16.8046 15.9143 16.8104C15.8168 16.8162 15.7192 16.8022 15.6272 16.7694C15.5352 16.7366 15.4508 16.6856 15.3789 16.6195C15.3071 16.5533 15.2493 16.4734 15.209 16.3844C15.1687 16.2955 15.1468 16.1993 15.1444 16.1017C15.1421 16.0041 15.1595 15.907 15.1955 15.8162L17.3695 9.72014L4.93818 15.6158C4.76392 15.6985 4.56397 15.7085 4.38231 15.6437C4.20065 15.5789 4.05217 15.4446 3.96952 15.2704C3.88688 15.0961 3.87684 14.8962 3.94162 14.7145C4.00641 14.5328 4.1407 14.3844 4.31496 14.3017L16.7462 8.40605L10.6502 6.23212C10.5571 6.20258 10.4709 6.1546 10.3968 6.09103C10.3226 6.02747 10.2621 5.94962 10.2187 5.86214C10.1753 5.77465 10.1499 5.67932 10.1442 5.58184C10.1384 5.48435 10.1524 5.38671 10.1852 5.29472C10.218 5.20274 10.269 5.11831 10.3351 5.04646C10.4012 4.97462 10.4812 4.91683 10.5701 4.87654C10.6591 4.83626 10.7553 4.81431 10.8529 4.812C10.9505 4.80968 11.0476 4.82706 11.1384 4.86308L18.8876 7.62656Z"
                           fill="black"
                        />
                     </svg>
                  </Link>
               </div>

               <div className="relative">
                  <Image
                     src="https://api.builder.io/api/v1/image/assets/TEMP/ca0c5af28e6bd69a73c381d65c3e3fcff20ccc8a"
                     alt="Healthcare illustration"
                     width={800}
                     height={600}
                     className="w-full relative z-10"
                     priority
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
