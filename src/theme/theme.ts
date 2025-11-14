/**
 * MUI Theme Configuration for Design System
 */
import { createTheme } from "@mui/material/styles";
import { tokens, typography } from "./tokens";
import { textFieldOverrides } from "./overrides/textfield";
import { buttonOverrides } from "./overrides/button";
import { darkPalette, lightPalette } from "./palette";
// import "@fontsource/inter";

/* ------------------ PALETTE EXTENSION ------------------ */
declare module "@mui/material/styles" {
  interface Palette {
    outlinedColors: {
      background: string;
      border: string;
      hoverBackground: string;
      hoverBorder: string;
    };
    focusOutline: string;
    inputColors: {
      text: string;
      disabledText: string;
      placeholder: string;
      error: {
        background: string;
        border: string;
      };
    };
  }

  interface PaletteOptions {
    outlinedColors?: {
      background: string;
      border: string;
      hoverBackground: string;
      hoverBorder: string;
    };
    focusOutline?: string;
    inputColors?: {
      text: string;
      disabledText: string;
      placeholder: string;
      error?: {
        background: string;
        border: string;
      };
    };
  }
}

/* ------------------ SHARED THEME OPTIONS ------------------ */
const sharedThemeOptions = {
  typography,
  shape: {
    borderRadius: tokens.radius.medium,
  },
  spacing: tokens.spacing,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          lineHeight: 1.6,
        },
      },
    },
    MuiButton: buttonOverrides,
    MuiTextField: textFieldOverrides,
  },
};

/* ------------------ LIGHT THEME ------------------ */
export const lightTheme = createTheme({
  ...sharedThemeOptions,
  palette: lightPalette,
});

/* ------------------ DARK THEME ------------------ */
export const darkTheme = createTheme({
  ...sharedThemeOptions,
  palette: darkPalette,
});
