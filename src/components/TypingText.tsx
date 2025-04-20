"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  eraseSpeed?: number;
  delayBetweenLoop?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 150,
  eraseSpeed = 70,
  delayBetweenLoop = 2000,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, index - 1));
        setIndex((prev) => prev - 1);
      }, eraseSpeed);
    } else if (index === text.length && !isDeleting) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenLoop);
    } else if (index === 0 && isDeleting) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, eraseSpeed, delayBetweenLoop]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
      {displayText}
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800 animate-blink">_</span>
    </span>
  );
};

export default TypingText;
