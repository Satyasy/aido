import React from 'react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TestimonialsSection = () => {
   const testimonials = [
      {
         id: 1,
         username: 'User2345',
         rating: 5,
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco laboris aliquip.',
         avatar: ''
      },
      {
         id: 2,
         username: 'User2345',
         rating: 5,
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco laboris aliquip.',
         avatar: ''
      },
      {
         id: 3,
         username: 'User2345',
         rating: 5,
         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ullamco laboris aliquip.',
         avatar: ''
      }
   ];

   return (
      <section className="py-16 px-4">
         <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
               Ulasan Nyata dari Pengguna MediBot
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
