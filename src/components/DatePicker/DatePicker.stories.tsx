import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Component from "@components/DatePicker";

export default {
  title: "DatePicker",
  component: Component,
  argTypes: {
    error: {
      control: { type: "text" },
      defaultValue: "error"
    },
  },
} as ComponentMeta<typeof Component>;

export const DatePicker: ComponentStory<typeof Component> = (args) => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: Date) => date && setDate(date);

  return (
    <div>
      <Component {...args} onChange={onChange} selected={date} />
    </div>
  );
};
