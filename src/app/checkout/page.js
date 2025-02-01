import CheckoutPage from "@/components/checkout/CheckoutForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

export default function page() {
  return (
    <div className="light-bg">
      <Header />
      <CheckoutPage />
      <Footer />
    </div>
  );
}
