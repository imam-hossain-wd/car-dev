/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px"
    },
    extend: {
      colors: {
        neavyBlue:"#2E375F",
        neavyBlueHover:"#101428",
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',      
        whiteColor: '#fff',
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: '#000',
        darkColorLight: "#171717",
      },
    },
  },


  // plugins: [require("daisyui")],

  
}

