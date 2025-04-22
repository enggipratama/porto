"use client";
import Image from "next/image";
import Link from "next/link";
import Dates from "./Time";

export default function Navbar() {
  return (
    <nav className="z-50 w-full shadow p-2">
      <div className="flex items-center justify-between flex-col sm:flex-row sm:items-center gap-2 mx-8">
        {/* Tanggal dan Jam */}
        <div className="flex items-center sm:items-start sm:flex-row sm:gap-2 gap-1 text-sm text-gray-800 dark:text-gray-200 font-semibold">
          <Dates showDate />
          <span className="text-gray-900">-</span>
          <Dates showTime />
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-3 mt-2 sm:mt-0">
          {[
            {
              href: "https://instagram.com/enggiipratama",
              src: "/content/instagram.svg",
              alt: "Instagram",
            },
            {
              href: "https://www.linkedin.com/in/enggipratama/",
              src: "/content/linkedin.svg",
              alt: "Linkedin",
            },
            {
              href: "https://github.com/enggipratama",
              src: "/content/github.svg",
              alt: "Github",
            },
            {
              href: "https://discord.com/users/903595911840677889",
              src: "/content/discord.png",
              alt: "Discord",
            },
          ].map(({ href, src, alt }) => (
            <Link
              key={alt}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={25}
                height={25}
                src={src}
                alt={alt}
                className="transition-transform duration-200 hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
