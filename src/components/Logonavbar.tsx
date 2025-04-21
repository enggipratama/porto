"use client";
import React, { useState, useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FloatingLogoWithMenu: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [logoPosition, setLogoPosition] = useState({ x: 100, y: 100 });
  const [lastTouchTime, setLastTouchTime] = useState<number>(0);
  const [lastClickTime, setLastClickTime] = useState<number>(0);
  const draggableRef = useRef<HTMLDivElement>(null);

  const handleLogoClick = () => setIsMenuVisible((prev) => !prev);

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const currentTime = Date.now();
    if (currentTime - lastTouchTime < 300) handleLogoClick();
    setLastTouchTime(currentTime);
  };

  const handleMouseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const currentTime = Date.now();
    if (currentTime - lastClickTime < 300) handleLogoClick();
    setLastClickTime(currentTime);
  };

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setLogoPosition({ x: data.x, y: data.y });
  };

  const menuOffset = 60;

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative z-50">
      <Draggable
        nodeRef={draggableRef as React.RefObject<HTMLElement>}
        position={logoPosition}
        onDrag={handleDrag}
      >
        <div
          ref={draggableRef}
          className="fixed cursor-pointer z-50 flex flex-col items-center"
          onClick={handleMouseClick}
          onTouchStart={handleTouchStart}
        >
          <Image
            width={100}
            height={100}
            src="/content/moonnav.gif"
            alt="Moon Logo"
            className="w-[clamp(3rem,3vw,3rem)] h-auto transition-transform duration-200 hover:scale-110"
          />
          <h1
            style={{ fontFamily: "var(--font-varela), cursive" }}
            className="text-xs text-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800 animate-pulse"
          >
            Double Tap
          </h1>
        </div>
      </Draggable>

      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.3, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed text-center z-40 bg-blue-900 rounded-lg shadow-lg px-4 py-3 max-w-[90vw]"
            style={{
              top: logoPosition.y + menuOffset + 10,
              left: logoPosition.x - menuOffset + 30,
              transform: "translateX(-50%)",
              width: "clamp(8rem, 10vw, 10rem)",
            }}
          >
            <ul>
              <li>
                <Link
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("home");
                  }}
                  style={{ fontFamily: "var(--font-varela), cursive" }}
                  className="block py-2 text-white text-sm transition-transform duration-200 transform hover:scale-120"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("about");
                  }}
                  style={{ fontFamily: "var(--font-varela), cursive" }}
                  className="block py-2 text-white text-sm transition-transform duration-200 transform hover:scale-120"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#portofolio"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("portofolio");
                  }}
                  style={{ fontFamily: "var(--font-varela), cursive" }}
                  className="block py-2 text-white text-sm transition-transform duration-200 transform hover:scale-120"
                >
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("contact");
                  }}
                  style={{ fontFamily: "var(--font-varela), cursive" }}
                  className="block py-2 text-white text-sm transition-transform duration-200 transform hover:scale-120"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingLogoWithMenu;
