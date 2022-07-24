import React from "react";
import classNames from "classnames";
import { SpinnerProp, SpinnerSize } from "./Spinner.types";

import "./Spinner.styles.scss";

const Spinner = ({
  size = SpinnerSize.Large,
  className,
}: SpinnerProp) => {
  return (
    <div className={classNames("spinner", size, className)} />
  );
};

export default Spinner;
