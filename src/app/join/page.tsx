import React from "react";
import JoinForm from "@/components/JoinForm";
import Header from "@/components/Header";
import Footer from "@/components/Last/Footer";
const page = () => {
  return (
    <div>
      <Header />
      <JoinForm />
      <div className="mx-4 mb-8">
        <Footer />
      </div>
    </div>
  );
};

export default page;
