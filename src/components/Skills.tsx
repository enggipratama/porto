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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!container) return;
      container.scrollLeft += speed;
      scrollAmount += speed;

      // Reset scroll saat akhir
      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="py-10 px-8 sm:px-30">
      <h2 className="text-center text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
        My Skills
      </h2>

      <div
        ref={containerRef}
        className="overflow-hidden whitespace-nowrap flex gap-2 px-4"
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[120px]"
          >
            <Image
              src={skill.src}
              alt={skill.title}
              width={40}
              height={40}
              className="object-contain mb-2 drop-shadow-lg"
            />
            <a className="text-sm font-bold text-center text-black">
              {skill.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
