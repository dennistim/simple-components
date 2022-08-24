import React from "react";
import { ReactSVG } from "react-svg";
import classnames from "classnames";
import { IconSize, SvgIconProp } from "./SvgIcon.types";

import styles from "./SvgIcon.module.scss";
import Colors from "@styles/colors.scss";

const SvgIcon = ({
  icon,
  className,
  size = IconSize.Large,
  color = Colors.textColor,
  pointer,
  fill = "none",
  onClick,
}: SvgIconProp) => {
  const cursorPointer = pointer ? "pointer" : "initial";

  return (
    <ReactSVG
      style={{cursor: cursorPointer}}
      src={`./assets/icons/${icon}.svg`}
      onClick={onClick}
      wrapper="span"
      className={classnames(styles.svg_icon_wrapper, className)}
      beforeInjection={(svg) => {
        svg.setAttribute("fill", fill);
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        for (let i = 0; i < svg.children.length; i++) {
          if (svg.children.item(i) && svg.children.item(i)?.attributes.hasOwnProperty("stroke")) {
            svg.children.item(i)?.setAttribute("stroke", color);
          }
        }
      }}
    />
  );
};

export default SvgIcon;
