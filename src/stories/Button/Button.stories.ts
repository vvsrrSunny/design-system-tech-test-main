import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: {
      control: "text",
      description: "The text to display inside the button",
      defaultValue: "Button",
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "error"],
      description: "The button color",
      defaultValue: "primary",
    },
    variant: {
      control: { type: "radio" },
      options: ["contained", "outlined"],
      description: "The button variant (Contained or Outlined)",
      defaultValue: "contained",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      defaultValue: "false",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Button component.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/wtMCijFeCt780z0fbtvBEP/Design-System-Tech-Test---Figma?node-id=0-1&p=f&t=qQKSXsPss7kiBGXZ-0",
    },
    controls: {
      exclude: ["component"], // hides it from controls table
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    color: "primary",
    label: "Label",
    variant: "contained",
  },
};

export const Outlined: Story = {
  args: {
    color: "primary",
    variant: "outlined",
    label: "Label",
  },
};

export const Disabled: Story = {
  args: {
    color: "primary",
    disabled: true,
    label: "Label",
    variant: "contained",
  },
};

export const Error: Story = {
  args: {
    color: "error",
    label: "Label",
    variant: "contained",
  },
};
