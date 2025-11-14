import type { SxProps } from "@mui/material";

export interface BaseProps {
  /**
   * Usually applied to the top level component.
   */
  id?: string;

  /**
   * Usually applied to the top level component.
   *
   * Prefer using `getByRole` queries in tests for better accessibility and maintainability.
   * As is recommended by [testing-library](https://testing-library.com/docs/queries/about/#priority) and [playwright](https://playwright.dev/docs/best-practices#use-locators).
   */
  "data-testid"?: string;

  /**
   * Used for one off styling, usually applied to the top level component.
   *
   * - Prefer using `sx` instead of the `styled` function when dynamically setting values during runtime, for better performance.
   * - Prefer using `sx` instead of the `style` prop, since it comes with MUI features built-in.
   * - Prefer using the `styled` function instead of the `sx` prop when applying styling to multiple components.
   */
  sx?: SxProps;

  /**
   * Usually applied to the top level component.
   *
   * Allows the ability to extend the components styling via `styled`.
   */
  className?: string;
}
