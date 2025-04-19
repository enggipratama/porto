import Image from "next/image";
import CardSection from "@/components/Card";
export default function Portofolio() {
  return (
    <section
      className="flex flex-col items-center justify-center text-black mb-50"
      id="portofolio"
    >
      {/* GIF Icon */}
      <Image
        width={30}
        height={30}
        src="/content/moon.gif?v=2"
        alt="Porto Icon"
        className="w-24 h-24 mx-auto mt-10"
      />

      {/* Text content */}
      <a className="text-2xl mb-2 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        This is My Portfolio
      </a>
      {/* <p className="text-sm font-bold lg:mx-50 mx-5 text-justify sm:text-center">
      I’m driven by a passion for web development, with a strong focus on
        creating seamless digital experiences while continuously exploring new
        tools, trends, and technologies.
      </p> */}
      <div className="items-center">
        <CardSection />
      </div>
      <p className="text-sm font-bold lg:mx-50 mx-5 text-justify sm:text-center">
        I’m driven by a passion for web development, with a strong focus on
        creating seamless digital experiences while continuously exploring new
        tools, trends, and technologies.
      </p>
    </section>
  );
}
