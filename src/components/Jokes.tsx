import React from "react";

interface JokeCardProps {
  joke?: string;
  loading: boolean;
  error: string | null;
}

const JokeCard: React.FC<JokeCardProps> = ({ joke, loading, error }) => {
  return (
    <div
      className="
    w-60
    sm:w-80
    md:w-96
    lg:w-[28rem]
    max-w-full
    bg-gradient-to-r from-purple-900 to-indigo-900
    shadow-md rounded-lg
    p-4 sm:p-6
    flex items-center justify-center
    min-h-[10rem] sm:min-h-[10rem] md:min-h-[10rem]
    transition-all ease-in-out duration-200
  "
    >
      {loading ? (
        <p className="text-gray-700 dark:text-gray-300 text-center break-words">
          Loading...
        </p>
      ) : error ? (
        <p className="text-red-500 text-center break-words">{error}</p>
      ) : (
        <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center break-words overflow-hidden whitespace-normal">
          {joke}
        </p>
      )}
    </div>
  );
};

export default JokeCard;
