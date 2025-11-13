import React from "react";
import Image from "next/image";
import Link from 'next/link';

import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";

// Re-defining the components from the original code for completeness
const SymptomInputBox = () => {
    const inputContainerClasses =
        "w-full max-w-xl mx-auto p-4 flex items-center justify-between border-2 rounded-xl " +
        "border-gray-100/50 bg-white/70 backdrop-blur-md shadow-xl transition-all duration-300 " +
        "hover:shadow-2xl hover:border-blue-200";

    const iconClasses =
        "flex items-center text-sm font-medium text-gray-500 hover:text-purple-600 transition cursor-pointer " +
        "whitespace-nowrap";

    return (
        <div className={inputContainerClasses}>
            <input
                type="text"
                placeholder="Type your symptoms here..."
                className="flex-grow bg-transparent focus:outline-none text-gray-800 placeholder-gray-400 text-sm md:text-base"
            />

            <div className="flex space-x-2 sm:space-x-4 ml-4">
                <div className={iconClasses}>
                    🔍 <span className="ml-1 hidden sm:inline">Identify symptoms</span>
                </div>

                <div className={iconClasses}>
                    📷 <span className="ml-1 hidden sm:inline">Upload photo</span>
                </div>
            </div>

            <button className="ml-4 p-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-300 hover:shadow-lg transition">
                <span className="text-white">→</span>
            </button>
        </div>
    );
};

const InfoCard = ({ icon, title, description, isTime = false }: { icon: string, title: string, description: string, isTime?: boolean }) => {
    const cardClasses =
        "p-6 bg-white/60 backdrop-blur-md rounded-xl shadow-lg border border-gray-100/50 " +
        "hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center";

    return (
        <div className={cardClasses}>
            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full mb-4 text-2xl font-bold text-white"
                 style={{ backgroundImage: 'linear-gradient(to right, #A78BFA, #60A5FA)' }}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

const ArticleCard = ({ imageSrc, category, title, date, excerpt }: { imageSrc: string, category: string, title: string, date: string, excerpt: string }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image src={imageSrc} alt={title} width={300} height={200} objectFit="cover" className="w-full h-36" />
            <div className="p-4">
                <span className="text-xs font-semibold text-purple-600 uppercase mb-1 block">{category}</span>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{title}</h3>
                <p className="text-gray-500 text-xs mb-3">{date}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
                <Link href="#" className="text-purple-600 text-sm font-semibold mt-3 inline-block hover:underline">Baca Selengkapnya →</Link>
            </div>
        </div>
    );
};

const TestimonialCard = ({ user, rating, review }: { user: string, rating: number, review: string }) => {
    const stars = '⭐'.repeat(rating); 
    
    return (
        <div className="p-6 bg-white rounded-lg shadow-xl border border-blue-100/50">
            <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                    {/* Assuming you have a generic avatar asset */}
                    <Image src="/assets/avatar.png" alt="User Avatar" width={40} height={40} objectFit="cover" />
                </div> 
                <div>
                    <p className="font-semibold text-gray-800">{user}</p>
                    <p className="text-yellow-500 text-sm">{stars}</p>
                </div>
            </div>
            <p className="text-sm text-gray-600 italic line-clamp-4">
                "{review}"
            </p>
        </div>
    );
};

// --- MODIFIED HOMESCREEN COMPONENT ---

export const HomeScreen = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header currentPage="Home" />

            <main className="relative flex-grow pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 z-[-1]"></div>

                <section className="relative pt-10 pb-20 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
                    {/* Floating Background Blobs (Kept for visual effect) */}
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob z-0"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-0"></div>

                    {/* Left side: Hero Text and Button */}
                    <div className="lg:w-1/2 text-center lg:text-left relative z-10">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Lindungi Diri Anda
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Lindungi Keluarga</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                            Konsultasikan keluhan kesehatan Anda Langsung, dengan Dokter Terpercaya.
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4">
                            <Link href="/consultation" className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                                ChatBot →
                            </Link>
                            {/* Optional: Add a secondary button or text here if needed */}
                        </div>
                    </div>

                    {/* Right side: 3D Tilted Chatbot Image (The main modification) */}
                    <div className="lg:w-1/2 flex justify-center items-center relative z-10">
                        {/* Replacing the old chat simulation with an Image component 
                            using the asset that has the desired 3D tilt.
                            I am using a generic image file name here based on the design files.
                        */}
                        <div className="relative w-full max-w-lg h-[450px] lg:h-[550px]">
                            {/* The Image component is set to fill the container and use a high z-index */}
                            <Image
                                src="/img/chatbot-asset-miring.png" // Placeholder for your 3D asset (e.g., Group 32 (1).jpg or Group 3 (1).jpg)
                                alt="3D Tilted Chatbot Consultation Interface"
                                layout="fill"
                                objectFit="contain"
                                className="drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </section>
                
                {/* AI Consultation and MediBot Insight cards below the hero section */}
                <section className="mt-12 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
                    {/* AI Consultation Card (Based on design) */}
                    <div className="p-6 md:w-1/3 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                            <span className="mr-2 text-2xl text-blue-500">🤖</span> AI Consultation
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Konsultasikan keluhan penyakit Anda sekarang dan dapatkan solusi cepat dari MediBot, aman terpercaya.
                        </p>
                    </div>
                    {/* MediBot Insight Card (Based on design) */}
                    <div className="p-6 md:w-1/3 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl text-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                            <span className="mr-2 text-2xl text-purple-500">💡</span> MediBot Insight
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Temukan berbagai artikel kesehatan terpercaya dan terbaru hanya di MediBot, untuk hidup lebih sehat.
                        </p>
                    </div>
                </section>
                

                <section className="mt-24 max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                        Layanan yang Cepat
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InfoCard icon="⏱️" title="24 Jam" description="Layanan konsultasi tersedia setiap saat." />
                        <InfoCard icon="⚡" title="Respons Cepat" description="Dapatkan jawaban instan dari AI Medis kami." />
                        <InfoCard icon="👨‍⚕️" title="Konsultasi Gratis" description="Dapatkan konsultasi dasar tanpa biaya." />
                    </div>
                </section>

                <section className="mt-24 max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-16">
                        Rasakan Fitur Kesehatan Lengkap dengan Teknologi Pintar dari
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"> MediBot</span> Setiap Hari
                    </h2>

                    {/* Feature Block 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="lg:order-1 order-2 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100/50 relative">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnosis Awal Cepat dan Akurat</h3>
                            <p className="text-gray-600 mb-6">
                                Medibot mampu memberikan diagnosis awal yang cepat dan akurat berdasarkan gejala yang Anda masukkan. 
                                Dengan teknologi AI canggih, kami membantu Anda memahami kondisi kesehatan Anda lebih baik.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-purple-50 rounded-lg text-center">
                                    <p className="text-3xl font-bold text-purple-600">33%</p>
                                    <p className="text-sm text-gray-600">Peningkatan Pengetahuan Kesehatan</p>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-lg text-center">
                                    <p className="text-3xl font-bold text-blue-600">26%</p>
                                    <p className="text-sm text-gray-600">Pengurangan Waktu Tunggu Dokter</p>
                                </div>
                            </div>
                             <div className="absolute -top-10 -left-10 w-24 h-24 text-blue-400 opacity-20 text-7xl hidden lg:block">🔍</div>
                        </div>

                        <div className="lg:order-2 order-1 flex justify-center items-center">
                            <div className="relative w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg flex items-center justify-center p-4">
                                <div className="text-8xl text-gray-400 opacity-30">💡</div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Block 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
                        <div className="flex justify-center items-center">
                            <div className="relative w-full h-80 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-lg flex items-center justify-center p-4">
                                <div className="text-8xl text-gray-400 opacity-30">❓</div>
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100/50 relative">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tanya Jawab Medis Profesional</h3>
                            <p className="text-gray-600 mb-6">
                                Ajukan pertanyaan tentang kesehatan Anda dan dapatkan jawaban yang terpercaya dari basis data medis yang luas. 
                                Fitur ini dirancang untuk memberikan informasi yang akurat dan mudah dipahami.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <InfoCard icon="📖" title="Akses Pengetahuan" description="Ribuan artikel medis terverifikasi." />
                                <InfoCard icon="🌐" title="Jangkauan Global" description="Informasi dari berbagai sumber terkemuka." />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-24 h-24 text-purple-400 opacity-20 text-7xl hidden lg:block">📝</div>
                        </div>
                    </div>
                </section>

                <section className="mt-24 max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
                        Artikel Terbaru & Terpopuler
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                            {/* Placeholder for Image component */}
                            <Image src="/assets/article1.jpg" alt="Artikel Utama" width={600} height={400} objectFit="cover" className="w-full h-64 md:h-80" />
                            <div className="p-6">
                                <span className="text-sm font-semibold text-purple-600 uppercase mb-2 block">Kesehatan Umum</span>
                                <h3 className="font-bold text-gray-900 mb-3 text-2xl">Peran Penting Vaksinasi dalam Mencegah Penyakit</h3>
                                <p className="text-gray-500 text-sm mb-4">20 Mei 2024</p>
                                <p className="text-gray-700 mb-6 line-clamp-3">
                                    Vaksinasi telah terbukti menjadi salah satu intervensi kesehatan masyarakat yang paling efektif dalam mencegah penyebaran penyakit menular.
                                    Memahami bagaimana vaksin bekerja dan pentingnya imunisasi adalah kunci untuk kesehatan komunitas.
                                </p>
                                <Link href="#" className="text-blue-600 font-semibold text-lg hover:underline">Baca Selengkapnya →</Link>
                            </div>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Article Card components... */}
                            <ArticleCard
                                imageSrc="/assets/article2.jpg"
                                category="Diet & Nutrisi"
                                title="Tips Diet Sehat untuk Menjaga Berat Badan Ideal"
                                date="18 Mei 2024"
                                excerpt="Menjaga berat badan ideal sangat penting untuk kesehatan jangka panjang. Ikuti tips diet seimbang ini."
                            />
                            <ArticleCard
                                imageSrc="/assets/article3.jpg"
                                category="Kesehatan Mental"
                                title="Mengatasi Stres: Teknik Relaksasi yang Efektif"
                                date="15 Mei 2024"
                                excerpt="Stres adalah bagian tak terhindarkan dari hidup. Pelajari teknik-teknik relaksasi untuk mengelolanya."
                            />
                             <ArticleCard
                                imageSrc="/assets/article4.jpg"
                                category="Olahraga"
                                title="Panduan Latihan Fisik untuk Pemula"
                                date="12 Mei 2024"
                                excerpt="Memulai rutinitas olahraga bisa menantang. Panduan ini akan membantu Anda memulai dengan benar."
                            />
                            <ArticleCard
                                imageSrc="/assets/article5.jpg"
                                category="Gaya Hidup"
                                title="Pentingnya Tidur Cukup untuk Produktivitas"
                                date="10 Mei 2024"
                                excerpt="Tidur adalah kebutuhan dasar yang sering diabaikan. Ketahui mengapa tidur cukup sangat krusial."
                            />
                        </div>
                    </div>
                </section>

                <section className="mt-24 max-w-7xl mx-auto px-4">
                    <div className="relative p-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
                        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative -mt-24 md:mt-0">
                            <Image 
                                src="/assets/medibot-mascot.png" 
                                alt="MediBot" 
                                layout="fill" 
                                objectFit="contain" 
                                className="drop-shadow-lg"
                            />
                        </div>

                        <div className="text-center md:text-left flex-grow">
                            <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                                Ingin mengetahui lebih lanjut tentang kondisi Anda?
                            </h3>
                            <p className="text-lg text-gray-700 mb-8 max-w-xl md:max-w-none mx-auto md:mx-0">
                                Dapatkan diagnosis awal, saran, dan informasi medis yang terpercaya langsung dari MediBot.
                            </p>
                            <Link href="/consultation" className="inline-block px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                                Mulai Konsultasi →
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="mt-24 max-w-7xl mx-auto px-4 pb-20">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
                        Ulasan Nyata dari Pengguna MediBot
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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