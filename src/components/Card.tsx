"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function MyCardSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "Davibar House",
      content: "Warehouse Inventory Website",
      footer: "https://github.com/enggipratama/DAVIBARTEST",
      image: "/content/davibar.png",
    },
    // {
    //   title: "Davibar",
    //   content: "Warehouse Website",
    //   footer: "https://github.com/davibar",
    //   image: "/content/davibar.png",
    // },
    // {
    //   title: "Davibar",
    //   content: "Warehouse Website",
    //   footer: "https://github.com/davibar",
    //   image: "/content/davibar.png",
    // },
    // {
    //   title: "Davibar",
    //   content: "Warehouse Website",
    //   footer: "https://github.com/davibar",
    //   image: "/content/davibar.png",
    // },
    // {
    //   title: "Davibar",
    //   content: "Warehouse Website",
    //   footer: "https://github.com/davibar",
    //   image: "/content/davibar.png",
    // },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-[70vw] mx-auto">
      <div
        ref={scrollRef}
        className={`flex gap-0 snap-x snap-mandatory ${
          cards.length > 1 ? "overflow-x-auto" : ""
        } pb-4 mt-4 no-scrollbar scroll-smooth`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="snap-center shrink-0 min-w-[100%] sm:min-w-[50%] lg:min-w-[25%] flex flex-col items-center justify-center px-4 mt-3"
          >
            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-6 relative overflow-hidden group transition transform hover:scale-105">
              <div className="w-16 h-16 mx-auto relative overflow-hidden rounded-md">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <a className="text-xl font-bold text-center text-white mt-2 line-clamp-2 w-32">
                {card.title}
              </a>
              <p className="text-white text-xs text-center line-clamp-2 w-32 h-8 mt-3">
                {card.content}
              </p>

              <a
                href={card.footer}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center mt-4 transition-transform duration-200 hover:scale-110 animate-pulse"
              >
                <Image
                  width={20}
                  height={20}
                  src="/content/white-github.png"
                  alt="GitHub Logo"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {cards.length > 1 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="p-1 text-black hover:scale-110 transition animate-pulse"
          >
            <ArrowLeftCircle size={32} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-1 text-black hover:scale-110 transition animate-pulse"
          >
            <ArrowRightCircle size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
