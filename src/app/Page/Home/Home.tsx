import Image from "next/image";

export default function Page() {
  return (
    <section
      className="flex flex-col items-center justify-center text-black mb-50"
      id="home"
    >
      {/* GIF Icon */}
      <Image
        width={30}
        height={30}
        src="/content/ship.gif?v=2"
        alt="Home Icon"
        className="w-24 h-24 mx-auto mt-10"
      />

      {/* Text content */}
      <a className="text-1xl font-bold text-center">Hi, My Name is</a>
      <h1 className="text-2xl sm:text-6xl p-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        Muhammad Einggi Gusti P
      </h1>
      <p className="text-l sm:text-2xl text-center">
        This website is a collection of my projects and experiences.
      </p>
      <p className="text-1xl sm:text-2xl text-center">
        Feel free to explore and learn more about me.
      </p>
      <a
        href="/content/cv-einggi.pdf"
        download
        className="inline-flex mt-20 lg:mt-5 items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
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
      </a>
    </section>
  );
}
