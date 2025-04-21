"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-50 w-full shadow">
      <div className="flex space-x-2 mx-4 mt-2 mb-2 items-center justify-center">
        <Link
          href="https://instagram.com/enggiipratama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={25}
            height={25}
            src="/content/instagram.svg"
            alt="Instagram"
            className="transition-transform duration-200 hover:scale-110"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/enggipratama/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={25}
            height={25}
            src="/content/linkedin.svg"
            alt="Linkedin"
            className="transition-transform duration-200 hover:scale-110"
          />
        </Link>
        <Link
          href="https://github.com/enggipratama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={25}
            height={25}
            src="/content/github.svg"
            alt="Github"
            className="transition-transform duration-200 hover:scale-110"
          />
        </Link>
        <Link
          href="https://discord.com/users/903595911840677889"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={25}
            height={25}
            src="/content/discord.png"
            alt="Discord"
            className="transition-transform duration-200 hover:scale-110"
          />
        </Link>
      </div>
    </nav>
  );
}
