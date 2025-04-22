"use client";
import React, { useEffect, useState } from "react";

interface DateTimeProps {
  showDate?: boolean;
  showTime?: boolean;
}

export default function DateTime({
  showDate = false,
  showTime = false,
}: DateTimeProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!now) return null;

  const dateString = now.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <div className="flex flex-wrap items-center text-gray-800 font-bold text-l">
      {showDate && <span>{dateString}</span>}
      {showTime && <span className="sm:ml-auto">{timeString}</span>}
    </div>
  );
}
