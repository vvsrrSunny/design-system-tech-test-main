// src/theme/tokens.ts

export const tokens = {
  radius: {
    medium: 4,
  },
  spacing: 8,
};

export const typography = {
  fontFamily: "Inter",
  fontSize: 14,
  lineHeight: 20,
  button: {
    fontFamily: "Inter",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    textTransform: "none" as const, // ✅ literal type
  },
};
