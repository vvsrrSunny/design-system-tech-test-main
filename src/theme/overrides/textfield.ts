import type { Components, Theme } from "@mui/material";

/* ------------------ TEXTFIELD OVERRIDES ------------------ */

export const textFieldOverrides: Components<Theme>["MuiTextField"] = {
  // Always shrink the label (static label on top)
  defaultProps: {
    slotProps: { inputLabel: { shrink: true } },
  },

  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,

      /* Outlined Input Root */
      "& .MuiOutlinedInput-root": {
        // Base background for outlined variant
        backgroundColor: theme.palette.outlinedColors.background,
        minHeight: theme.spacing(4.5),

        /* Default Outline */
        "& fieldset": {
          borderRadius: theme.shape.borderRadius,
          borderWidth: 1,
          borderColor: theme.palette.outlinedColors.border,
        },

        /* Hover Outline + Hover Background */
        "&:hover fieldset": {
          borderColor: theme.palette.outlinedColors.hoverBorder,
        },
        "&:hover": {
          backgroundColor: theme.palette.outlinedColors.hoverBackground,
        },

        /* Remove MUI notch entirely */
        "& .MuiOutlinedInput-notchedOutline": {
          top: 0,
          "& legend": {
            display: "none",
          },
        },

        /* Input Text + Placeholder */
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
            opacity: 1, // Always show placeholder
          },

          /* Disabled Input Text */
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

        /* Disabled Field Wrapper */
        "&.Mui-disabled": {
          backgroundColor: theme.palette.action.disabledBackground,
          "& fieldset": {
            border: 0, // remove border entirely
          },
        },

        /* Focus Ring (white gap + colored outline) */
        "&.Mui-focused": {
          backgroundColor: theme.palette.outlinedColors.background,
          "& fieldset": {
            borderWidth: 1,
            borderColor: theme.palette.outlinedColors.border,
            outline: "none",
            boxShadow: `
              0 0 0 2px #fff,
              0 0 0 4px ${theme.palette.focusOutline}
            `,
          },
        },

        /* Error State Background + Border */
        "&.Mui-error": {
          backgroundColor: theme.palette.inputColors.error.background,
          "& fieldset": {
            borderColor: theme.palette.inputColors.error.border,
          },
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

/* ------------------ TEXTFIELD LABEL OVERRIDES ------------------ */

export const inputLabelOverrides: Components<Theme>["MuiInputLabel"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // Static label — no floating animation
      position: "static",
      transform: "none",

      // Always black label
      color: theme.palette.text.primary,

      // Left-align the label container
      alignSelf: "flex-start",
      textAlign: "left",
      display: "block",
      width: "100%",

      // Label typography
      fontSize: theme.typography.body2.fontSize,
      lineHeight: theme.typography.body2.lineHeight,
      fontWeight: 400,
      marginBottom: theme.spacing(0.5),
      padding: 0,

      // Prevent MUI from changing label color on focus
      "&.Mui-focused": {
        color: theme.palette.text.primary,
      },

      // Prevent disabled label from becoming greyed-out
      "&.Mui-disabled": {
        color: theme.palette.text.primary,
        opacity: 1,
      },

      // Prevent error state from turning label red
      "&.Mui-error": {
        color: theme.palette.text.primary,
      },

      // Asterisk color (required field indicator)
      "& .MuiFormLabel-asterisk": {
        color: theme.palette.error.main,
      },
    }),

    shrink: ({ theme }) => ({
      // Keep static appearance even when shrink is true
      transform: "none",

      // Keep the same black color
      color: theme.palette.text.primary,

      // Keep same typography size when shrunk
      fontSize: theme.typography.body2.fontSize,
      lineHeight: theme.typography.body2.lineHeight,

      // Maintain left alignment
      alignSelf: "flex-start",
      textAlign: "left",
      display: "block",
      width: "100%",

      // Asterisk color for shrink state
      "& .MuiFormLabel-asterisk": {
        color: theme.palette.error.main,
      },
    }),
  },
};
