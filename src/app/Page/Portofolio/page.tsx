"use client";
import Image from "next/image";
import CardSection from "@/components/Card";
import Skill from "@/components/Skills";

export default function Portofolio() {
  return (
    <section
      className="flex flex-col items-center justify-center text-black"
      id="portofolio"
    >
      <Image
        width={90}
        height={90}
        src="/content/moon.gif?v=2"
        alt="Porto Icon"
        unoptimized
        className="sm:w-32 sm:h-32 mx-auto"
      />

      <h1 className="text-3xl mb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
        My Portfolio_
      </h1>
      <div className="items-center">
        <CardSection />
      </div>
      <p className="text-sm sm:text-l font-bold lg:mx-50 mx-5 text-justify sm:text-center mt-5">
        I’m driven by a passion for web development, with a strong focus on
        creating seamless digital experiences while continuously exploring new
        tools, trends, and technologies.
      </p>
      <div className="w-full flex justify-center overflow-x-hidden">
        <div className="w-full max-w-screen-md">
          <Skill />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 gap-5">
        <div className="flex flex-col items-center justify-center">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-blue-900 mb-1 animate-bounce" />
          <div className="w-1 h-10 bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800 animate-pulse" />
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-pink-800 mt-1 animate-bounce" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-0 h-0 border-l-5 border-r-5 border-b-8 border-transparent border-b-blue-900 mb-2 animate-bounce" />
          <div className="w-1 h-23 bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800 animate-pulse" />
          <div className="w-0 h-0 border-l-5 border-r-5 border-t-8 border-transparent border-t-pink-800 mt-2 animate-bounce" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-blue-900 mb-1 animate-bounce" />
          <div className="w-1 h-10 bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800 animate-pulse" />
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-pink-800 mt-1 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
