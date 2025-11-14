import { type ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";

export interface DesignSystemThemeProviderProps {
  children: ReactNode;
  /**
   * Either: "light" | "dark" | a fully constructed MUI Theme object.
   * Defaults to "light".
   */
  theme?: "light" | "dark" | Theme;
}

/**
 * Design System ThemeProvider
 * Wraps MUI ThemeProvider and applies CssBaseline automatically.
 */
export const ThemeProvider = ({
  children,
  theme = lightTheme,
}: DesignSystemThemeProviderProps) => {
  // Resolve string → actual Theme object
  const resolvedTheme: Theme =
    theme === "dark" ? darkTheme : theme === "light" ? lightTheme : theme; // if the user passes a full Theme object

  return (
    <MuiThemeProvider theme={resolvedTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
