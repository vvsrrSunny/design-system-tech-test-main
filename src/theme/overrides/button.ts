import type { Components, Theme } from "@mui/material";

/* ------------------ BUTTON OVERRIDES ------------------ */
export const buttonOverrides: Components<Theme>["MuiButton"] = {
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
      height: theme.spacing(4.5),
      // Button spacing (8px vertical, 12px horizontal)
      padding: `${theme.spacing(1)} ${theme.spacing(1.5)}`,
      borderRadius: theme.shape.borderRadius,

      "&.Mui-disabled": {
        backgroundColor: theme.palette.action.disabledBackground,
        color: theme.palette.action.disabled,
        borderColor: theme.palette.action.disabledBackground,
      },

      "&:focus": {
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
  },
};
