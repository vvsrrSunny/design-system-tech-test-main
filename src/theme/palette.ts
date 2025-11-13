// src/theme/palette.ts
import { type PaletteOptions } from "@mui/material";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#078480",
    dark: "#00524F",
    contrastText: "#fff",
  },
  secondary: {
    main: "#505558",
    dark: "#35383B",
    contrastText: "#fff",
  },
  error: {
    main: "#D63443",
    dark: "#5F030C",
    contrastText: "#fff",
  },
  action: {
    disabledBackground: "#F2F4F5",
    disabled: "#8D949A",
  },
  outlinedColors: {
    background: "#FBFBFC",
    border: "#DBDEE1",
    hoverBackground: "#E8EAEC",
    hoverBorder: "#ADB2B7",
  },
  focusOutline: "#3ABCB7",
  inputColors: {
    text: "#151617",
    disabledText: "#505558",
    placeholder: "#6B7076",
    error: {
      background: "#FFF0F1",
      border: "#E4626F",
    },
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#70D2C8",
    dark: "#ABE3DD",
    contrastText: "#000",
  },
  secondary: {
    main: "#EDEEFC",
    dark: "#F4F4FF",
    contrastText: "#000",
  },
  error: {
    main: "#F28F99",
    dark: "#FFDBDF",
    contrastText: "#000",
  },
  action: {
    disabledBackground: "#41424D",
    disabled: "#9D9EAB",
  },
  outlinedColors: {
    background: "#20212B",
    border: "#747581",
    hoverBackground: "#41424D",
    hoverBorder: "#9D9EAB",
  },
  focusOutline: "#70D2C8",
  inputColors: {
    text: "#F9F9FF",
    disabledText: "#DFE0EE",
    placeholder: "#BCBDCA",
    error: {
      background: "#20212B",
      border: "#F28F99",
    },
  },
};
