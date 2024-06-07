const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

const config = {
  content: [
    './popup/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': 'hsl(180, 5%, 96%)',
          '100': 'hsl(200, 6%, 90%)',
          '200': 'hsl(204, 5%, 82%)',
          '300': 'hsl(203, 5%, 69%)',
          '400': 'hsl(205, 5%, 53%)',
          '500': 'hsl(203, 5%, 47%)',
          '600': 'hsl(204, 5%, 36%)',
          '700': 'hsl(210, 5%, 31%)',
          '800': 'hsl(210, 4%, 27%)',
          '900': 'hsl(204, 4%, 24%)',
          '950': 'hsl(210, 5%, 15%)',
        },
        secondary: {
          50: "#FEF9EC",
          100: "#FCF1D4",
          200: "#F9E4A9",
          300: "#F6D883",
          400: "#F3CA58",
          500: "#F0BC2D",
          600: "#D6A10F",
          700: "#A27A0C",
          800: "#694F07",
          900: "#342704",
          950: "#1D1502"
        },
      },
      fontFamily: {
        ibm_plex: 'var(--font-ibm-plex-sans)',
      }
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}

export default config;
