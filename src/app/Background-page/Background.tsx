"use client";
import Image from "next/image";
export default function Background() {
  return (
    <div className="fixed inset-0 bg-cover bg-fixed overflow-hidden">
      <Image
        width={1920}
        height={0}
        src="/content/space.gif"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />

      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-transparent opacity-40 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-400 to-transparent opacity-20 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}
