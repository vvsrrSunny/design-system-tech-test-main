import React from "react";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import type { BaseProps } from "../../types/BaseProps";

/**
 * Props for the design-system TextField component.
 *
 * This component exposes a simplified and DS-approved API on top of MUI's TextField.
 *
 * It extends:
 * - {@link BaseProps} — common DS props (id, className, data-testid)
 * - A subset of MUI's {@link TextFieldProps} (variant, onChange, color, size, inputRef are intentionally removed)
 *
 * All custom DS props are defined explicitly to ensure a stable, design-consistent API surface.
 */
export type CustomTextFieldProps = BaseProps & {
  /**
   * Current value of the input (controlled usage).
   * @default ""
   */
  value?: string;

  /**
   * Placeholder text shown when input is empty.
   */
  placeholder?: string;

  /**
   * Whether the input is required.
   * This only sets the HTML `required` attribute.
   * @default false
   */
  required?: boolean;

  /**
   * Automatically focuses the input when mounted.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Disables the entire input field.
   * @default false
   */
  disabled?: boolean;

  /**
   * Text displayed under the input when `error` is true.
   * Replaces default MUI behavior to keep DS control over error messaging.
   */
  errorMessage?: string;

  /**
   * Helper text displayed below the field when there is no error.
   */
  helperText?: string;

  /**
   * Called when the input's value changes.
   * DS uses a simplified signature: `(newValue: string) => void`.
   */
  onChange?: (newValue: string) => void;

  /**
   * Name attribute for form integrations.
   */
  name?: string;

  /**
   * HTML input type (text, password, email, number, etc.)
   * @default "text"
   */
  type?: React.InputHTMLAttributes<unknown>["type"];

  /**
   * Default value for uncontrolled usage.
   */
  defaultValue?: string;
} & Omit<
    TextFieldProps<"outlined">,
    // Removed MUI props to avoid conflicts with DS API conventions
    "variant" | "onChange" | "color" | "size" | "inputRef" | "hiddenLabel"
  >;

/**
 * Design System TextField (NO forwardRef).
 *
 * This wrapper:
 * - Maps DS props → MUI props
 * - Applies DS default behavior and styling rules
 * - Ensures a controlled API surface for consistency across applications
 */
export function TextField({
  placeholder,
  value = "",
  required = false,
  autoFocus = false,
  disabled = false,
  errorMessage,
  helperText,
  fullWidth = true,
  onChange,
  className,
  "data-testid": dataTestId,
  name,
  id,
  type = "text",
  defaultValue,
  ...props
}: CustomTextFieldProps) {
  return (
    <MuiTextField
      // Style/Class handling
      className={className}
      // Core input props
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      required={required}
      autoFocus={autoFocus}
      disabled={disabled}
      fullWidth={fullWidth}
      name={name}
      id={id}
      type={type}
      variant="outlined" // DS-standard enforced variant
      // Testing ID — auto-generated if not provided
      data-testid={
        dataTestId ??
        `textfield-${String(name || id || "field")
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      }
      /**
       * HelperText logic:
       * - If `error` is true → show design-system errorMessage
       * - Otherwise → show normal helperText
       */
      helperText={props.error ? errorMessage : helperText}
      /**
       * DS-standard onChange:
       * Converts MUI's event → simple string value.
       */
      onChange={(e) => onChange?.(e.target.value)}
      // Spread remaining DS-approved MUI props
      {...props}
    />
  );
}

// Better name in React DevTools
TextField.displayName = "TextField";
