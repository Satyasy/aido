import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesBar } from "@/components/FeaturesBar";
import { StatisticsSection } from "@/components/StatisticsSection";
import { TechnologySection } from "@/components/TechnologySection";
import { AidocFeatures } from "@/components/AidocFeatures";
import { HealthInfoSection } from "@/components/HealthInfoSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { ClientChatbot } from "@/components/ClientChatbot";

export const HomeScreen = () => {
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />
            <HeroSection />
            <FeaturesBar />
            <StatisticsSection />
            <TechnologySection />
            <AidocFeatures />
            <HealthInfoSection />
            <TestimonialsSection />
            <Footer />
            <ClientChatbot />
        </div>
    );
};
