import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component, { AvatarSize }  from "@components/Avatar";


export default {
  title: "Avatar",
  component: Component,
  argTypes: {
    name: {
      control: { type: "text" },
      defaultValue: "Name"
    },
    surname: {
      control: { type: "text" },
      defaultValue: "Surname"
    },
    email: {
      control: { type: "text" },
      defaultValue: "nameSurname@mail.com"
    },
    role: {
      control: { type: "text" },
      defaultValue: "Worker"
    },
    withTitles: {
      control: { type: "boolean" },
      defaultValue: true
    },
    invertedTitle: {
      control: { type: "boolean" },
      defaultValue: true
    },
    size: {
      options: [...Object.values(AvatarSize)],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Component>;

export const Avatar: ComponentStory<typeof Component> = (args) =>
  <div>
    <Component {...args} />
  </div>;
