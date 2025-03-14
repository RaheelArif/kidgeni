import ContactForm from "@/components/ContactUs/ContactForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="contact-form-p">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
