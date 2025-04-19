import Image from "next/image";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center text-black mb-50"
      id="about"
    >
      {/* GIF Icon */}
      <Image
        width={30}
        height={30}
        src="/content/shooting-star.gif?v=2"
        alt="About Icon"
        className="w-24 h-24 mx-auto"
      />

      {/* Text content */}
      <a className="text-3xl mb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        About Me_
      </a>
    </section>
  );
}
