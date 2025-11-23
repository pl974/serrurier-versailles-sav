/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f2',
          100: '#fde6e4',
          200: '#fbd0cd',
          300: '#f7afa9',
          400: '#f08076',
          500: '#e5574b',
          600: '#d13b2d',
          700: '#b02f23',
          800: '#922a21',
          900: '#792822',
          950: '#42120d',
        },
        secondary: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0bac9',
          400: '#8695ab',
          500: '#667791',
          600: '#515f77',
          700: '#424d61',
          800: '#394252',
          900: '#333946',
          950: '#22262e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
