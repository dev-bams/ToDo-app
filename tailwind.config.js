/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        "dark-primary-bg": "#11100f", // Your custom color for dark primary background
        "dark-secondary-bg": "#252423", // Your custom color for dark secondary background
        "dark-todo-hover": "#3b3a39", // Your custom color for todo hover
        "dark-nav-color": "#1B1A19",
        "dark-line-color": "#484644"
      },
    },
  },
  plugins: [],
};
