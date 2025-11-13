/**
 * MUI Theme Configuration for Design System
 */
import { createTheme } from "@mui/material/styles";
import type { Components, Theme } from "@mui/material";
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

/* ------------------ TOKENS ------------------ */
const tokens = {
  radius: {
    medium: 4, // ✅ use 4px as MEDIUM radius
  },
  spacing: 8, // ✅ 1 spacing unit = 8px
};

/* ------------------ BUTTON OVERRIDES ------------------ */
const buttonOverrides: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: "none",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.button.fontSize,
      lineHeight: theme.typography.button.lineHeight,
      fontWeight: theme.typography.button.fontWeight,

      // Button spacing (8px vertical, 12px horizontal)
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
          0 0 0 2px #fff,                  /* white gap fill */
          0 0 0 4px ${theme.palette.focusOutline} /* colored outer ring */
        `,
      },
    }),

    contained: ({ theme }) => ({
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
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

/* ------------------ TEXTFIELD OVERRIDES ------------------ */
const textFieldOverrides: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,

      "& .MuiOutlinedInput-root": {
        backgroundColor: theme.palette.outlinedColors.background,
        minHeight: theme.spacing(4.5),

        "& fieldset": {
          borderRadius: theme.shape.borderRadius,
          borderWidth: 1,
          borderColor: theme.palette.outlinedColors.border,
        },

        "&:hover fieldset": {
          borderColor: theme.palette.outlinedColors.hoverBorder,
        },

        "&:hover": {
          backgroundColor: theme.palette.outlinedColors.hoverBackground,
        },

        // ✅ Input text & placeholder
        "& input": {
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          paddingLeft: theme.spacing(1.5),
          paddingRight: theme.spacing(1.5),
          fontSize: theme.typography.button.fontSize,
          lineHeight: theme.typography.button.lineHeight,
          color: theme.palette.inputColors.text,

          "&::placeholder": {
            color: theme.palette.inputColors.placeholder,
            opacity: 1,
          },

          // ✅ Disabled input colors
          "&.Mui-disabled": {
            color: theme.palette.inputColors.disabledText,
            WebkitTextFillColor: theme.palette.inputColors.disabledText,
            "&::placeholder": {
              WebkitTextFillColor: theme.palette.action.disabled,
              color: theme.palette.action.disabled,
              opacity: 1,
            },
          },
        },

        // ✅ Disabled root
        "&.Mui-disabled": {
          backgroundColor: theme.palette.action.disabledBackground,
          "& fieldset": {
            border: 0,
          },
        },
        "&.Mui-focused": {
          backgroundColor: theme.palette.outlinedColors.background, // subtle tinted background (10% opacity)
          "& fieldset": {
            borderWidth: 1,
            borderColor: theme.palette.outlinedColors.border,
            outline: "none", // remove native outline
            boxShadow: `
          0 0 0 2px #fff,                  /* white gap fill */
          0 0 0 4px ${theme.palette.focusOutline} /* colored outer ring */
        `,
          },
        },

        // ✅ Error state — add background + border color
        "&.Mui-error": {
          backgroundColor: theme.palette.inputColors.error.background, // subtle tinted background (10% opacity)
          "& fieldset": {
            borderColor: theme.palette.inputColors.error.border,
          },
          // Setting the same values for the hover
          "&:hover": {
            backgroundColor: theme.palette.inputColors.error.background,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.inputColors.error.border,
          },
        },
      },
    }),
  },
};

/* ------------------ SHARED THEME OPTIONS ------------------ */
const sharedThemeOptions = {
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    lineHeight: 20,
    button: {
      fontFamily: "Inter, sans-serif",
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500,
      textTransform: "none" as const, // ✅ literal type
    },
  },
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
  palette: {
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
  },
});

/* ------------------ DARK THEME ------------------ */
export const darkTheme = createTheme({
  ...sharedThemeOptions,
  palette: {
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
  },
});
