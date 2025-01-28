import DiscoverSection from "@/components/explore/DiscoverSection";
import PopularArtSection from "@/components/explore/PopularArtSection";
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
