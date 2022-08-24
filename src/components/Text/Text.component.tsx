import React from "react";
import { TextProp } from "./Text.types";

import Colors from "@styles/colors.scss";

const Text = ({
  tag = "span",
  color = Colors.textColor,
  size = "inherit",
  lineHeight = 16,
  bgColor,
  className,
  children
}: TextProp) => {
  return React.createElement(
    tag,
    {
      className,
      style: {
        color,
        fontSize: `${typeof size === "number" ? size + "px" : size}`,
        lineHeight: `${lineHeight}px`,
        backgroundColor: bgColor
      }
    },
    children
  );
};

export default Text;
