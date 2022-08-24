import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component, { ButtonSize, ButtonType }  from "@components/Button";
import { IconName } from "@components/SvgIcon";


export default {
  title: "Button",
  component: Component,
  argTypes: {
    type: {
      options: [...Object.values(ButtonType)],
      control: { type: "select" },
    },
    size: {
      options: [...Object.values(ButtonSize)],
      control: { type: "select" },
    },
    icon: {
      options: [...Object.values(IconName)],
      control: { type: "select" },
    },
    children: {
      description: "text",
      control: { type: "text"},
      defaultValue: "Button"
    },
    disabled: {
      control: { type: "boolean" }
    },
    loading: {
      control: { type: "boolean" }
    }
  },
} as ComponentMeta<typeof Component>;

export const Button: ComponentStory<typeof Component> = (args) =>
  <div>
    <Component {...args} >
      { args.children }
    </Component>
  </div>;
