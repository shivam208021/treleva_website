export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
      },
      spacing: {
        "padding-small": "var(--padding-small)",
        "padding-medium": "var(--padding-medium)",
        "padding-large": "var(--padding-large)",
        "padding-xlarge": "var(--padding-xlarge)",
        "margin-small": "var(--margin-small)",
        "margin-medium": "var(--margin-medium)",
        "margin-large": "var(--margin-large)",
        "margin-xlarge": "var(--margin-xlarge)",
      },
      maxWidth: {
        1200: "1200px",
      },
      borderRadius: {
        default: "8px",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
      },
    },
  },
  plugins: [],
};
