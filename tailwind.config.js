/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        border: "var(--border-color)",
        label: "var(--label-color)",
        warning: "var(--warning-color)",
      },
      borderRadius: {
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--primary-color)",
            maxWidth: "65ch",
          },
        },
      },
    },
    textStyles: {
      label: {
        fontFamily: "Inter, sans-serif",
        fontSize: "var(--font-size-sm)",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--label-color)",
      },
      heading: {
        h1: {
          fontFamily: "Inter, sans-serif",
          fontSize: "var(--font-size-xl)",
          fontWeight: "700",
          lineHeight: "1.2",
          color: "var(--primary-color)",
        },
        h2: {
          fontFamily: "Inter, sans-serif",
          fontSize: "var(--font-size-lg)",
          fontWeight: "600",
          lineHeight: "1.3",
          color: "var(--primary-color)",
        },
        h3: {
          fontFamily: "Inter, sans-serif",
          fontSize: "var(--font-size-md)",
          fontWeight: "600",
          lineHeight: "1.4",
          color: "var(--primary-color)",
        },
      },
      body: {
        regular: {
          fontFamily: "Inter, sans-serif",
          fontSize: "var(--font-size-md)",
          fontWeight: "400",
          lineHeight: "1.5",
          color: "var(--primary-color)",
        },
        small: {
          fontFamily: "Inter, sans-serif",
          fontSize: "var(--font-size-sm)",
          fontWeight: "400",
          lineHeight: "1.5",
          color: "var(--secondary-color)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
