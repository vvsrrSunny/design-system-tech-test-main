import { forwardRef } from "react";
import MuiButton, {
  type ButtonProps as MuiButtonProps,
} from "@mui/material/Button";
import type { BaseProps } from "../../types/BaseProps";

/**
 * Props specific to the design-system `Button` component.
 */
export type ButtonOwnProps = {
  /**
   * The text label displayed inside the button.
   */
  label: string;

  /**
   * The variant of the button.
   * - `contained` — filled background, used for primary actions.
   * - `outlined` — transparent background with a border, used for secondary actions.
   *
   * @default "contained"
   */
  variant?: "outlined" | "contained";

  /**
   * The color of the button.
   * - `primary` — main theme color.
   * - `secondary` — secondary theme color.
   * - `error` — used for destructive actions.
   *
   * @default "primary"
   */
  color?: "primary" | "secondary" | "error";

  /**
   * Click event handler.
   *
   * @remarks
   * This callback is triggered when the button is activated by mouse or keyboard.
   *
   * @example
   * ```tsx
   * <Button label="Save" onClick={() => console.log("Clicked")} />
   * ```
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

/**
 * Combined props for the design-system `Button` component.
 *
 * Extends:
 * - {@link BaseProps} for shared design-system properties such as `sx`, `id`, and `data-testid`.
 * - MUI's {@link MuiButtonProps} (excluding `color` and `variant` to apply design-system defaults).
 */
export type ButtonProps = ButtonOwnProps &
  BaseProps &
  Omit<MuiButtonProps, "color" | "variant">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      onClick,
      color = "primary",
      disabled = false,
      variant = "contained",
      "data-testid": dataTestId,
      ...props
    },
    ref,
  ) => {
    return (
      <MuiButton
        ref={ref}
        onClick={onClick}
        variant={variant}
        disabled={disabled}
        color={color}
        data-testid={
          dataTestId ??
          `button-${String(label).toLowerCase().replace(/\s+/g, "-")}`
        }
        {...props}
      >
        {label}
      </MuiButton>
    );
  },
);

Button.displayName = "Button";
