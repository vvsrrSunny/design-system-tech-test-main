import { type ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { lightTheme } from "./theme";

export interface DesignSystemThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

/**
 * Design System ThemeProvider
 * Wraps MUI ThemeProvider and applies CssBaseline automatically.
 */
export const ThemeProvider = ({
  children,
  theme = lightTheme,
}: DesignSystemThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
