import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { RadioButtonProp } from "./RadioButton.types";
import { uuid } from "@utils";

import styles from "./RadioButton.module.scss";

const RadioButton = ({
  name,
  label,
  value,
  readonly = false,
  disabled = false,
  checked = false,
  toggle = false,
  className,
  onChange,
}: RadioButtonProp) => {
  const [currentState, setCurrentState] = useState<boolean>(checked);
  const id = uuid();

  useEffect(() => {
    setCurrentState(checked);
  }, [checked]);

  return (
    <label htmlFor={name} className={classnames(styles.radioButton_label, { [styles.disabled]: disabled })}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled || readonly}
        checked={currentState}
        className={classnames(className, { [styles.toggle]: toggle })}
        onChange={(e: React.SyntheticEvent) => {
          !readonly && !disabled && setCurrentState(!currentState);
          !readonly && !disabled && onChange && onChange(e, { checked: !currentState, value });
        }}
      />
      {label}
    </label>
  );
};

export default RadioButton;
