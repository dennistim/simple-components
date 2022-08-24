import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component, {InputFieldType, InputFieldSize} from "@components/InputField";

export default {
  title: "Input",
  component: Component,
  argTypes: {
    size: {
      options: [...Object.values(InputFieldSize)],
      control: { type: "select" },
    },
    type: {
      options: [...Object.values(InputFieldType)],
      control: { type: "select" },
    },
    placeholder: {
      control: { type: "text" },
      defaultValue: "placeholder"
    },
    label: {
      control: { type: "text" },
      defaultValue: "label"
    },
    value: {
      control: { type: "text" }
    },
    error: {
      control: { type: "text" },
      defaultValue: "error"
    },
  },
} as ComponentMeta<typeof Component>;

export const InputField: ComponentStory<typeof Component> = (args) =>
  <div>
    <Component {...args} />
  </div>;
