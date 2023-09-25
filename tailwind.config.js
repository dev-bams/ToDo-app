/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        "dark-primary-bg": "#11100f",       // Your custom color for dark primary background
        "dark-secondary-bg": "#323130",     // Your custom color for dark secondary background
        "todo-hover": "#3b3a39",           // Your custom color for todo hover
        "accent": "#6797ca",               // Your custom accent color
        // ... Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
