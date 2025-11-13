import React from 'react';

export const AidocFeatures = () => {
   return (
      <section className="py-20 px-8 relative">
         <div className="absolute top-0 left-16 w-[445px] h-[338px] rounded-[30px] bg-white"></div>
         
         <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="relative z-10 space-y-8 ml-16">
                  <div>
                     <h3 className="text-xl font-medium text-black mb-6 font-['Poppins']">Mengapa harus AIDOC?</h3>
                     
                     <div className="space-y-4">
                        <div className="flex items-start gap-3">
                           <div className="w-[1px] h-[60px] bg-[#43B3FC]"></div>
                           <p className="text-base font-normal text-black font-['Poppins']">
                              Hampir separuh hingga dua pertiga populasi Indonesia belum memahami informasi kesehatan dengan baik.
                           </p>
                        </div>
                        
                        <div className="flex items-start gap-3">
                           <div className="w-[1px] h-[60px] bg-[#43B3FC]"></div>
                           <p className="text-base font-normal text-black font-['Poppins']">
                              Di banyak wilayah global, lebih dari sepertiga hingga setengah populasi juga mengalami kondisi serupa.
                           </p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                     <img src="https://api.builder.io/api/v1/image/assets/TEMP/b3fa5c6474c26a0a1a74e0db4e517bda2f740fb4" alt="" className="w-[69px] h-[69px]" />
                  </div>
               </div>

               <div className="relative">
                  <div className="absolute top-0 right-0 w-[140px] h-[148px] bg-[#DDB4F6] blur-[100px] rounded-full"></div>
                  <div className="absolute bottom-20 right-20 w-[140px] h-[148px] bg-[#DDB4F6] blur-[100px] rounded-full"></div>
                  <div className="absolute top-40 left-20 w-[140px] h-[148px] bg-[#8DD0FC] blur-[100px] rounded-full"></div>
                  
                  <div className="relative z-10 grid grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <svg width="264" height="285" viewBox="0 0 264 285" fill="none">
                           <path d="M8.4645 19.3338C8.97682 4.51675 24.8683 -4.61163 37.9256 2.41073L253.332 118.258C267.146 125.687 267.422 145.402 253.821 153.215L29.9626 281.804C16.3618 289.616 -0.529289 279.446 0.0127172 263.77L8.4645 19.3338Z" fill="#F0D8FF" fillOpacity="0.7"/>
                        </svg>
                        <div className="w-[255px] h-[279px] rounded-[40px] bg-[#DBA4FC] relative">
                           <div className="absolute inset-0 rounded-br-[40px] bg-[rgba(255,211,248,0.15)]"></div>
                           <div className="absolute right-0 w-[159px] h-[279px] rounded-br-[40px] bg-[rgba(255,211,248,0.56)]"></div>
                           <div className="absolute top-8 left-28 w-[100px] h-[100px] rounded-full bg-white border border-[#D692FF] flex items-center justify-center">
                              <svg width="63" height="63" viewBox="0 0 63 63" fill="none">
                                 <path d="M23.1 29.4C20.3152 29.4 17.6445 28.2937 15.6754 26.3246C13.7062 24.3554 12.6 21.6847 12.6 18.9V10.5C12.6 9.943 12.8212 9.40885 13.2151 9.01503C13.6089 8.6212 14.143 8.39995 14.7 8.39995H16.8C17.3569 8.39995 17.8911 8.1787 18.2849 7.78488C18.6787 7.39105 18.9 6.85691 18.9 6.29995C18.9 5.743 18.6787 5.20885 18.2849 4.81503C17.8911 4.4212 17.3569 4.19995 16.8 4.19995H14.7C13.0291 4.19995 11.4267 4.8637 10.2452 6.04518C9.06374 7.22666 8.39999 8.82909 8.39999 10.5V18.9C8.40269 21.2724 8.98122 23.6087 10.0859 25.7083C11.1905 27.8079 12.7883 29.608 14.742 30.9539C16.6209 32.6072 18.1445 34.6249 19.2202 36.8847C20.2959 39.1444 20.9014 41.5992 21 44.0999C21 47.9986 22.5487 51.7376 25.3055 54.4944C28.0623 57.2512 31.8013 58.7999 35.7 58.7999C39.5987 58.7999 43.3377 57.2512 46.0945 54.4944C48.8512 51.7376 50.4 47.9986 50.4 44.0999V41.706C52.3796 41.1948 54.1048 39.9793 55.2523 38.2871C56.3997 36.595 56.8907 34.5425 56.633 32.5142C56.3754 30.486 55.3869 28.6214 53.8529 27.2699C52.3188 25.9183 50.3445 25.1727 48.3 25.1727C46.2555 25.1727 44.2812 25.9183 42.7471 27.2699C41.213 28.6214 40.2246 30.486 39.9669 32.5142C39.7093 34.5425 40.2003 36.595 41.3477 38.2871C42.4952 39.9793 44.2204 41.1948 46.2 41.706V44.0999C46.2 46.8847 45.0938 49.5554 43.1246 51.5246C41.1555 53.4937 38.4848 54.5999 35.7 54.5999C32.9152 54.5999 30.2445 53.4937 28.2754 51.5246C26.3062 49.5554 25.2 46.8847 25.2 44.0999C25.3039 41.5961 25.9159 39.1394 26.999 36.8795C28.082 34.6196 29.6134 32.6035 31.5 30.9539C33.4459 29.6033 35.0355 27.8012 36.1327 25.7019C37.2299 23.6026 37.802 21.2687 37.8 18.9V10.5C37.8 8.82909 37.1362 7.22666 35.9548 6.04518C34.7733 4.8637 33.1709 4.19995 31.5 4.19995H29.4C28.843 4.19995 28.3089 4.4212 27.9151 4.81503C27.5212 5.20885 27.3 5.743 27.3 6.29995C27.3 6.85691 27.5212 7.39105 27.9151 7.78488C28.3089 8.1787 28.843 8.39995 29.4 8.39995H31.5C32.0569 8.39995 32.5911 8.6212 32.9849 9.01503C33.3787 9.40885 33.6 9.943 33.6 10.5V18.9C33.6 20.2788 33.3284 21.6442 32.8007 22.9181C32.2731 24.192 31.4996 25.3496 30.5246 26.3246C29.5496 27.2996 28.3921 28.073 27.1182 28.6007C25.8443 29.1284 24.4789 29.4 23.1 29.4ZM48.3 37.7999C47.1861 37.7999 46.1178 37.3574 45.3302 36.5698C44.5425 35.7821 44.1 34.7139 44.1 33.5999C44.1 32.486 44.5425 31.4178 45.3302 30.6301C46.1178 29.8424 47.1861 29.4 48.3 29.4C49.4139 29.4 50.4822 29.8424 51.2698 30.6301C52.0575 31.4178 52.5 32.486 52.5 33.5999C52.5 34.7139 52.0575 35.7821 51.2698 36.5698C50.4822 37.3574 49.4139 37.7999 48.3 37.7999Z" fill="#D48CFF"/>
                              </svg>
                           </div>
                           <img src="https://api.builder.io/api/v1/image/assets/TEMP/2a3903b0f7020b98587d27d13fd45105803d1244" alt="" className="absolute bottom-0 left-16 w-[182px] h-[182px] shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]" />
                        </div>
                     </div>

                     <div className="space-y-4 pt-32">
                        <div className="w-[255px] h-[279px] rounded-[40px] bg-[#83CEFF] relative">
                           <div className="absolute inset-0 rounded-tr-[40px] rounded-br-[40px] bg-[rgba(153,215,255,0.76)]"></div>
                           <div className="absolute right-0 w-[156px] h-[279px] rounded-tr-[40px] rounded-br-[40px] bg-[rgba(172,222,255,0.76)]"></div>
                           <div className="absolute top-0 left-20 w-[100px] h-[100px] rounded-full bg-white border border-[#61BFFD] flex items-center justify-center">
                              <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
                                 <path d="M52.8283 13.0305C53.8627 15.6985 52.4151 17.5255 49.6142 19.3284C47.3546 20.7784 44.4763 22.354 41.4265 25.0438C38.4347 27.6804 35.5178 30.8583 32.9247 33.9855C30.7061 36.6701 28.5939 39.441 26.593 42.2915C25.5925 43.7198 24.1933 45.8513 24.1933 45.8513C23.6911 46.627 22.9996 47.262 22.1839 47.6962C21.3683 48.1305 20.4554 48.3497 19.5315 48.3332C18.6081 48.3278 17.7015 48.0862 16.8978 47.6315C16.0941 47.1767 15.4201 46.524 14.9398 45.7353C12.5256 41.6825 10.6648 40.0803 9.80926 39.5075C7.52068 37.9657 4.83334 37.7434 4.83334 34.157C4.83334 31.3078 7.23793 28.9999 10.2032 28.9999C12.2984 29.0772 14.2438 29.9013 15.9693 31.0613C17.0713 31.8008 18.2386 32.782 19.4518 34.07C21.0776 31.8514 22.7684 29.6811 24.5219 27.562C27.318 24.1907 30.6192 20.573 34.1596 17.4506C37.6396 14.3815 41.6633 11.508 45.9288 9.99038C48.7079 8.99955 51.7964 10.3601 52.8283 13.0305Z" stroke="#039BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                           </div>
                           <div className="absolute bottom-16 left-8 right-8 p-4">
                              <div className="space-y-3">
                                 <div className="flex items-center gap-3">
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                                       <path d="M37.3442 9.21135C38.0753 11.0974 37.052 12.3889 35.0721 13.6633C33.4748 14.6883 31.4402 15.8021 29.2842 17.7035C27.1693 19.5673 25.1074 21.8137 23.2743 24.0243C21.706 25.9221 20.2129 27.8808 18.7985 29.8959C18.0912 30.9055 17.1021 32.4122 17.1021 32.4122C16.7472 32.9606 16.2583 33.4094 15.6817 33.7164C15.1052 34.0234 14.4598 34.1784 13.8067 34.1667C13.154 34.1628 12.5131 33.9921 11.945 33.6706C11.3768 33.3492 10.9004 32.8878 10.5609 32.3302C8.85428 29.4654 7.53887 28.3327 6.93412 27.9279C5.31632 26.8379 3.41666 26.6808 3.41666 24.1456C3.41666 22.1315 5.11645 20.5 7.21257 20.5C8.6937 20.5547 10.0689 21.1372 11.2887 21.9572C12.0677 22.48 12.8928 23.1736 13.7504 24.0841C14.8997 22.5158 16.0949 20.9816 17.3344 19.4836C19.311 17.1004 21.6446 14.5431 24.1473 12.3359C26.6073 10.1663 29.4517 8.1351 32.4669 7.06227C34.4314 6.36185 36.6147 7.32364 37.3442 9.21135Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="text-sm font-light text-black font-['Poppins']">Tips Kesehatan Harian</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                                       <path d="M37.3442 9.21135C38.0753 11.0974 37.052 12.3889 35.0721 13.6633C33.4748 14.6883 31.4402 15.8021 29.2842 17.7035C27.1693 19.5673 25.1074 21.8137 23.2743 24.0243C21.706 25.9221 20.2129 27.8808 18.7985 29.8959C18.0912 30.9055 17.1021 32.4122 17.1021 32.4122C16.7472 32.9606 16.2583 33.4094 15.6817 33.7164C15.1052 34.0234 14.4598 34.1784 13.8067 34.1667C13.154 34.1628 12.5131 33.9921 11.945 33.6706C11.3768 33.3492 10.9004 32.8878 10.5609 32.3302C8.85428 29.4654 7.53887 28.3327 6.93412 27.9279C5.31632 26.8379 3.41666 26.6808 3.41666 24.1456C3.41666 22.1315 5.11645 20.5 7.21257 20.5C8.6937 20.5547 10.0689 21.1372 11.2887 21.9572C12.0677 22.48 12.8928 23.1736 13.7504 24.0841C14.8997 22.5158 16.0949 20.9816 17.3344 19.4836C19.311 17.1004 21.6446 14.5431 24.1473 12.3359C26.6073 10.1663 29.4517 8.1351 32.4669 7.06227C34.4314 6.36185 36.6147 7.32364 37.3442 9.21135Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="text-sm font-light text-black font-['Poppins']">Pengingat Konsultasi</span>
                                 </div>
                                 <div className="flex items-center gap-3">
                                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                                       <path d="M37.3442 9.21135C38.0753 11.0974 37.052 12.3889 35.0721 13.6633C33.4748 14.6883 31.4402 15.8021 29.2842 17.7035C27.1693 19.5673 25.1074 21.8137 23.2743 24.0243C21.706 25.9221 20.2129 27.8808 18.7985 29.8959C18.0912 30.9055 17.1021 32.4122 17.1021 32.4122C16.7472 32.9606 16.2583 33.4094 15.6817 33.7164C15.1052 34.0234 14.4598 34.1784 13.8067 34.1667C13.154 34.1628 12.5131 33.9921 11.945 33.6706C11.3768 33.3492 10.9004 32.8878 10.5609 32.3302C8.85428 29.4654 7.53887 28.3327 6.93412 27.9279C5.31632 26.8379 3.41666 26.6808 3.41666 24.1456C3.41666 22.1315 5.11645 20.5 7.21257 20.5C8.6937 20.5547 10.0689 21.1372 11.2887 21.9572C12.0677 22.48 12.8928 23.1736 13.7504 24.0841C14.8997 22.5158 16.0949 20.9816 17.3344 19.4836C19.311 17.1004 21.6446 14.5431 24.1473 12.3359C26.6073 10.1663 29.4517 8.1351 32.4669 7.06227C34.4314 6.36185 36.6147 7.32364 37.3442 9.21135Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="text-sm font-light text-black font-['Poppins']">Ucapan Penyemangat</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="w-[240px] h-[66px] rounded-[30px] bg-[#FFF8F8] shadow-[4px_6px_6px_0_#D8CFDE] flex items-center justify-center">
                           <span className="text-2xl font-semibold bg-gradient-to-r from-[#D288FF] to-[#43B3FC] bg-clip-text text-transparent font-['Poppins']">Notification</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-32 space-y-8 max-w-3xl mx-auto">
               <div>
                  <h3 className="text-2xl font-semibold text-black font-['Poppins'] mb-2">Pengingat AIDOC 🔔</h3>
                  <div className="w-[104px] h-[2px] bg-[#039BFF] mb-4"></div>
                  <p className="text-xl font-light text-black font-['Poppins']">
                     Fitur notification di AIDOC berfungsi untuk memberikan pengingat dan informasi penting secara otomatis. Tujuannya agar pengguna lebih teratur dalam menjaga kesehatannya.
                  </p>
               </div>

               <div>
                  <h3 className="text-2xl font-semibold text-black font-['Poppins'] mb-2">Siaga bersama AIDOC</h3>
                  <div className="w-[104px] h-[2px] bg-[#BF55FF] mb-4"></div>
                  <p className="text-xl font-light text-black font-['Poppins']">
                     Dengan fitur notifikasi otomatis, AIDOC selalu siap mengingatkanmu tentang jadwal kesehatan penting konsultasi, dan tips harian agar kamu tetap sehat dan terjaga setiap saat.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};
