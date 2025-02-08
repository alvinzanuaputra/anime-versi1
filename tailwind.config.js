/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      color: {
      hitam: '#000000',
      blue :'#2B3333',
      primary: '#eeeeee',
      accent: '#39A7FF',
      secondary: '#1e40af',
      dark: '#0F0F0F',
      third : '#191919',
      green : '#65B741',
      }
    }
  },
  plugins: [],
}
