// import { styled } from "@mui/material/styles";
import MuiButton, { type ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  label: string;
  variant: Extract<ButtonProps["variant"], "outlined" | "contained">;
  color: Extract<ButtonProps["color"], "primary" | "secondary" | "error">;
}

function Button({
  label,
  onClick,
  color = "primary",
  disabled = false,
  variant = "contained",
  ...props
}: CustomButtonProps) {
  return (
    <MuiButton
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      color={color}
      {...props}
    >
      {label}
    </MuiButton>
  );
}

export { Button };
