import Footer from "@/components/third/footer";
import Banner from "@/components/third/banner";
import Header from "@/components/third/header";
import React from "react";

export default function page() {
  return (
    <div className="bg-black pt-6 pb-6 px-6 h-full w-full">
      <div className="bg-stone-200 ps-8 rounded-3xl">
        <Header />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}
