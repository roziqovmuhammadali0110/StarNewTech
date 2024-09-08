/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Kichik ekran (320px)
        sm: "640px", // Standart kichik ekran (640px)
        md: "768px", // O'rta ekran (768px)
        lg: "1024px", // Katta ekran (1024px)
        xl: "1280px", // X-Large ekran (1280px)
        "1.5xl": "1440px", // Oraliq katta ekran (1440px)
        "2xl": "1600px" // Eng katta ekran (1600px)
      }
    }
  },
  plugins: []
};
