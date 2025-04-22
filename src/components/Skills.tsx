"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const skills = [
  { src: "/icons/html.png", title: "HTML" },
  { src: "/icons/css.png", title: "CSS" },
  { src: "/icons/js.png", title: "JavaScript" },
  { src: "/icons/react.png", title: "React" },
  { src: "/icons/nextjs.png", title: "Next.js" },
  { src: "/icons/tailwind.png", title: "Tailwind" },
  { src: "/icons/php.png", title: "PHP" },
  { src: "/icons/laravel.svg", title: "Laravel" },
  { src: "/icons/bootstrap.svg", title: "Bootstrap" },
  { src: "/icons/typescript.png", title: "TypeScript" },
];

export default function Skill() {
  const containerRef = useRef<HTMLDivElement>(null);
  const speed = useRef(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleManualScroll = () => {
      const { scrollLeft, scrollWidth, offsetWidth } = container;

      if (scrollLeft >= scrollWidth - offsetWidth) {
        container.scrollLeft = 0;
      } else if (scrollLeft <= 0) {
        container.scrollLeft = scrollWidth - offsetWidth;
      }
    };

    container.addEventListener("scroll", handleManualScroll);

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += speed.current;

      if (
        container.scrollLeft >=
        container.scrollWidth - container.offsetWidth
      ) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => {
      container.removeEventListener("scroll", handleManualScroll);
    };
  }, []);

  return (
    <section className="py-10 px-5 sm:px-20">
      <h1 className="text-center text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
        My Skills
      </h1>
      <p className="text-center text-sm font-bold mb-6 text-black">
        Here are some tools and technologies I work with:
      </p>
      <div
        ref={containerRef}
        className="overflow-x-auto whitespace-nowrap flex gap-1 px-4 no-scrollbar"
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px]"
          >
            <Image
              src={skill.src}
              alt={skill.title}
              width={40}
              height={40}
              className="object-contain mb-2 drop-shadow-lg"
            />
            <h1 className="text-sm font-bold text-center text-black">
              {skill.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
