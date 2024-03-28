import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:
      {
        primary: '#4640DE',
        secondary: '#25324B',
        third:'#202430'

        
        
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        epilogue: ['var(--font-epilogue)'],
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
 

    },
  },
  plugins: [],
};
export default config;
