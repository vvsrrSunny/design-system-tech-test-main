import MuiTextField, { type TextFieldProps } from "@mui/material/TextField";

interface CustomTextFieldProps
  extends Omit<TextFieldProps<"outlined">, "variant"> {
  placeholder?: string;
  value: string;
  disabled?: boolean;
  isError?: boolean;
}

function TextField({
  placeholder = "",
  value,
  disabled = false,
  isError = false,
  ...props
}: CustomTextFieldProps) {
  return (
    <MuiTextField
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      error={isError}
      variant="outlined" // ✅ fixed: no more duplicate prop
      fullWidth
      {...props}
    />
  );
}

export { TextField };
