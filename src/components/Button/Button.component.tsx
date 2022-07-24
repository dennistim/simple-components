import React from "react";
import classNames from "classnames";
import { ButtonProp, ButtonSize, ButtonType } from "./Button.types";
import SvgIcon from "@components/SvgIcon";

import "./Button.styles.scss";
import Spinner, { SpinnerSize } from "@components/Spinner";

const Button = ({
  size = ButtonSize.Small,
  type = ButtonType.Primary,
  disabled = false,
  className,
  icon,
  onClick,
  children,
  loading,
}: ButtonProp) => {
  return (
    <button
      disabled={disabled}
      className={classNames("btn", type, size, className)}
      onClick={onClick}
    >
      <span className={classNames("btn-content", { loading })}>
        <span className="btn-text">
          {icon && <SvgIcon icon={icon} />}
          {children}
        </span>
        {loading &&
        <span className="btn-loader">
          <Spinner size={SpinnerSize.Mini} />
        </span>}
      </span>
    </button>
  );
};

export default Button;
