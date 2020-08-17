module.exports = {
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      "green-1": "#1bd954",
      "green-2": "#1db954",
      "gray-1": "#b3b3b3",
      "gray-2": "#535353",
      "dark-1": "#282828",
      "dark-2": "#121212",
      "dark-3": "#040404"
    },
    fontSize: {
      xxs: ["11px", "16px"],
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      small: ["15px", "22px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"]
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
