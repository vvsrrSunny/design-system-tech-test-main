import type { Components, Theme } from "@mui/material";

/* ------------------ BUTTON OVERRIDES ------------------ */
export const buttonOverrides: Components<Theme>["MuiButton"] = {
  // Disable box-shadow on all buttons
  defaultProps: {
    disableElevation: true,
  },

  styleOverrides: {
    /* ---------- BASE ROOT STYLING ---------- */
    root: ({ theme }) => ({
      textTransform: "none", // No uppercase transformation
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.button.fontSize,
      lineHeight: theme.typography.button.lineHeight,
      fontWeight: theme.typography.button.fontWeight,

      height: theme.spacing(4.5), // ~36px height for medium button
      minWidth: "auto",

      // Default padding: 8px vertical, 12px horizontal
      padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,

      borderRadius: theme.shape.borderRadius,

      /* Disabled state */
      "&.Mui-disabled": {
        backgroundColor: theme.palette.action.disabledBackground,
        color: theme.palette.action.disabled,
        borderColor: theme.palette.action.disabledBackground,
      },

      /* Focus ring (white gap + colored outline) */
      "&:focus": {
        outline: "none",
        boxShadow: `
          0 0 0 2px #fff,                  
          0 0 0 4px ${theme.palette.focusOutline}
        `,
      },
    }),

    /* ---------- CONTAINED BUTTONS ---------- */
    contained: ({ theme }) => ({
      // Default hover for contained buttons
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },

      // Primary specific hover override
      "&.MuiButton-containedPrimary:hover": {
        backgroundColor: theme.palette.primary.dark,
      },

      // Secondary specific hover override
      "&.MuiButton-containedSecondary:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },

      // Error variant hover override
      "&.MuiButton-containedError:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    }),

    /* ---------- OUTLINED BUTTONS ---------- */
    outlined: ({ theme }) => ({
      boxSizing: "border-box",
      borderWidth: "1px",
      borderStyle: "solid",
      border: `1px solid ${theme.palette.outlinedColors.border}`,
      backgroundColor: theme.palette.outlinedColors.background,

      "&:hover": {
        backgroundColor: theme.palette.outlinedColors.hoverBackground,
        border: `1px solid ${theme.palette.outlinedColors.hoverBorder}`,
      },
    }),

    /* ---------- SIZE: SMALL ---------- */
    sizeSmall: ({ theme }) => ({
      height: theme.spacing(3.5), // ~28px
      padding: `${theme.spacing(0.5)} ${theme.spacing(1.25)}`, // 4px 10px
      fontSize: theme.typography.pxToRem(12),
    }),

    /* ---------- SIZE: MEDIUM ---------- */
    sizeMedium: ({ theme }) => ({
      height: theme.spacing(4.5), // ~36px
      padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`, // 8px 12px
      fontSize: theme.typography.pxToRem(14),
    }),

    /* ---------- SIZE: LARGE ---------- */
    sizeLarge: ({ theme }) => ({
      height: theme.spacing(5.5), // ~44px
      padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`, // 12px 16px
      fontSize: theme.typography.pxToRem(16),
    }),
  },
};
