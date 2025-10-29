// src/screen/HomeScreen.tsx (LANJUTAN)

// ... (Import Header dan Footer tetap di atas) ...
import React from "react";
// Sesuaikan jalur impor Header jika Anda mengubahnya
import { Header } from "../components/ui/Header"; 
import { Footer } from "../components/ui/Footer"; 


// ... (SymptomInputBox dan HowItWorksCard tetap di sini) ...
// ... (Kode sebelumnya...) ...


// --- Komponen Kartu Fitur Kecil ---
const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <div className="p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md border border-purple-100 flex items-start space-x-3">
            <div className="text-2xl mt-1 text-purple-600">
                {icon} {/* Ganti dengan ikon yang sesuai */}
            </div>
            <div>
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </div>
    );
};

// --- Komponen Kartu Testimonial ---
const TestimonialCard = ({ user, rating, review }: { user: string, rating: number, review: string }) => {
    // Membuat string bintang berdasarkan rating
    const stars = '⭐'.repeat(rating); 
    
    return (
        <div className="p-6 bg-white rounded-lg shadow-xl border border-blue-100/50">
            <div className="flex items-center mb-3">
                {/* Placeholder Avatar */}
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div> 
                <div>
                    <p className="font-semibold text-gray-800">{user}</p>
                    <p className="text-yellow-500 text-sm">{stars}</p>
                </div>
            </div>
            <p className="text-sm text-gray-600 italic">
                "{review}"
            </p>
        </div>
    );
};


export const HomeScreen = () => {
  return (
    <div className="min-h-screen">
      
      <Header currentPage="Home" />
      
      <main className="relative z-10 pt-16 pb-20 overflow-hidden">
        
        {/* ... (Hero Section dan How It Works Section - Kode sebelumnya) ... */}
        {/* ... (Dihilangkan untuk keringkasan, tapi asumsikan sudah ada di sini) ... */}


        {/* --- 6. Section: Keunggulan MediBot (Feature Cards) --- */}
        <section className="mt-32 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
            Rasakan Fitur Kesehatan Lengkap dengan Teknologi Pintar dari 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> MediBot</span> Setiap Hari
          </h2>
          
          {/* Grid untuk 3 Kartu Keunggulan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
                icon="📱"
                title="Akses 24 Jam"
                description="Konsultasi kesehatan kapan pun, di mana pun Anda berada."
            />
            <FeatureCard
                icon="💬"
                title="Respons Cepat"
                description="Dapatkan jawaban dan saran dalam hitungan detik."
            />
            <FeatureCard
                icon="🩺"
                title="Informasi Terpercaya"
                description="Menggunakan sumber medis yang tervalidasi."
            />
          </div>
        </section>


        {/* --- 7. Section: MediBot Feature Block (Dengan Maskot) --- */}
        <section className="mt-32 max-w-7xl mx-auto px-4">
            <div className="relative p-12 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
                
                {/* Background Shape Gradien di Belakang */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100 to-transparent opacity-50 z-0"></div>

                <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
                    
                    {/* Kolom Kiri: Maskot MediBot dan Keunggulan List */}
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        {/* Placeholder untuk Ilustrasi 3D MediBot */}
                        <div className="relative w-64 h-64 mx-auto lg:mx-0">
                            {/* Jika Anda punya asset gambar: */}
                            {/* <img src="/assets/medibot-mascot.png" alt="MediBot Mascot" className="w-full h-full object-contain" /> */}
                            <div className="w-full h-full bg-blue-200 rounded-full flex items-center justify-center text-5xl opacity-80">
                                                            </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4 text-center lg:text-left">
                            Mengapa memilih MediBot?
                        </h3>
                        {/* Daftar Keunggulan/Checklist */}
                        <ul className="space-y-3 text-gray-700 text-sm max-w-sm mx-auto lg:mx-0">
                            <li className="flex items-center">✅ Data dienkripsi dengan aman.</li>
                            <li className="flex items-center">✅ Diperbarui secara berkala.</li>
                            <li className="flex items-center">✅ Dilengkapi fitur pengiriman foto.</li>
                        </ul>
                    </div>

                    {/* Kolom Kanan: Artikel Promosi */}
                    <div className="lg:w-1/2 lg:pl-16">
                        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-300 to-blue-300 text-white">
                            <h4 className="text-2xl font-bold mb-3">Informasi Tepat Untuk Hidup Sehat</h4>
                            <p className="mb-6 text-sm opacity-90">
                                Baca artikel terbaru dan dapatkan tips kesehatan dari tim ahli kami.
                            </p>
                            <button className="px-6 py-2 bg-white text-purple-600 rounded-full font-semibold hover:shadow-md transition">
                                Baca Artikel →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* --- 8. Section: Testimonial --- */}
        <section className="mt-32 max-w-7xl mx-auto px-4 pb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
                Ulasan Nyata dari Pengguna MediBot
            </h2>

            {/* Grid untuk 3 Kartu Testimonial */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TestimonialCard
                    user="User2345"
                    rating={5}
                    review="Layanan konsultasi yang cepat dan sangat membantu! Saya merasa lebih tenang setelah mendapatkan saran dari MediBot."
                />
                <TestimonialCard
                    user="User2346"
                    rating={5}
                    review="Desain aplikasinya intuitif, mudah digunakan, dan informasinya akurat. Sangat direkomendasikan!"
                />
                <TestimonialCard
                    user="User2347"
                    rating={5}
                    review="Saya suka fitur unggah fotonya! Membantu mendeskripsikan kondisi yang sulit dijelaskan dengan kata-kata."
                />
            </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};