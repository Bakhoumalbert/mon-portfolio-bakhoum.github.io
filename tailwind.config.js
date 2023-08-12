/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      par: ["Inter", "sans-serif"],
      ttl: ["Brygada 1918", "serif"],
      tset :["Josefin Sans", "Lato", "Varela Round", "Varela"]
    }
  },
  plugins: [],
}

