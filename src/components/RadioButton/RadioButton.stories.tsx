import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component  from "@components/RadioButton";

export default {
  title: "RadioButton",
  component: Component,
  argTypes: {
    label: {
      control: { type: "text"},
      defaultValue: "RadioButton"
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
    name: {
      control: { type: "text"},
      defaultValue: "RadioButton"
    }
  },
} as ComponentMeta<typeof Component>;

export const RadioButton: ComponentStory<typeof Component> = (args) =>
  <div>
    <Component {...args} />
  </div>;
