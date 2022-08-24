import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component, { BadgeEntity, BadgeStatus }  from "@components/Badge";


export default {
  title: "Badge",
  component: Component,
  argTypes: {
    entity: {
      options: [...Object.values(BadgeEntity)],
      control: { type: "select" },
      defaultValue: BadgeEntity.Product
    },
    status: {
      options: [...Object.values(BadgeStatus)],
      control: { type: "select" },
      defaultValue: BadgeStatus.New
    },
    text: {
      control: { type: "text" },
    }
  },
} as ComponentMeta<typeof Component>;

export const Badge: ComponentStory<typeof Component> = (args) =>
  <div>
    <Component {...args} />
  </div>;
