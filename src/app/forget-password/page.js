import ForgetForm from "@/components/forgetPassword/ForgetForm";
import Header from "@/components/Header/Header";

import React from "react";

export default function ForgetPassword() {
  return (
    <div className="height-100">
      <Header />
      <div className="signup-page-bg">
        <ForgetForm />
      </div>
    </div>
  );
}
