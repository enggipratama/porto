import Background from "./Background-page/Background";
import Navbar from "@/components/Navbar";
import Page from "./Page/Home/Home";
import Portofolio from './Page/Portofolio/Portofolio';
import About from "./Page/About/About";
import React from "react";

export default function Home() {
  return (
    <>
      <Background />
      <div className="fixed inset-0 flex justify-center items-center h-full p-10 lg:p-20">
        <div className="w-full h-full rounded-xl bg-gray-100 shadow-lg">
          <div className="flex flex-col h-full">
            <Navbar />
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-3 space-y-20">
              <Page />
              <Portofolio />
              <About />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
