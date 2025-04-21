import Background from "./Background-page/Background";
import Navbar from "@/components/Navbar";
import Page from "./Page/Home/Home";
import Portofolio from "./Page/Portofolio/Portofolio";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Footer from "@/components/Footer";
import FloatingLogoWithMenu from "@/components/logonavbar";
import React from "react";

export default function Home() {
  return (
    <>
      <FloatingLogoWithMenu />
      <Background />
      <div className="fixed inset-0 flex justify-center items-center h-full p-10 lg:p-20">
        <div
          className="w-full h-full rounded-xl shadow-lg border border-gray-300"
          style={{
            backgroundColor: "#fae7e72b", // warna kertas kuning kusam
            backgroundImage: `url("/content/kertas.jpg")`, // tambahkan gambar tekstur
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex-1 overflow-y-auto scrollbar-hide p-0 space-y-20">
              <Page />
              <About />
              <Portofolio />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
