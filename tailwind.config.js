/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "system-ui", "sans-serif"],
        display: ["Creepster", "Georgia", "serif"],
        displayAlt: ["Denk One", "Georgia", "serif"],
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        ["slide-in"]: "slideIn .4s ease-in-out forwards",
        ["fade-in"]: "fadeIn .4s ease-in-out forwards",
      },
      colors: {
        verde: {
          200: "#9EC75F",
          300: "#7FAF4B",
          400: "#4A773C",
          600: "#2D4C29",
          700: "#1E3B1B",
          800: "#16281F",
          900: "#0A1A0E",
          950: "#020803",
          1000: "#030504",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      function animationDelay() {
        const delays = {};
        for (let i = 0; i <= 12; i++) {
          delays[`.animate-${i}`] = {
            "animation-delay": `${i * 100}ms`,
          };
        }
        return delays;
      }

      addUtilities(animationDelay());
    }),
  ],
};
