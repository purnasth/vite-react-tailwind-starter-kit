module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "radial-gradient-orange":
          "radial-gradient(circle, rgba(255,217,184,1) 0%, rgba(255,159,82,1) 100%)",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        inria: ['"Inria Serif"', "serif"],
        rambla: ['"Rambla"', "sans-serif"],
        kalnia: ['"Kalnia"', "sans-serif"],
      },
      colors: {
        "custom-blue": "#070a0f",
        "custom-orange": "#DB6332",
        "custom-white": "#F2F3D9",
        dark: {
          DEFAULT: "#1a202c",
        },
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
