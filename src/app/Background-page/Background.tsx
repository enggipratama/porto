"use client";
import Image from "next/image";
export default function Background() {
  return (
    <div className="fixed inset-0 bg-cover bg-fixed overflow-hidden">
      <Image
        width={5774}
        height={4330}
        src="/content/space.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
    </div>
  );
}
