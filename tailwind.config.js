/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5EFE6',
        'background-dark': '#1F1611',
        ink: '#000000',
        muted: '#8B5A2B',
        detail: '#3D5A3D',
        cream: '#F5EFE6',
        sand: '#FBF8F2',
        espresso: '#1F1611',
        'espresso-soft': '#2A1E17',
        brown: '#8B5A2B',
        'brown-light': '#B07B4F',
        green: '#3D5A3D',
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}
