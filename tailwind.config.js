/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060606",
        surface: "#12100F",
        bone: "#D7CEC2",
        mist: "#9C9690",
        brown: "#503A30",
        accent: "#8F4E35",
        white: "#F5F1EB",
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        plate: '0.22em',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
      },
      boxShadow: {
        card: '0 8px 40px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
