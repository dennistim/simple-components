import React from "react";
import { ReactSVG } from "react-svg";
import { IconSize, SvgIconProp } from "./SvgIcon.types";

import "./SvgIcon.styles.scss";

const SvgIcon = ({
  icon,
  className,
  size = IconSize.Large,
  color = "var(--text)",
  fill = "none",
  onClick,
}: SvgIconProp) => {
  const propClassName = className ? ` ${className}` : "";

  return (
    <ReactSVG
      src={`./assets/icons/${icon}.svg`}
      onClick={onClick}
      wrapper="span"
      className="svg-icon-wrapper"
      beforeInjection={(svg) => {
        svg.classList.add("svg-icon" + propClassName);
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
