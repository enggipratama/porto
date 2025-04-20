"use client";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center text-black mb-5 sm:px-10 px-5"
      id="contact"
    >
      <a className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
        Get in Touch_
      </a>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="text-left max-w-2xl">
          <p className="text-black font-semibold text-sm leading-relaxed mt-3 sm:text-l text-center">
            Got a question or want to collaborate? Feel free to{" "}
            <span className="text-sm mb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800 animate-pulse">
              reach out.{"  "}
            </span>
            — Say hello anytime!
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
        <div className="w-70 sm:w-120 md:w-140 rounded h-1 bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800 animate-pulse" />
      </div>
    </section>
  );
}
