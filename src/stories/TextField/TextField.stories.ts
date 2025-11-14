import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "./TextField";

const meta = {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text displayed inside the field",
      defaultValue: "Enter text",
    },
    value: {
      control: "text",
      description: "Current text value of the field",
      defaultValue: "",
    },
    disabled: {
      control: "boolean",
      description: "Disables the text field when true",
      defaultValue: false,
    },
    type: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
    maxRows: {
      control: { type: "text" },
    },
    minRows: {
      control: { type: "text" },
    },
    rows: {
      control: { type: "text" },
    },
    classes: {
      control: false,
    },
    onFocus: {
      control: false,
    },
    onBlur: {
      control: false,
    },
    inputRef: {
      control: false,
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Custom TextField component – controlled input with support for placeholder, disabled state, and error indication.",
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/wtMCijFeCt780z0fbtvBEP/Design-System-Tech-Test---Figma?node-id=1-181&p=f&m=dev",
    },
    controls: {
      exclude: ["component"], // hides it from controls table
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
    value: "",
    disabled: false,
  },
};

export const WithText: Story = {
  args: {
    placeholder: "Enter your email",
    value: "sunny@example.com",
    disabled: false,
    error: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled field",
    value: "Can't edit this",
    disabled: true,
    error: false,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Error example",
    value: "Invalid input",
    disabled: false,
    error: true,
  },
};
