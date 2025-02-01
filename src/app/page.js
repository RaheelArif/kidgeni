import FAQSectionHome from "@/components/FAQSection/FAQSectionHome";
import Footer from "@/components/Footer/Footer";

import Header from "@/components/Header/Header";
import HeroSection from "@/components/home/HeroSection";
import MovingPlans from "@/components/home/MovingPlans";
import OurCollection from "@/components/home/OurCollection";
import PricingCardGrid from "@/components/home/PricingCardGrid";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
 
      <HeroSection />

      <OurCollection />
      <MovingPlans />

      <div className="pricing-container">
        <div className="container">
          <PricingCardGrid />
        </div>
      </div>
      <FAQSectionHome />
      <Footer />
    </div>
  );
}
