// tailwind.config.js
import lineClamp from '@tailwindcss/line-clamp';

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};

export default config;