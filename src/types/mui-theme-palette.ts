/**
 * Module augmentation for MUI theme.
 *
 * Adds custom `outlinedColors`, `focusOutline`, and `inputColors` to the palette
 * for use in the Transmax Design System.
 */
declare module "@mui/material/styles" {
  /**
   * Extended Palette interface used at runtime (`theme.palette.xyz`).
   */
  interface Palette {
    /**
     * Custom color tokens used for the "outlined" component variant.
     */
    outlinedColors: {
      /** Background color for the default outlined state. */
      background: string;
      /** Border color for the default outlined state. */
      border: string;
      /** Background color when hovered. */
      hoverBackground: string;
      /** Border color when hovered. */
      hoverBorder: string;
    };

    /**
     * Color for the focus ring used across components.
     */
    focusOutline: string;

    /**
     * Reusable color tokens for text fields and other input components.
     */
    inputColors: {
      /** Default input text color. */
      text: string;

      /** Color used when an input is disabled. */
      disabledText: string;

      /** Placeholder text color. */
      placeholder: string;

      /**
       * Colors applied when an input is in an error state.
       */
      error: {
        /** Background color when error is active. */
        background: string;
        /** Border color when error is active. */
        border: string;
      };
    };
  }

  /**
   * Extended PaletteOptions interface used when creating a theme
   * (`createTheme({ palette: { ... } })`).
   */
  interface PaletteOptions {
    /**
     * Optional configuration for styled outlined components.
     */
    outlinedColors?: {
      /** Background color for outlined variant. */
      background: string;
      /** Border color for outlined variant. */
      border: string;
      /** Hover background color for outlined variant. */
      hoverBackground: string;
      /** Hover border color for outlined variant. */
      hoverBorder: string;
    };

    /**
     * Optional color used for focus rings.
     */
    focusOutline?: string;

    /**
     * Optional color group for input-related components.
     */
    inputColors?: {
      /** Standard input text color. */
      text: string;

      /** Disabled input text color. */
      disabledText: string;

      /** Placeholder text color. */
      placeholder: string;

      /** Optional error token group. */
      error?: {
        /** Background color when error is active. */
        background: string;
        /** Border color when error is active. */
        border: string;
      };
    };
  }
}
