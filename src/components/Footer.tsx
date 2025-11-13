import React from 'react';
import Link from 'next/link';

export const Footer = () => {
   return (
      <footer className="bg-gradient-to-r from-blue-400 to-purple-400 text-white py-12 px-4">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
               <div>
                  <h3 className="text-xl font-bold mb-4">Medibot</h3>
                  <ul className="space-y-2 text-sm">
                     <li><Link href="#" className="hover:underline">Tentang Kami</Link></li>
                     <li><Link href="#" className="hover:underline">Cara Kerja</Link></li>
                     <li><Link href="#" className="hover:underline">Testimoni</Link></li>
                     <li><Link href="#" className="hover:underline">Layanan</Link></li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-xl font-bold mb-4">Menu</h3>
                  <ul className="space-y-2 text-sm">
                     <li><Link href="#" className="hover:underline">Home</Link></li>
                     <li><Link href="#" className="hover:underline">Features</Link></li>
                     <li><Link href="#" className="hover:underline">Article</Link></li>
                     <li><Link href="#" className="hover:underline">Consultation</Link></li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-xl font-bold mb-4">Bantuan & Panduan</h3>
                  <ul className="space-y-2 text-sm">
                     <li><Link href="#" className="hover:underline">Pusat Bantuan</Link></li>
                     <li><Link href="#" className="hover:underline">Cara Berkonsultasi</Link></li>
                     <li><Link href="#" className="hover:underline">Kebijakan Privasi</Link></li>
                     <li><Link href="#" className="hover:underline">Persyaratan Layanan</Link></li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-xl font-bold mb-4">Kontak</h3>
                  <ul className="space-y-2 text-sm mb-4">
                     <li>📞 +6283 4561 8530</li>
                     <li>📧 medibot@mail.com</li>
                  </ul>

                  <div className="flex gap-3">
                     <a href="#" className="bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <span className="text-sm">T</span>
                     </a>
                     <a href="#" className="bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <span className="text-sm">IG</span>
                     </a>
                     <a href="#" className="bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <span className="text-sm">F</span>
                     </a>
                     <a href="#" className="bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                        <span className="text-sm">X</span>
                     </a>
                  </div>
               </div>
            </div>

            <div className="border-t border-white/20 pt-6 text-center text-sm">
               <p>© 2025 Medibot - All rights reserved</p>
            </div>
         </div>
      </footer>
   );
};
