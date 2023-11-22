const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
 
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'xs': '580px',         // Pequeñas pantallas, como teléfonos móviles
        'md': '768px',         // Medianas pantallas, como tabletas
        'lg': '1024px',        // Pantallas grandes, como laptops
        'xl': '1280px',        // Pantallas extra grandes, como monitores de escritorio
        '2xl': '1536px',       // Pantallas aún más grandes
      },
    },
    extend: {
      screens:{
        'xs': "360px" 
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // backgroundImage:{
      //   'fondo':'url(../public/fondo2.jpg)'
      // }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
