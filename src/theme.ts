/**
 * MUI Theme Configuration for Design System
 */
import { createTheme } from "@mui/material/styles";
import type { Components, Theme } from "@mui/material";
// import "@fontsource/inter";

declare module "@mui/material/styles" {
  interface Palette {
    outlinedColors: {
      background: string;
      border: string;
      hoverBackground: string;
      hoverBorder: string;
    };
    focusOutline: string;
  }

  interface PaletteOptions {
    outlinedColors?: {
      background: string;
      border: string;
      hoverBackground: string;
      hoverBorder: string;
    };
    focusOutline?: string;
  }
}

// ✅ Shared tokens
const tokens = {
  radius: {
    medium: 4, // ✅ use 4px as MEDIUM radius
  },
  spacing: 8, // ✅ 1 spacing unit = 8px
};

/**
 * ✅ Button overrides (fully typed)
 */
const buttonOverrides: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "none",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: `${theme.spacing(2.5)}`,

      // button spacing  (8px vertical, 12px horizontal)
      padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,

      borderRadius: theme.shape.borderRadius,
      "&.Mui-disabled": {
        backgroundColor: theme.palette.action.disabledBackground,
        color: theme.palette.action.disabled,
        borderColor: theme.palette.action.disabledBackground,
      },
      "&:focus-visible": {
        outline: "none", // remove native outline
        boxShadow: `
          0 0 0 2px #fff,                  /*  white gap fill */
          0 0 0 4px ${theme.palette.focusOutline} /* colored outer ring */
        `,
      },
    }),
    // ✅ CONTAINED BUTTON HOVER
    contained: ({ theme }) => ({
      "&:hover": {
        backgroundColor: theme.palette.primary.dark, // will be overridden per color
      },
      // 🧠 dynamic hover based on color prop
      "&.MuiButton-containedPrimary:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
      "&.MuiButton-containedSecondary:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
      "&.MuiButton-containedError:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    }),
    outlined: ({ theme }) => ({
      borderWidth: "1px",
      borderStyle: "solid",
      border: `1px solid ${theme.palette.outlinedColors.border}`,
      backgroundColor: theme.palette.outlinedColors.background,
      "&:hover": {
        backgroundColor: theme.palette.outlinedColors.hoverBackground,
        border: `1px solid ${theme.palette.outlinedColors.hoverBorder}`,
      },
    }),
  },
};

const sharedThemeOptions = {
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  shape: {
    borderRadius: tokens.radius.medium,
  },
  spacing: tokens.spacing,
  components: {
    MuiButton: buttonOverrides,
  },
};

/** ✅ Light theme */
export const lightTheme = createTheme({
  ...sharedThemeOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#078480", // your primary color
      dark: "#00524F",
      contrastText: "#fff", // text color on primary background
    },
    secondary: {
      main: "#505558", // your secondary color
      dark: "#35383B",
      contrastText: "#fff",
    },
    error: {
      main: "#D63443", // your error color
      dark: "#5F030C",
      contrastText: "#fff",
    },
    action: {
      disabledBackground: "#F2F4F5",
      disabled: "#8D949A", // text color
    },
    outlinedColors: {
      background: "#FBFBFC",
      border: "#DBDEE1",
      hoverBackground: "#E8EAEC",
      hoverBorder: "#ADB2B7",
    },
    focusOutline: "#3ABCB7",
  },
  typography: {
    button: {
      textTransform: "none", // optional - remove ALL CAPS on buttons
    },
  },
});

/** ✅ Dark theme */
export const darkTheme = createTheme({
  ...sharedThemeOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#70D2C8", // your primary color
      dark: "#ABE3DD",
      contrastText: "#000", // text color on primary background
    },
    secondary: {
      main: "#EDEEFC", // your secondary color
      dark: "#F4F4FF",
      contrastText: "#000",
    },
    error: {
      main: "#F28F99", // your error color
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
  },
  typography: {
    button: {
      textTransform: "none", // optional - remove ALL CAPS on buttons
    },
  },
});
