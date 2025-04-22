"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-black rounded mb-10">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
            Social Media
          </h3>
          <ul className="flex justify-center gap-4">
            <li>
              <Link
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
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/enggiipratama"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={33}
                  height={33}
                  src="/content/instagram.svg"
                  alt="Instagram"
                  className="transition-transform duration-200 hover:scale-110"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.com/users/903595911840677889"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={33}
                  height={33}
                  src="/content/discord.png"
                  alt="Discord"
                  className="transition-transform duration-200 hover:scale-110"
                />
              </Link>
            </li>
          </ul>
        </div>

          <div className="text-center">
            <h3 className="text-xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:enggipratama82@gmail.com?subject=Hello&body=Hello! I saw your portfolio and wanted to reach out. Do you have suggestions or would you like to collaborate?"
                  className="text-lg text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-700 hover:to-pink-800"
                >
                  Email: enggipratama82@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/enggipratama/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-900 hover:via-purple-700 hover:to-pink-800"
                >
                  LinkedIn: @enggipratama
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl mb-2 mt-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
            About Me
          </h3>
          <p className="text-sm font-bold text-gray-800">
            I’m a passionate developer focused on creating amazing web
            experiences. Let’s collaborate on your
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800 animate-pulse">
              {" "}
              next project
            </span>
            !
          </p>
        </div>

        <div className="text-center text-lg text-gray-900 p-5 mt-10">
          &copy; {new Date().getFullYear()} Enggipratama. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
