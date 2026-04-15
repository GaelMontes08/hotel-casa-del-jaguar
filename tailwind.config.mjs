/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm antique gold — luxury accent
        jaguar: {
          50:  '#faf8f0',
          100: '#f2e8c8',
          200: '#e4ce91',
          300: '#d2ae58',
          400: '#c09035',
          500: '#a57728',
          600: '#895f1f',
          700: '#6d4b1a',
          800: '#593d18',
          900: '#4a3217',
          950: '#281b0c',
        },
        // Deep calm forest — sophisticated structure
        jungle: {
          50:  '#f1f5f1',
          100: '#dee8dc',
          200: '#bed1ba',
          300: '#93b08d',
          400: '#63885b',
          500: '#466940',
          600: '#345230',
          700: '#294127',
          800: '#213421',
          900: '#1b2c1b',
          950: '#0d160d',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
