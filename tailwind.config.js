/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      width: {
        '15': '3.75rem',
        '25': '6.25rem',
        '38': '9.5rem',
        '50': '12.5rem',
        '75': '18.75rem',
      },
      height: {
        '15': '3.75rem',
        '25': '6.25rem',
        '38': '9.5rem',
        '50': '12.5rem',
        '75': '18.75rem',
      },
      animation: {
        'float-simple': 'floatSimple 6s ease-in-out infinite',
        'slide-in': 'slideIn 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'particle-float': 'particleFloat 20s infinite linear',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        floatSimple: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100px) scale(1)', opacity: '0' },
        },
        spin: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        'md': '12px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
}
