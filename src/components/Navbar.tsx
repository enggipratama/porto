"use client";
import Image from "next/image";

//! TODO
//**Hamburger Bar with Theme space or Moon */

export default function Navbar() {
  return (
    <nav className="z-50 w-full  shadow">
      <div className="flex space-x-2 mx-4 mt-2 mb-2">
        <a
          href="https://instagram.com/enggiipratama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={30}
            height={30}
            src="/content/instagram.svg"
            alt="Instagram"
            className="transition-transform duration-200 hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/enggipratama/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={30}
            height={30}
            src="/content/linkedin.svg"
            alt="Linkedin"
            className="transition-transform duration-200 hover:scale-110"
          />
        </a>
        <a
          href="https://github.com/enggipratama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={30}
            height={30}
            src="/content/github.svg"
            alt="Github"
            className="transition-transform duration-200 hover:scale-110"
          />
        </a>
      </div>
    </nav>
  );
}
