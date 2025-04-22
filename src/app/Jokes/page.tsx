"use client";
import React, { useEffect, useState } from "react";
import JokeCard from "@/components/Jokes";

function isError(err: unknown): err is Error {
  return typeof err === "object" && err !== null && "message" in err;
}

const HomePage: React.FC = () => {
  const [joke, setJoke] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://candaan-api.vercel.app/api/text/random");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const json = (await res.json()) as { status: number; data: string };
      setJoke(json.data);
    } catch (err: unknown) {
      if (isError(err)) setError(err.message);
      else setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-full flex justify-center">
        <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800">
          Random Jokes_
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <JokeCard joke={joke} loading={loading} error={error} />
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={fetchJoke}
          className="inline-flex mt-2 mb-10 items-center px-6 py-3 bg-gradient-to-r from-blue-900 via-purple-700 to-pink-800 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Get New Joke
        </button>
      </div>
    </div>
  );
};

export default HomePage;
