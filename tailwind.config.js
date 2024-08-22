/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'st': '1440px', // Custom breakpoint
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: "#DAAA64",
        searchBar: "#EBE7E1",
        background:"#F8F3ED",
        textColor: {
          primary: "#2C1810",
          secondary: "#9F948D"
        },
        discriptionPanel:"#FEFBF4"
      }
      
    },

    fontFamily: {
      KopubWorldBold: ['KopubWorldBold'], 
      KopubWorldMedium: ['KopubWorldMedium'],
      NotoSansKRBold: ['NotoSansKRBold'],
      NotoSansKRSemiBold: ['NotoSansKRSemiBold'],
      NotoSansKRMedium: ['NotoSansKRMedium'],
      NotoSansKRRegular: ['NotoSansKRRegular'],
      MontserratSemiBold: ['MontserratMedium'],
      MontserratSemiBold: ['MontserratSemiBold']
    },
  },
  plugins: [],
};

