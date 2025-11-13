import type { Components, Theme } from "@mui/material";

/* ------------------ TEXTFIELD OVERRIDES ------------------ */

export const textFieldOverrides: Components<Theme>["MuiTextField"] = {
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
