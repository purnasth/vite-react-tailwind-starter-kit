/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        light: '#f5f5f5',
      },
      fontFamily: {
        title: ['"Purna Title"', 'Georgia', 'Cambria', 'serif'],
        body: ['"Purna Body"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        inherit: 'inherit',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
    },
  },
  plugins: [],
};
