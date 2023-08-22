/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
  },
    extend: {
      colors: {
          primary: {
              DEFAULT: {
          100: "#d9dffc",
          200: "#b4c0f8",
          300: "#8ea0f5",
          400: "#6981f1",
          500: "#4361ee",
          600: "#364ebe",
          700: "#283a8f",
          800: "#1b275f",
          900: "#0d1330"
          },
              light: {
          100: "#fbfcff",
          200: "#f7f9ff",
          300: "#f2f7ff",
          400: "#eef4ff",
          500: "#eaf1ff",
          600: "#bbc1cc",
          700: "#8c9199",
          800: "#5e6066",
          900: "#2f3033"
          },
              'dark-light': 'rgba(67,97,238,.15)',
          },
          secondary: {
              DEFAULT:{
          100: "#e6dff4",
          200: "#ccbeea",
          300: "#b39edf",
          400: "#997dd5",
          500: "#805dca",
          600: "#664aa2",
          700: "#4d3879",
          800: "#332551",
          900: "#1a1328"
          },
              light:{
          100: "#fbfafd",
          200: "#f7f4fc",
          300: "#f3effa",
          400: "#efe9f9",
          500: "#ebe4f7",
          600: "#bcb6c6",
          700: "#8d8994",
          800: "#5e5b63",
          900: "#2f2e31"
          },
              'dark-light': 'rgb(128 93 202 / 15%)',
          },
          success: {
              DEFAULT: {
          100: "#cceedd",
          200: "#99ddbb",
          300: "#66cd99",
          400: "#33bc77",
          500: "#00ab55",
          600: "#008944",
          700: "#006733",
          800: "#004422",
          900: "#002211"
          },
              light:{
          100: "#f8fdfc",
          200: "#f1fbf9",
          300: "#ebf9f6",
          400: "#e4f7f3",
          500: "#ddf5f0",
          600: "#b1c4c0",
          700: "#859390",
          800: "#586260",
          900: "#2c3130"
          },
              'dark-light': 'rgba(0,171,85,.15)',
          },
          danger: {
              DEFAULT: {
          100: "#fadcde",
          200: "#f5b9bd",
          300: "#f1979c",
          400: "#ec747b",
          500: "#e7515a",
          600: "#b94148",
          700: "#8b3136",
          800: "#5c2024",
          900: "#2e1012"
          },
              light: {
          100: "#fffdfd",
          200: "#fffbfb",
          300: "#fff9f9",
          400: "#fff7f7",
          500: "#fff5f5",
          600: "#ccc4c4",
          700: "#999393",
          800: "#666262",
          900: "#333131"
          },
              'dark-light': 'rgba(231,81,90,.15)',
          },
          warning: {
              DEFAULT: {
          100: "#f9ecd9",
          200: "#f3d9b2",
          300: "#eec68c",
          400: "#e8b365",
          500: "#e2a03f",
          600: "#b58032",
          700: "#886026",
          800: "#5a4019",
          900: "#2d200d"
          },
              light:{
          100: "#fffefb",
          200: "#fffdf8",
          300: "#fffbf4",
          400: "#fffaf1",
          500: "#fff9ed",
          600: "#ccc7be",
          700: "#99958e",
          800: "#66645f",
          900: "#33322f"
          },
              'dark-light': 'rgba(226,160,63,.15)',
          },
          info: {
              DEFAULT:{
          100: "#d3eafd",
          200: "#a6d5fa",
          300: "#7ac0f8",
          400: "#4dabf5",
          500: "#2196f3",
          600: "#1a78c2",
          700: "#145a92",
          800: "#0d3c61",
          900: "#071e31"
          },
              light: {
          100: "#fafdff",
          200: "#f5fcff",
          300: "#f1faff",
          400: "#ecf9ff",
          500: "#e7f7ff",
          600: "#b9c6cc",
          700: "#8b9499",
          800: "#5c6366",
          900: "#2e3133"
          },
              'dark-light': 'rgba(33,150,243,.15)',
          },
          dark: {
              DEFAULT: {
          100: "#d8d9de",
          200: "#b1b2be",
          300: "#898c9d",
          400: "#62657d",
          500: "#3b3f5c",
          600: "#2f324a",
          700: "#232637",
          800: "#181925",
          900: "#0c0d12"
          },
              light: {
          100: "#fbfbfb",
          200: "#f7f7f7",
          300: "#f2f2f4",
          400: "#eeeef0",
          500: "#eaeaec",
          600: "#bbbbbd",
          700: "#8c8c8e",
          800: "#5e5e5e",
          900: "#2f2f2f"
          },
              'dark-light': 'rgba(59,63,92,.15)',
          },
          black: {
              DEFAULT: {
          100: "#cfd1d4",
          200: "#9fa2a8",
          300: "#6e747d",
          400: "#3e4551",
          500: "#0e1726",
          600: "#0b121e",
          700: "#080e17",
          800: "#06090f",
          900: "#030508"
          },
              light:  {
          100: "#f9fafb",
          200: "#f4f4f7",
          300: "#eeeff3",
          400: "#e9e9ef",
          500: "#e3e4eb",
          600: "#b6b6bc",
          700: "#88898d",
          800: "#5b5b5e",
          900: "#2d2e2f"
          },
              'dark-light': 'rgba(14,23,38,.15)',
          },
          white: {
              DEFAULT: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333"
          },
              light: {
          100: "#f9fafb",
          200: "#f3f5f8",
          300: "#ecf0f4",
          400: "#e6ebf1",
          500: "#e0e6ed",
          600: "#b3b8be",
          700: "#868a8e",
          800: "#5a5c5f",
          900: "#2d2e2f"
          },
              dark: {
          100: "#e7e8ee",
          200: "#cfd2dc",
          300: "#b8bbcb",
          400: "#a0a5b9",
          500: "#888ea8",
          600: "#6d7286",
          700: "#525565",
          800: "#363943",
          900: "#1b1c22"
          },
          },
      },
      fontFamily: {
          nunito: ['Nunito', 'sans-serif'],
      },
      spacing: {
          4.5: '18px',
      },
      boxShadow: {
          '3xl': '0 2px 2px rgb(224 230 237 / 46%), 1px 6px 7px rgb(224 230 237 / 46%)',
      },
      typography: ({ theme }) => ({
          DEFAULT: {
              css: {
                  '--tw-prose-invert-headings': theme('colors.white.dark'),
                  '--tw-prose-invert-links': theme('colors.white.dark'),
                  h1: { fontSize: '40px', marginBottom: '0.5rem', marginTop: 0 },
                  h2: { fontSize: '32px', marginBottom: '0.5rem', marginTop: 0 },
                  h3: { fontSize: '28px', marginBottom: '0.5rem', marginTop: 0 },
                  h4: { fontSize: '24px', marginBottom: '0.5rem', marginTop: 0 },
                  h5: { fontSize: '20px', marginBottom: '0.5rem', marginTop: 0 },
                  h6: { fontSize: '16px', marginBottom: '0.5rem', marginTop: 0 },
                  p: { marginBottom: '0.5rem' },
                  li: { margin: 0 },
                  img: { margin: 0 },
              },
          },
      }),
  },
  },
  plugins: [
    require('@tailwindcss/forms')({
        strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
],
}
