import styles from "./Spinner.module.scss";
import { getClasses } from "@utils";

export enum SpinnerSize {
  Large = "large",
  Mini = "mini",
  Small = "small"
}

export type SpinnerProp = {
  size?: SpinnerSize,
  className?: string,
};

export const spinnerSizeClass = getClasses(SpinnerSize, styles);
