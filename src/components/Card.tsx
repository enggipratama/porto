"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function MyCardSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [visibleOverlay, setVisibleOverlay] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleTouchStart = () => setIsTouchDevice(true);
    const handleMouseMove = () => setIsTouchDevice(false);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("mousemove", handleMouseMove);

    // Close overlay when clicking outside of it
    const handleClickOutside = (e: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(e.target as Node)
      ) {
        setVisibleOverlay(null); // Close overlay if clicking outside
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const cards = [
    {
      title: "Davibar House",
      content: "Warehouse Inventory Website",
      footer: [
        {
          url: "https://github.com/enggipratama/DAVIBARTEST",
          icon: "/content/white-github.png",
          alt: "GitHub Logo",
        },
        {
          url: "https://davibar-house.vercel.app",
          icon: "/content/link.png",
          alt: "Live Demo",
        },
      ],
      image: "/content/davibar.png",
    },
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

  const toggleOverlay = (index: number) => {
    setVisibleOverlay((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative w-full max-w-[70vw] mx-auto">
      <div
        ref={scrollRef}
        className={`flex gap-4 snap-x snap-mandatory ${
          cards.length > 1 ? "overflow-x-auto" : ""
        } pb-4 mt-4 no-scrollbar scroll-smooth`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-full sm:w-auto flex justify-center px-3 mt-3"
            onPointerDown={() => {
              if (isTouchDevice) {
                toggleOverlay(index);
              }
            }}
            onMouseEnter={() => !isTouchDevice && setVisibleOverlay(index)}
            onMouseLeave={() => !isTouchDevice && setVisibleOverlay(null)}
          >
            <div
              className={`relative w-[200px] sm:w-[200px] lg:w-[200px] bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-md rounded-xl shadow-lg border border-white/10 p-6 overflow-hidden group transition-transform duration-300 ${
                !isTouchDevice ? "hover:scale-105" : ""
              }`}
            >
              {/* Image */}
              <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-md">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Description */}
              <h1 className="text-xl font-bold text-center text-white mt-2 line-clamp-2">
                {card.title}
              </h1>
              <p className="text-white text-xs text-center line-clamp-2 mt-3 min-h-[2rem]">
                {card.content}
              </p>

              {/* Overlay */}
              <div
                ref={overlayRef}
                className={`
                  absolute inset-0 flex items-center justify-center rounded-xl
                  bg-blue-900/40 backdrop-blur-sm
                  transition-all duration-300
                  ${
                    visibleOverlay === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full pointer-events-none"
                  }
                `}
              >
                <div className="flex items-center justify-center gap-4">
                  {card.footer.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        width={30}
                        height={30}
                        src={link.icon}
                        alt={link.alt}
                        className="hover:scale-110 transition"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
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
