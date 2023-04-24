/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [{
      mytheme: {
        "primary-100":"#F7D488",
        "primary":"#d7b66c",
        "primary-300":"#90742d",
        "accent-100":"#F7A541",
        "accent-200":"#8a4a00",
        "text-100":"#FFFFFF",
        "text-200":"#e0e0e0",
        "bg-100":"#0F1626",
        "base-100":"#1e2436",
        "base-200":"#363c4e",   
      }
    },
  ],
  },
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "business",
  }

// --primary-100:#F7D488;
// --primary-200:#d7b66c;
// --primary-300:#90742d;
// --accent-100:#F7A541;
// --accent-200:#8a4a00;
// --text-100:#FFFFFF;
// --text-200:#e0e0e0;
// --bg-100:#0F1626;
// --bg-200:#1e2436;
// --bg-300:#363c4e;
  