import ForgetForm from "@/components/forgetPassword/ForgetForm";
import Header from "@/components/Header/Header";

import React from "react";

export default function ForgetPassword() {
  return (
    <div>
      <Header />
      <div className="signup-page-bg">
        <ForgetForm />
      </div>
    </div>
  );
}
