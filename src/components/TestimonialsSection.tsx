import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TestimonialsSection = () => {
   const testimonials = [
      {
         id: 1,
         username: 'Dr. Sarah M.',
         rating: 5,
         text: 'AIDOC sangat membantu dalam memberikan konsultasi awal kepada pasien. Interface yang user-friendly dan response AI yang akurat membuat saya merekomendasikan platform ini.',
         avatar: ''
      },
      {
         id: 2,
         username: 'Ahmad Rahman',
         rating: 5,
         text: 'Sebagai orang yang sering khawatir dengan kesehatan, AIDOC memberikan ketenangan pikiran. Saran-saran yang diberikan selalu relevan dan mudah dipahami.',
         avatar: ''
      },
      {
         id: 3,
         username: 'Siti Nurhaliza',
         rating: 4,
         text: 'Aplikasi yang sangat membantu untuk konsultasi kesehatan cepat. Fitur analisis gejalanya sangat detail dan rekomendasi obatnya tepat sasaran. Highly recommended!',
         avatar: ''
      }
   ];

   return (
      <section className="py-16 px-4">
         <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
               Ulasan Nyata dari Pengguna AIDOC
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
               {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="p-6 rounded-2xl hover:shadow-lg transition">
                     <div className="flex items-center gap-4 mb-4">
                        <Avatar>
                           <AvatarImage src={testimonial.avatar} />
                           <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div>
                           <p className="font-semibold text-gray-900">{testimonial.username}</p>
                           <div className="flex gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                 <span key={i} className="text-yellow-400">⭐</span>
                              ))}
                           </div>
                        </div>
                     </div>

                     <p className="text-gray-600 text-sm leading-relaxed">
                        {testimonial.text}
                     </p>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};
