import React from "react";
import classNames from "classnames";
import { ButtonProp, ButtonSize, buttonSizeClasses, ButtonType, buttonTypeClasses } from "./Button.types";
import SvgIcon from "@components/SvgIcon";
import Text from "@components/Text";
import Spinner, { SpinnerSize } from "@components/Spinner";

import styles from "./Button.module.scss";

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
      className={classNames(styles.btn, buttonTypeClasses[type], buttonSizeClasses[size], className)}
      onClick={onClick}
    >
      <span className={classNames(styles.btn_content, { [styles.loading]: loading })}>
        <span className={styles.btn_text}>
          {icon && <SvgIcon icon={icon} pointer className={styles.btn_svg}/>}
          {children}
        </span>
        {loading &&
        <span className={styles.btn_loader}>
          <Spinner size={SpinnerSize.Mini} />
        </span>}
      </span>
    </button>
  );
};

export default Button;
