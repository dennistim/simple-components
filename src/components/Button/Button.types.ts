import { IconName } from "@components/SvgIcon";
import { getClasses } from "@utils";

import styles from "./Button.module.scss";

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Line = "line",
}

export enum ButtonSize {
  Large = "large",
  Mini = "mini",
  Small = "small",
}

export type ButtonProp = {
  type?: ButtonType;
  size?: ButtonSize;
  icon?: IconName;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

export const buttonTypeClasses = getClasses(ButtonType, styles);

export const buttonSizeClasses = getClasses(ButtonSize, styles);
