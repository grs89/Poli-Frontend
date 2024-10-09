import { MenuItem } from ".";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    stateProp: {
      options: ["disabled", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Menu Label",
    hasShortcut: true,
    hasIcon: true,
    description: "Menu description.",
    hasDescription: true,
    stateProp: "disabled",
    className: {},
  },
};
