import React from "react";
import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";
import type { BaseProps } from "../../types/BaseProps";

/**
 * Props for the design-system ⁠TextField component.
 *
 * Extends:
 * - {@link BaseProps} — shared props like ⁠id, ⁠className, ⁠data-testid.
 * - MUI's {@link TextFieldProps} (excluding ⁠variant and ⁠onChange).
 */
export type CustomTextFieldProps = BaseProps & {
  /**
   * Current input value (controlled).
   * @default ""
   */
  value?: string;

  /**
   * Placeholder text displayed when input is empty.
   * @example "Enter your name"
   */
  placeholder?: string;

  /**
   * Whether the field is required.
   * @default false
   */
  required?: boolean;

  /**
   * Automatically focuses the input on mount.
   * @default false
   */
  autoFocus?: boolean;

  /**
   * Whether the field is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Error message displayed when ⁠isError is true.
   * @example "This field is required"
   */
  errorMessage?: string;

  /**
   * Helper text displayed below the input (when no error).
   * @example "Max 50 characters"
   */
  helperText?: string;

  /**
   * Callback fired when value changes.
   * @example
   * ⁠tsx
   * onChange={(value) => console.log(value)}
   * ⁠
   */
  onChange?: (newValue: string) => void;

  /**
   * Name attribute for form integration.
   * @example "username"
   */
  name?: string;

  /**
   * Input type (e.g. text, password, number, email).
   * @default "text"
   */
  type?: React.InputHTMLAttributes<unknown>["type"];

  /**
   * Default value for uncontrolled usage.
   */
  defaultValue?: string;
} & Omit<
    TextFieldProps<"outlined">,
    "variant" | "onChange" | "color" | "size"
  >;

/**
 * A single-line text input field based on MUI's TextField.
 *
 * Supports standard text input props and shared design-system features via ⁠BaseProps.
 */

/**
 * Design system TextField (NO forwardRef)
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
      className={className}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      required={required}
      autoFocus={autoFocus}
      disabled={disabled}
      data-testid={
        dataTestId ??
        `textfield-${String(name || id || "field")
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      }
      helperText={props.error ? errorMessage : helperText}
      fullWidth={fullWidth}
      name={name}
      id={id}
      type={type}
      variant="outlined"
      onChange={(e) => onChange?.(e.target.value)}
      label={props.hiddenLabel ? "" : props.label}
      {...props}
    />
  );
}

TextField.displayName = "TextField";