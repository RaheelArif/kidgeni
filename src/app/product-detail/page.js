import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import OurCollection from "@/components/home/OurCollection";
import ProductDetail from "@/components/productDetail/ProductDetail";
import React from "react";

export default function ProductDetailPage() {
  return (
    <div>
      <Header />
      <ProductDetail />
      <OurCollection isDetail={true}/>
      <Footer />
    </div>
  );
}
