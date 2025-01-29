import Footer from "@/components/Footer/Footer";

import Header from "@/components/Header/Header";
import HeroSection from "@/components/home/HeroSection";
import MovingPlans from "@/components/home/MovingPlans";
import OurCollection from "@/components/home/OurCollection";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
       <HeroSection />
  
       <OurCollection />
       <MovingPlans />
      <Footer />
    </div>
  );
}
