/**
 * MUI Theme Configuration for Design System
 */
import { createTheme } from "@mui/material/styles";
import { tokens, typography } from "./tokens";
import {
  inputLabelOverrides,
  textFieldOverrides,
} from "./overrides/textfield";
import { buttonOverrides } from "./overrides/button";
import { darkPalette, lightPalette } from "./palette";
import "@fontsource/inter";

/* ------------------ SHARED THEME OPTIONS ------------------ */
const sharedThemeOptions = {
  typography,
  shape: {
    borderRadius: tokens.radius.medium,
  },
  spacing: tokens.spacing,
  components: {
    MuiCssBaseline: {},
    MuiButton: buttonOverrides,
    MuiTextField: textFieldOverrides,
    MuiInputLabel: inputLabelOverrides,
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
