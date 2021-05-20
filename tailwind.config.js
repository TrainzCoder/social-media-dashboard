module.exports = {
  purge: {
   enabled:true,
   content: ["./*.html", "./**/*.js"]
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        pattern: "var(--bg-pattern)",
        "card-bg": "var(--background-card)",
        toggle: "var(--toggle)",
        textFirst: "var(--text-first)",
        textSecond: "var(--text-second)",
        facebook: "var(--facebook)",
        twitter: "var(--twitter)",
        instagram: "var(--instagram)",
        youtube: "var(--youtube)",
        limeGreen: "var(--lime-green)",
        brightRed: "var(--bright-red)",
      },
      backgroundImage: theme => ({
        toggle: "var(--toggle)"
      }),
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
