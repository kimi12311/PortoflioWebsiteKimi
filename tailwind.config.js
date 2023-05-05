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
      keyframes: {
        slideUp:
        {
          from: {transform: "translateY(100%)"},
          to: {transform: "translateY(0%)"}
        }
      },
      animation: {
        slideUpCubic:"slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)"
      }
    },
  },
  plugins: [],
}
