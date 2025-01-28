import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LoginForm from "@/components/login/LoginForm";
import SignupForm from "@/components/signin/SignupForm";
import React from "react";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="signup-page-bg">
        <LoginForm />
      </div>
    </div>
  );
}
