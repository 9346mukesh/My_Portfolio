/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Console abyss — deep blue-black ground
        abyss: "#0B0F15",
        "abyss-hi": "#10161F",
        // Primary ink — warm bone, glowing on dark
        bone: "#E9E6DF",
        // Secondary text — cool mist
        mist: "#9AA4B0",
        // Recorded data — dark-adapted Prussian blue
        prussian: "#5B8FBC",
        "prussian-deep": "#2C4763",
        // Points of intensity — dark-adapted iron brown
        iron: "#B27A4F",
      },
      fontFamily: {
        display: ['Italiana', 'serif'],
        sans: ['"Crimson Pro"', 'Georgia', 'serif'],
        mono: ['Jura', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        plate: "0.22em",
      },
      boxShadow: {
        glass: "0 8px 40px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        "glass-lg": "0 20px 70px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
