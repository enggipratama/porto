import Background from "./Background-page/page";
import Navbar from "@/components/Navbar";
import Page from "./Page/Home/page";
import Portofolio from "./Page/Portofolio/page";
import About from "./Page/About/page";
import Contact from "./Page/Contact/page";
import Footer from "@/components/Footer";
import FloatingLogoWithMenu from "@/components/Logonavbar";
import React from "react";
import JokeCard from "./Page/Jokes/page";

export default function Home() {
  return (
    <>
      <FloatingLogoWithMenu />
      <Background />
      <div className="fixed inset-0 flex justify-center items-center h-full p-10 lg:p-20">
        <div
          className="w-full h-full rounded-xl shadow-lg border border-gray-300"
          style={{
            backgroundColor: "#fae7e72b",
            backgroundImage: `url("/content/kertas.jpg")`,
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
              <JokeCard />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
