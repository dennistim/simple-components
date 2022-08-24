import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component  from "@components/Checkbox";

export default {
  title: "Checkbox",
  component: Component,
  argTypes: {
    label: {
      control: { type: "text"},
      defaultValue: "Checkbox"
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false
    },
    readonly: {
      control: { type: "boolean" },
      defaultValue: false
    },
    checked: {
      control: { type: "boolean" },
      defaultValue: false
    },
    toggle: {
      control: { type: "boolean" },
      defaultValue: false
    },
    hidden: {
      control: { type: "boolean" },
      defaultValue: false
    }
  },
} as ComponentMeta<typeof Component>;

export const Checkbox: ComponentStory<typeof Component> = (args) =>
  <div>
    <Component {...args} />
  </div>;
