"use client";
import Image from "next/image";
import TypingText from "@/components/TypingText";
import Link from "next/link";

export default function Page() {
  return (
    <section
      className="flex flex-col items-center justify-center text-black mt-5 sm:mt-0"
      id="home"
    >
      <Image
        width={90}
        height={90}
        src="/content/ship.gif?v=2"
        alt="Home Icon"
        className=" sm:w-32 sm:h-32 mx-auto mt-0 sm:mt-5"
      />

      <h1 className="text-lg sm:text-1xl font-bold text-center">
        Hi, My Name is
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl p-8 md:p-10 min-h-40 md:min-h-full sm:px-20 px-10 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
        <TypingText text="Muhammad Einggi Gusti P" />
      </h1>
      <p className="text-sm sm:text-lg text-center font-bold mb-1 sm:px-20 px-5">
        This website is a collection of my projects and experiences.
      </p>
      <p className="text-xs sm:text-sm text-center font-bold mx-4 mb-2 sm:px-20 px-5">
        Feel free to explore and learn more about me.
      </p>
      <Link
        href="/content/cv-einggi.pdf"
        download
        className="inline-flex mt-2 mb-10 items-center px-6 py-3 bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v6m0 0l-3-3m3 3l3-3m-6-9h6"
          />
        </svg>
        Download CV
      </Link>
      <div className="flex items-center justify-center mt-10 gap-5">
        <div className="flex flex-col items-center justify-center">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-blue-900 mb-1 animate-bounce" />
          <div className="w-1 h-28 bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800 animate-pulse" />
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-pink-800 mt-1 animate-bounce" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-0 h-0 border-l-5 border-r-5 border-b-8 border-transparent border-b-blue-900 mb-2 animate-bounce" />
          <div className="w-1 h-40 bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800 animate-pulse" />
          <div className="w-0 h-0 border-l-5 border-r-5 border-t-8 border-transparent border-t-pink-800 mt-2 animate-bounce" />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-blue-900 mb-1 animate-bounce" />
          <div className="w-1 h-28 bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800 animate-pulse" />
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-pink-800 mt-1 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
