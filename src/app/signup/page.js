import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SignupForm from "@/components/signin/SignupForm";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <div className="login-page-bg">
        <SignupForm />
      </div>
    </div>
  );
}
