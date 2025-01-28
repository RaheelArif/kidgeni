import DiscoverSection from "@/components/Explore/DiscoverSection";
import PopularArtSection from "@/components/Explore/PopularArtSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

export default function Explore() {
  return (
    <div>
      <Header />
      <DiscoverSection />
      <PopularArtSection />
      <Footer />
    </div>
  );
}
