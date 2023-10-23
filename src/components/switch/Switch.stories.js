import { Switch } from ".";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    state: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "off",
    className: {},
  },
};
