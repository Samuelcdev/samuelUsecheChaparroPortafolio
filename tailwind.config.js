/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        butter: {
          50: "#FFFDF0",
          100: "#FFF7D6",
          200: "#FFF0B8",
          300: "#FFE58B",
          400: "#FFD966",
          500: "#FFC93C"
        },
        ink: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151"
        },
        mint: {
          500: "#74C69D"
        },
        coral: {
          500: "#FF7A59"
        }
      },
      fontFamily: {
        display: ["'Press Start 2P'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        pixel: "4px 4px 0 0 #1F2937",
        pixelLg: "6px 6px 0 0 #1F2937"
      },
      borderRadius: {
        card: "18px"
      }
    }
  },
  plugins: []
};
