import React from "react";
import classNames from "classnames";
import { SpinnerProp, SpinnerSize, spinnerSizeClass } from "./Spinner.types";

import styles from "./Spinner.module.scss";

const Spinner = ({
  size = SpinnerSize.Large,
  className,
}: SpinnerProp) => {
  return (
    <div className={classNames(styles.spinner, spinnerSizeClass[size], className)} />
  );
};

export default Spinner;
