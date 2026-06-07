/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mango: "#FFC72C",
        orchard: "#2E7D32",
        leaf: "#47A447",
        cream: "#FFF8E7",
        soil: "#6B4E2E",
        ink: "#173322"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(23, 51, 34, 0.18)",
        glow: "0 18px 50px rgba(255, 199, 44, 0.28)"
      },
      backgroundImage: {
        "orchard-gradient": "linear-gradient(135deg, #173322 0%, #2E7D32 52%, #FFC72C 140%)",
        "mango-gradient": "linear-gradient(135deg, #FFC72C 0%, #FF8A00 100%)"
      }
    }
  },
  plugins: []
};
