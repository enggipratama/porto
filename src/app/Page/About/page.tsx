"use client";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center text-black"
      id="about"
    >
      <Image
        width={90}
        height={90}
        src="/content/shooting-star.gif?v=2"
        alt="About Icon"
        className="sm:w-32 sm:h-32 mx-auto mt-0 sm:mt-5"
      />

      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
        About Me_
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 sm:gap-20 p-5 sm:p-10 sm:px-20 px-5">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl mb-2 font-bold text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
            So Who am I ? _
          </h1>
          <p className="text-black font-semibold text-sm leading-relaxed mt-3 sm:text-l text-justify">
            Hi! I’m{" "}
            <span className="text-sm mb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
              Muhammad Einggi Gusti P
            </span>
            , a Computer Science graduate from Universitas Muhammadiyah Malang,
            class of 2024, with a strong passion for technology and its
            continuous development. Throughout my academic journey, I actively
            participated in various trainings and seminars to broaden my
            knowledge and enhance my technical skills.
            <br />I believe that technology is constantly evolving, and
            continuous learning is essential. With a collaborative spirit and a
            strong commitment to delivering the best results, I’m always ready
            to take on new challenges in dynamic and professional environments.
          </p>
        </div>
        <div className="relative bg-gray-200 rounded-xl p-2 shadow-xl hover:scale-105 transition-transform duration-300">

          {/* Gambar utama */}
          <Image
            width={300}
            height={300}
            src="/content/profile2.jpg"
            alt="Profile Picture"
            className="w-50 h-60 md:max-w-96 md:max-h-96 object-cover rounded-xl"
          />

          {/* Teks */}
          <div className="text-center mt-2">
            <h2 className="text-xl font-bold text-gray-800">Enggi Pratama</h2>
            <p className="text-sm text-gray-600">Frontend Developer</p>
          </div>
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
