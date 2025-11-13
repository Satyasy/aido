import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AIConsultationCard } from "@/components/AIConsultationCard";
import { FeaturesBar } from "@/components/FeaturesBar";
import { StatisticsSection } from "@/components/StatisticsSection";
import { TechnologySection } from "@/components/TechnologySection";
import { MedibotFeatures } from "@/components/MedibotFeatures";
import { HealthInfoSection } from "@/components/HealthInfoSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { ChatbotWidget } from "@/components/ChatbotWidget";


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
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <AIConsultationCard />
            <FeaturesBar />
            <StatisticsSection />
            <TechnologySection />
            <MedibotFeatures />
            <HealthInfoSection />
            <TestimonialsSection />
            <Footer />
            <ChatbotWidget />
        </div>
    );
};